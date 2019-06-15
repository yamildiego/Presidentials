<?php
use Restserver\Libraries\REST_Controller;

header('Access-Control-Allow-Origin: https://www.presidenciales.com.ar');
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST, PUT");

defined('BASEPATH') or exit('No direct script access allowed');

require APPPATH . 'libraries/REST_Controller.php';
require APPPATH . 'libraries/Format.php';

class Contact extends REST_Controller
{
    protected $min;
    protected $max;

    public function __construct()
    {
        parent::__construct();
        $this->load->model('entities_model');
        $this->min = 0;
        $this->max = 7;
        $REFERER = $_SERVER['HTTP_REFERER'];

        if ($REFERER != "https://www.presidenciales.com.ar/contacto") {
            $this->response(array('status' => "ERROR", 'data' => 'unexpected_error'), REST_Controller::HTTP_INTERNAL_SERVER_ERROR);
        }

    }

    public function send_post()
    {
        $obj = (object) array('name' => $this->post('name'), 'email' => $this->post('email'), 'message' => $this->post('message'));

        $errors = array();

        if ($obj->name == '' || $obj->name == null || $obj->email == '' ||
            $obj->email == null || !filter_var($obj->email, FILTER_VALIDATE_EMAIL) ||
            $obj->message == '' || $obj->message == null) {
            $data = array('status' => true, 'errors' => true);
            $this->response($data, REST_Controller::HTTP_FOUND); // FOUND (302)
        } else {
            $mensaje = $this->load->view('email_contact_view', array('obj' => $obj), true);

            $status_email = $this->_send_email('info@unallama.com.ar', 'yamildiego@gmail.com', $mensaje, 'Consulta Web: ' . 'Consulta WEB Presideciales');

            if ($status_email) {
                $data = array('status' => true);
                $this->response($data, REST_Controller::HTTP_OK); // OK (200)
            } else {
                $this->response(array('status' => false), REST_Controller::HTTP_FOUND); // FOUND (302)
            }
        }
    }

    private function _send_email($p_email_from, $p_email_to, $p_message, $p_subject)
    {
        $p_email_from = 'info@unallama.com.ar';
        $this->load->library('email');
        $this->email->initialize();
        $this->email->from($p_email_from, 'Presideciales');
        $this->email->to($p_email_to);
        $this->email->subject($p_subject);
        $this->email->message($p_message);
        $a = $this->email->send();

        return $a;
    }

}