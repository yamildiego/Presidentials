<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />

<title>
    <?php echo $this->config->item('name_company'); ?>
</title>

<!-- Bootstrap CSS -->
<link href="<?php echo base_url('node_modules/bootstrap/dist/css/bootstrap.min.css'); ?>" rel="stylesheet" />

<!-- Smoke (Alerts)-->
<link href="<?php echo base_url('assets/libraries/smoke.js-master/smoke.css'); ?>" rel="stylesheet" />

<!-- Font Aweasome -->
<link href="<?php echo base_url('node_modules/font-awesome/css/font-awesome.min.css'); ?>" rel="stylesheet" />

<!-- My Style Base -->
<link href="<?php echo base_url('assets/css/base.css'); ?>" rel="stylesheet" />

<!-- Custom Bootstrap -->
<link href="<?php echo base_url('assets/css/bootstrap.css'); ?>" rel="stylesheet" />

<!-- My Style -->
<link href="<?php echo base_url('assets/css/style.css'); ?>" rel="stylesheet" />

<!-- jQuery -->
<script src="<?php echo base_url('node_modules/jquery/dist/jquery.min.js'); ?>"></script>

<!-- Bootstrap JavaScript -->
<script src="<?php echo base_url('node_modules/bootstrap/dist/js/bootstrap.min.js'); ?>"></script>

<!-- Smoke(Alert) -->
<script src="<?php echo base_url('assets/libraries/smoke.js-master/smoke.min.js'); ?>"></script>

<!-- Custom JavaScript -->
<script src="<?php echo base_url('assets/javascript/myconfirm.js'); ?>"></script>

<!-- BASE URL JavaScript -->
<script>
var base_url = '<?php echo base_url(); ?>';
</script>

<!-- Custom JavaScript URLs -->
<!-- <script src="<?php echo base_url('assets/javascript/urls.js'); ?>"></script> -->

<?php
if (isset($javascript_files)) {
    foreach ($javascript_files as $value) {
        echo '<script src="' . $value . '" language="JavaScript"></script>';
    }
}
?>

<script>
$(document).ready(function() {
    setInterval(function() {
        $('#container_messeges .alert').fadeOut(3000);
    }, '7000');

    $("form input, form select").not("[type=hidden]").first().focus();
    <?php if (isset($javascript_onload)) {
    echo $javascript_onload;
}
?>
});
</script>

<link rel="shortcut icon" href="<?php echo base_url('assets/image/favicon.ico'); ?>" />