<!-- Upload and crop image JavaScript -->
<script src="<?php echo base_url('assets/jQuery-File-Upload-9.11.2/js/vendor/jquery.ui.widget.js'); ?>"></script>
<script src="<?php echo base_url('assets/jQuery-File-Upload-9.11.2/js/jquery.iframe-transport.js'); ?>"></script>
<script src="<?php echo base_url('assets/jQuery-File-Upload-9.11.2/js/jquery.fileupload.js'); ?>"></script>
<script src="<?php echo base_url('assets/jquery.imgareaselect-0.9.10/scripts/jquery.imgareaselect.min.js'); ?>"></script>

<script src="<?php echo base_url('assets/nocios/upload-crop/crop.js'); ?>"></script>
<script src="<?php echo base_url('assets/nocios/upload-crop/uploads.js'); ?>"></script>

<?php if (isset($isMultiple) && $isMultiple) { ?>

    <div class="form-group" id="rowUploadImage">
    <?php if($operation != 'view') {?>
        <label for="name" class="<?php echo ((isset($colBtn)) ? $colBtn : 'col-sm-2'); ?> control-label">
            <span class="btn btn-success fileinput-button">
                <span id="btnUploadImage<?php echo $imageTo; ?>">Agregar imagen </span>
                <input id="fileupload" type="file" name="files[]"/>
            </span>
        </label>
    <?php }?>
        <div class="<?php echo ((isset($colImage)) ? $colImage : 'col-sm-10'); ?>">
            <div class="row">
                <table border="0" cellpadding="0" cellspacing="0" class="table col-lg-12" id="filesUploadedMultiple">
                    <tr>
                        <th>Imagen</th>
                        <th>Titulo</th>
                        <th></th>
                    </tr>
                    <?php  for ($i = 0; $i < count($files); $i++) {?>
                    <tr>
                        <td>
                            <a href="<?php echo base_url('assets/imagesUploaded/HousingType/'. $files[$i]->getPath());?>" target="_blank">
                                <img class="img-responsive"  src="<?php echo base_url('assets/imagesUploaded/HousingType/thumbnail/'. $files[$i]->getPath());?>" />
                            </a>
                        </td>
                        <td>
                            <input type="hidden" id="filename<?php echo $i; ?>" name="filename<?php echo $i; ?>" value="<?php echo $files[$i]->getPath(); ?>" />
                            <input name="titlePhoto<?php echo $i; ?>" value="<?php echo $files[$i]->getTitle(); ?>" type="text" class="form-control" />
                        </td>
                        <td class="text-center">
                            <a id="remove<?php echo $i; ?>" onclick="$('#remove<?php echo $i; ?>').parent().parent().remove(); ">Eliminar</a>
                        </td>
                    </tr>
                    <?php }?> 
                </table>
                <div id="errorUploadImage" style="color:red;"></div>

                <input type="hidden" id="countFiles" name="countFiles" value="<?php echo count($files);?>">
            </div>
        </div>
    </div>

<?php } else { ?>
    <script>
        initializeModalCropAndView('<?php echo $imageTo; ?>', <?php echo (isset($isOriginModal)) ? 1 : 0; ?>);
    </script>

    <?php if (isset($imageTo) && $imageTo != '')  { ?>
        <div class="modal fade" id="modalViewImage<?php echo $imageTo; ?>" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <div id="filesModal<?php echo $imageTo; ?>" class="files"></div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" onclick="$('#modalViewImage<?php echo $imageTo; ?>').modal('hide');">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>

        <input type="hidden" id="nameFile<?php echo $imageTo; ?>" name="nameFile<?php echo $imageTo; ?>" value="<?php echo $pathImage; ?>"/>
        <input type="hidden" id="x<?php echo $imageTo; ?>" name="x<?php echo $imageTo; ?>" />
        <input type="hidden" id="y<?php echo $imageTo; ?>" name="y<?php echo $imageTo; ?>" />
        <input type="hidden" id="w<?php echo $imageTo; ?>" name="w<?php echo $imageTo; ?>" />
        <input type="hidden" id="h<?php echo $imageTo; ?>" name"=h<?php echo $imageTo; ?>" />

        <!-- Modal -->
        <div class="modal fade" id="modalCropImage<?php echo $imageTo; ?>" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="modal-title">Redimensionar image</h4>
                    </div>
                    <div class="modal-body">
                        <div id="loadCrop<?php echo $imageTo; ?>" style="display:none;" class="text-center">
                            <i class="fa fa-spinner fa-pulse fa-4x"></i>
                        </div> 
                        <div id="fileToCrop<?php echo $imageTo; ?>" style="max-width: 350px;" class="center-block"></div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" onclick="$('#modalCropImage<?php echo $imageTo; ?>').modal('hide');">Cancelar</button>
                        <button type="button" class="btn btn-primary" onclick="crop('<?php echo $imageTo; ?>')">Cortar</button>
                    </div>
                </div>
            </div>
        </div>

    <?php }?>

    <div class="form-group" id="rowUploadImage">
    <?php if($operation != 'view') {?>
        <label for="name" class="<?php echo ((isset($colBtn)) ? $colBtn : 'col-sm-2'); ?> control-label">
            <span class="btn btn-success fileinput-button">
                <span id="btnUploadImage<?php echo $imageTo; ?>">Seleccionar imagen </span>
                <input id="fileupload" type="file" name="files[]" />
            </span>
        </label>
    <?php }?>
        <div class="<?php echo ((isset($colImage)) ? $colImage : 'col-sm-10'); ?>">
            <button id="btnModalViewImage<?php echo $imageTo; ?>" type="button" data-toggle="modal" data-target="#modalViewImage<?php echo $imageTo; ?>" style="display:none;"></button>
            <div id="errorLoadImage" style="color:red;"></div>
        </div>
    </div>

<?php } ?>

<div id="uploadingFile<?php echo $imageTo; ?>" style="display:none;" class="text-center">
    <i class="fa fa-spinner fa-pulse fa-4x"></i>
</div> 

