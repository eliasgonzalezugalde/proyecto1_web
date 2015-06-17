<?php include("header.php"); ?> 
<?php $nombre = $_GET["nombre"]; ?>
<div class="page-wrapper">
	<section id="contenedor" class="delete">
		<section class="col_titulo"><i class="fa fa-trash"></i><h2>Delete client</h2><a href="new_client.php" class="btn_new">New Client</a></section>
		<h2>Are you sure you want to delete the client with name <span><?php echo $nombre; ?></span>?</h2>
		<section id="btns_delete"><a id="no" href="clients.php">No</a><a id="yes" href="clients.php">Yes</a></section>
	</section>
</div>

<?php include("footer.php"); ?>