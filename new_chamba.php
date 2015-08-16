<?php include("header.php"); ?> 

<div class="page-wrapper">
	<section id="contenedor">
		<section class="col_titulo"><i class="fa fa-folder-open"></i><h2>New Chamba</h2><a href="new_chamba.php" class="btn_new">New Chamba</a></section>
		<form action="saved_chamba.php" method="POST">
			<input name="clients" placeholder="Clients" list="clientes">
			<datalist id="clientes">
  				<option value="Elías González">
  				<option value="Bladimir Arroyo">
			</datalist>
			<textarea name="description" placeholder="Description" cols="28"></textarea>
			<input type="date" name="date">
			<textarea name="notes" placeholder="Notes" cols="28"></textarea>
			<input type="submit" value="Save">
			<a href="chambas.php">Cancel</a>
		</form>
	</section>
</div>

<?php include("footer.php"); ?>