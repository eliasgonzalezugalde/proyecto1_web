<?php include("header.php"); ?>

<div class="page-wrapper">
	<section id="contenedor">
		<section class="col_titulo"><i class="fa fa-folder-open"></i><h2>Chambas</h2><a href="new_chamba.php" class="btn_new">New Chamba</a></section>
		<section class="col_select"><select name="select_chambas" class="select" id="select_chambas"><option value="Please select" selected disabled>Please select</option></select><section class="is"><a href="#" id="delete_chamba"><i class="fa fa-trash"></i></a><a href="edit_chamba.php"><i class="fa fa-pencil"></i></a></section></section>
		
		<section id="contenido">
			<p id="cliente" class="cont_select"></p>
			<p id="descripcion" class="cont_select"></p>
			<p id="fecha" class="cont_select"></p>
			<p id="notas" class="cont_select"></p>
		</section>

	</section>
</div>

<?php include("footer.php"); ?>