<div class="container_messeges" style="min-height: 38px;">           
    <?php
    if ($this->session->userdata('messenge_informative') != null) {
        echo $this->session->userdata('messenge_informative');
        $this->session->unset_userdata('messenge_informative');
    }
    ?>
</div>