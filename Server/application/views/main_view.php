<h5 class="card-title text-center mb-4">Inicio de sesi&oacute;n</h5>
<div style="display:none" id="login-alert" class="alert alert-danger col-sm-12"></div>
<?php echo $open_form; ?>
<div class="input-group mb-3">
    <div class="input-group-prepend">
        <span class="input-group-text">
            <i class="fa fa-user"></i>
        </span>
    </div>
    <?php echo $user; ?>
</div>
<div class="input-group mb-3">
    <div class="input-group-prepend">
        <span class="input-group-text">
            <i class="fa fa-lock"></i>
        </span>
    </div>
    <?php echo $password; ?>
</div>
<div class="d-flex flex-column bd-highlight">
    <div>
        <?php echo validation_errors(); ?>
        <?php echo $this->session->flashdata('messenge_informative'); ?>
    </div>
    <div class="text-center bd-highlight">
        <?php echo $send; ?>
    </div>
    <div class="text-center bd-highlight pt-4">
        <?php echo $password_recovery; ?>
    </div>
</div>
<?php echo $close_form; ?>