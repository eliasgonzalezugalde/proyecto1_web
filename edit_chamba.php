<?php include("header.php"); ?> 
<?php $nombre = $_GET["nombre"]; $nota = $_GET["nota"];  $des = $_GET["des"];  $fecha = $_GET["fecha"]; ?>

<div class="page-wrapper">
	<section id="contenedor">
		<section class="col_titulo"><i class="fa fa-pencil"></i><h2>Edit Chamba</h2><a href="new_chamba.php" class="btn_new">New Chamba</a></section>
		<form action="saved_chamba.php" method="POST">
			<input value='<?php echo $nombre; ?>' name="clients" placeholder="Clients" list="clientes">
			<datalist id="clientes">
  				<option value="Elías González">
  				<option value="Bladimir Arroyo">
			</datalist>
			<textarea name="description" placeholder="Description" cols="28"><?php echo $des; ?></textarea>
			<input value='<?php echo $fecha; ?>' type="date" name="date">
			<textarea name="notes" placeholder="Notes" cols="28"><?php echo $nota; ?></textarea>
			<input type="submit" value="Save">
			<a href="chambas.php">Cancel</a>
		</form>
	</section>
</div>

<?php include("footer.php"); ?>