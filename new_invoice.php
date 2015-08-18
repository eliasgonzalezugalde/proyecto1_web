<?php include("header.php"); ?> 

<div class="page-wrapper">
	<section id="contenedor">
		<section class="col_titulo"><i class="fa fa-file-text"></i><h2>New Invoice</h2><a href="new_invoice.php" class="btn_new">New Invoice</a></section>
		<form action="saved_invoice.php" method="POST">
			<input name="clients" placeholder="Clients" list="clientes" id="client">
			<datalist id="clientes">
  				<option value="Elías González">
  				<option value="Bladimir Arroyo">
			</datalist>
			<textarea name="description" placeholder="Description" cols="28" id="descriptionI"></textarea>
			<input type="date" name="date" id="date">
			<input name="amount" type="number" placeholder="Amount" min="0" step="1" id="amount" />
			<input type="submit" value="Save" id="saveInvoices">
			<a href="invoices.php">Cancel</a>
		</form>
	</section>
</div>

<?php include("footer.php"); ?>