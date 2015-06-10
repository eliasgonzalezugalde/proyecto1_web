<?php include("header.php"); ?> 

<div class="page-wrapper">
	<section id="contenedor">
		<section class="col_titulo"><i class="fa fa-folder-open"></i><h2>New Chamba</h2><a href="#" class="btn_new">New Client</a></section>
		<form action="client_saved.php" method="POST">
			<input name="clients" placeholder="Clients" list="clientes">
			<datalist id="clientes">
  				<option value="Elías González">
  				<option value="Bladimir Arroyo">
			</datalist>
			<textarea name="description" placeholder="Description" cols="28"></textarea><br>
			<input type="date" name="date"><br>
			<textarea name="notes" placeholder="Notes" cols="28"></textarea><br>
			<input type="submit" value="Guardar">
		</form>
	</section>
</div>

<?php include("footer.php"); ?>