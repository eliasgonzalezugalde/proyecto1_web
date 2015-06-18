<?php include("header.php"); ?> 
<?php $nombre = $_GET["nombre"]; $id = $_GET["id"]; $tel = $_GET["tel"]; $nombreArray = explode(" ", $nombre); ?>
<div class="page-wrapper">
	<section id="contenedor">
		<section class="col_titulo"><i class="fa fa-pencil"></i><h2>Edit Client</h2><a href="new_client.php" class="btn_new">New Client</a></section>
		<form action="saved_client.php" method="POST">
			<input type="text" value='<?php echo $nombreArray[0]; ?>' placeholder="Name" name="name">
			<input type="text" value='<?php echo $nombreArray[1]; ?>' placeholder="Last Name" name="last_name">
			<input type="text" value='<?php echo $id; ?>' placeholder="Id" name="id">
			<input type="tel" pattern="[0-9]{10}" value='<?php echo $tel; ?>' placeholder="Phone" name="phone">
			<input type="submit" value="Save">
			<a href="clients.php">Cancel</a>
		</form>
	</section>
</div>

<?php include("footer.php"); ?>