<?php include("header.php"); ?> 
<?php $num = $_GET["num"]; ?>
<div class="page-wrapper">
	<section id="contenedor" class="delete">
		<section class="col_titulo"><i class="fa fa-trash"></i><h2>Delete chamba</h2><a href="new_client.php" class="btn_new">New Client</a></section>
		<h2>Are you sure you want to delete the chamba with ID <span><?php echo $num; ?></span>?</h2>
		<section id="btns_delete"><a id="no" href="chambas.php">No</a><a id="yes" href="chambas.php">Yes</a></section>
	</section>
</div>

<?php include("footer.php"); ?>