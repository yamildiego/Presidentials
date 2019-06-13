<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Admin extends CI_Controller
{

    public function __construct()
    {
        parent::__construct();
    }

    public function index()
    {
        echo "OK";
    }

    public function _send_email($p_email_from, $p_email_to, $p_message, $p_subject)
    {
        $this->load->library('email');
        $this->email->set_mailtype("html");
        $this->email->from($p_email_from, $this->config->item('name_company'));
        $this->email->to($p_email_to);
        $this->email->subject($p_subject);
        $this->email->message($p_message);
        return $this->email->send();
    }
}