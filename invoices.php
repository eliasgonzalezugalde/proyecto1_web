<?php include("header.php"); ?>

<div class="page-wrapper">
	<section id="contenedor">
		<section class="col_titulo"><i class="fa fa-file-text"></i><h2>Invoices</h2><a href="new_invoice.php" class="btn_new">New Invoice</a></section>
		<section class="col_select"><select name="select_invoices" class="select" id="select_invoices"><option value="Please select" selected disabled>Please select</option></select><section class="is"><a href="#" id="delete_invoice"><i class="fa fa-trash"></i></a><a href="edit_invoice.php"><i class="fa fa-pencil"></i></a></section></section>
		
		<section id="contenido">
			<p id="cliente" class="cont_select"></p>
			<p id="descripcion" class="cont_select"></p>
			<p id="fecha" class="cont_select"></p>
			<p id="monto" class="cont_select"></p>
		</section>

	</section>
</div>

<?php include("footer.php"); ?>