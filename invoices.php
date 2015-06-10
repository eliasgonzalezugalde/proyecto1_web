<?php include("header.php"); ?> 

<div class="page-wrapper">
	<section id="contenedor">
		<section class="col_titulo"><i class="fa fa-file-text"></i><h2>Invoices</h2><a href="new_invoice.php" class="btn_new">New Invoice</a></section>
		<table>
			<tr id="col_p">
				<td>Invoice #</td>
				<td>Client</td>
				<td>Amount</td>
				<td>Actions</td>
			</tr>

			<tr>
				<td>166389</td>
				<td>Elías González</td>
				<td>$60</td>
				<td><i class="fa fa-pencil"></i><i class="fa fa-trash"></i></td>
			</tr>

			<tr>
				<td>477326</td>
				<td>Fidel Castro</td>
				<td>$44.5</td>
				<td><i class="fa fa-pencil"></i><i class="fa fa-trash"></i></td>
			</tr>

			<tr>
				<td>799348</td>
				<td>Bladimir Arroyo</td>
				<td>$225</td>
				<td><i class="fa fa-pencil"></i><i class="fa fa-trash"></i></td>
			</tr>
		</table>
	</section>
</div>

<?php include("footer.php"); ?>