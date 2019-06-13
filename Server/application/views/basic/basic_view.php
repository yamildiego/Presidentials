<!DOCTYPE html>
<html lang="es">
<head>
    <?php $this->load->view('basic/head_view');?>
</head>
<body>
    <div class="container-fluid">
        <!--Barra superior-->
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <!--
                    <img src="<?php echo base_url('assets/image/logo.png'); ?>" class="img-responsive"
                        alt="<?php echo $this->config->item('name_company'); ?>">
            -->
            <a class="navbar-brand" href="<?php echo base_url('back/home'); ?>">ULISES</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <?php echo $menu; ?>
                </ul>
                <div class="dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <?php echo $name_user; ?> <i class="fa fa-user fa-fw"></i>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="<?php echo base_url('back/home/config'); ?>">
                            <i class="fa fa-cog fa-fw"></i>
                            Mi cuenta
                        </a>
                        <a class="dropdown-item" href="<?php echo base_url('back/home/change_password'); ?>">
                            <i class="fa fa-key fa-fw"></i>
                            Cambiar contrase&ntilde;a
                        </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="<?php echo base_url('back/home/logout'); ?>">
                            <i class="fa fa-sign-out fa-fw"></i>
                            Cerrar sesi&oacute;n
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    <!--Vista dinamica-->
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <?php echo $view_standard; ?>
            </div>
        </div>
    </div>
    <!-- <footer class="footer col-xs-12">
        <div class="pull-left">
            Copyright &copy; Famet.SRL 2016. Todos los derechos reservados.
        </div>
        <div class="pull-right">
            <img src="<?php echo base_url('assets/image/logo_nocios.png'); ?>" class="img-logo-nocios" />
        </div>
    </footer> -->
</body>
</html>