<?php include("header.php"); ?> 

<div class="page-wrapper">
	<section id="contenedor">
		<section class="col_titulo"><i class="fa fa-file-text"></i><h2>New Invoice</h2><a href="new_invoice.php" class="btn_new">New Invoice</a></section>
		<form action="saved_invoice.php" method="POST">
			<input name="clients" placeholder="Clients" list="clientes">
			<datalist id="clientes">
  				<option value="Elías González">
  				<option value="Bladimir Arroyo">
			</datalist>
			<textarea name="description" placeholder="Description" cols="28"></textarea>
			<input type="date" name="date">
			<input name="amount" type="number" placeholder="Amount" min="0" step="1"/>
			<input type="submit" value="Save">
			<input type="button" VALUE="Cancel" onClick="history.go(-1);return true;">
		</form>
	</section>
</div>

<?php include("footer.php"); ?>