<?php include("header.php"); ?> 
<?php $nombre = $_GET["nombre"]; $monto = $_GET["monto"];  $des = $_GET["des"];  $fecha = $_GET["fecha"]; ?>

<div class="page-wrapper">
	<section id="contenedor">
		<section class="col_titulo"><i class="fa fa-pencil"></i><h2>New Invoice</h2><a href="new_invoice.php" class="btn_new">New Invoice</a></section>
		<form action="saved_invoice.php" method="POST">
			<input value='<?php echo $nombre; ?>' name="clients" placeholder="Clients" list="clientes" id="client">
			<datalist id="clientes">
  				<option value="Elías González">
  				<option value="Bladimir Arroyo">
			</datalist>
			<textarea name="description" placeholder="Description" cols="28" id="descriptionC"><?php echo $des; ?></textarea>
			<input value='<?php echo $fecha; ?>' type="date" name="date" id="date">
			<input value='<?php echo $monto; ?>' name="amount" type="number" placeholder="Amount" min="0" step="1" id="amount"/>
			<input type="submit" value="Save" id="editInvoices">
			<a href="invoices.php">Cancel</a>
		</form>
	</section>
</div>

<?php include("footer.php"); ?>