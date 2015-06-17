<?php include("header.php"); ?> 
<?php $num = $_GET["num"]; ?>
<div class="page-wrapper">
	<section id="contenedor" class="delete">
		<section class="col_titulo"><i class="fa fa-trash"></i><h2>Delete invoice</h2><a href="new_invoice.php" class="btn_new">New Invoice</a></section>
		<h2>Are you sure you want to delete the invoice # <span><?php echo $num; ?></span>?</h2>
		<section id="btns_delete"><a id="no" href="invoices.php">No</a><a id="yes" href="invoices.php">Yes</a></section>
	</section>
</div>

<?php include("footer.php"); ?>