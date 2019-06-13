<div id="container_messeges">
    <?php
    if ($this->session->userdata('messenge_informative') != null) {
        echo $this->session->userdata('messenge_informative');
        $this->session->unset_userdata('messenge_informative');
    }
    echo validation_errors();
    ?>
</div>