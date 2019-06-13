<?php
use Restserver\Libraries\REST_Controller;

header("Access-Control-Allow-Origin: *");

defined('BASEPATH') or exit('No direct script access allowed');

require APPPATH . 'libraries/REST_Controller.php';
require APPPATH . 'libraries/Format.php';

class Votes extends REST_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('entities_model');
    }

    public function president_post()
    {
        $vote = $this->post('vote');

        if ($vote >= 1 && $vote <= 5) {
            $president = new President();
            $president->setVote($vote);
            $president->setIp($this->input->ip_address());

            try {
                $president = $this->entities_model->save($president);
                // CREATED (201) being the HTTP response code
                $this->response(array('status' => "OK", 'data' => $president->getId()), REST_Controller::HTTP_CREATED);
            } catch (\Throwable $th) {
                // INTERNAL_SERVER_ERROR (500) being the HTTP response code
                $this->response(array('status' => "ERROR", 'data' => 'unexpected_error'), REST_Controller::HTTP_INTERNAL_SERVER_ERROR);
            }
        } else {
            // BAD_REQUEST (400) being the HTTP response code
            $this->response(null, REST_Controller::HTTP_BAD_REQUEST);
        }
    }

    public function vicepresident_post()
    {
        $vote = $this->post('vote');

        if ($vote >= 1 && $vote <= 5) {
            $vicepresident = new VicePresident();
            $vicepresident->setVote($vote);
            $vicepresident->setIp($this->input->ip_address());

            try {
                $vicepresident = $this->entities_model->save($vicepresident);
                // CREATED (201) being the HTTP response code
                $this->response(array('status' => "OK", 'data' => $vicepresident->getId()), REST_Controller::HTTP_CREATED);
            } catch (\Throwable $th) {
                // INTERNAL_SERVER_ERROR (500) being the HTTP response code
                $this->response(array('status' => "ERROR", 'data' => 'unexpected_error'), REST_Controller::HTTP_INTERNAL_SERVER_ERROR);
            }
        } else {
            // BAD_REQUEST (400) being the HTTP response code
            $this->response(null, REST_Controller::HTTP_BAD_REQUEST);
        }
    }

    public function vt_post()
    {
        $president = $this->post('president');
        $vicepresident = $this->post('vicepresident');
        $dni = str_replace(".", "", $this->post('dni'));
        $dni = str_replace("-", "", $dni);
        $dni = str_replace("{", "", $dni);
        $dni = str_replace("(", "", $dni);
        $dni = str_replace("[", "", $dni);
        $dni = str_replace("}", "", $dni);
        $dni = str_replace(")", "", $dni);
        $dni = str_replace("]", "", $dni);
        $dni = str_replace(" ", "", $dni);
        $lastname = $this->post('lastname');

        $voteOld = $this->entities_model->getVoteByDni($dni);

        if ($voteOld != null) {
            // FOUND (302)
            $this->response(array('status' => "ERROR", 'data' => 'already_voted'), REST_Controller::HTTP_FOUND);
        }

        if ($voteOld == null && $president >= 1 && $president <= 5 && $vicepresident >= 1 && $vicepresident <= 5) {
            $vote = new Vote();
            $vote->setPresident($president);
            $vote->setVicepresident($vicepresident);
            $vote->setDni($dni);
            $vote->setLastName($lastname);
            $vote->setIp($this->input->ip_address());

            try {
                $vote = $this->entities_model->save($vote);
                // CREATED (201) being the HTTP response code
                $this->response(array('status' => "OK", 'data' => $vote->getId()), REST_Controller::HTTP_CREATED);
            } catch (\Throwable $th) {
                // INTERNAL_SERVER_ERROR (500) being the HTTP response code
                $this->response(array('status' => "ERROR", 'data' => 'unexpected_error'), REST_Controller::HTTP_INTERNAL_SERVER_ERROR);
            }
        } else {
            // BAD_REQUEST (400) being the HTTP response code
            $this->response(null, REST_Controller::HTTP_BAD_REQUEST);
        }
    }
}