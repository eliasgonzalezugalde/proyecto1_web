<?php include("header.php"); ?>

<div class="page-wrapper">
	<section id="contenedor">
		<section class="col_titulo"><i class="fa fa-users"></i><h2>Clients</h2><a href="new_client.php" class="btn_new">New Client</a></section>
		<section class="col_select"><select name="select_clients" class="select" id="select_clients"><option value="Please select" selected disabled>Please select</option></select><section class="is"><a href="#" id="delete_client"><i class="fa fa-trash"></i></a><a href="edit_client.php"><i class="fa fa-pencil"></i></a></section></section>
		
		<section id="contenido">
			<p id="nombre" class="cont_select"></p>
			<p id="cedula" class="cont_select"></p>
			<p id="telefono" class="cont_select"></p>
		</section>

	</section>
</div>

<?php include("footer.php"); ?>