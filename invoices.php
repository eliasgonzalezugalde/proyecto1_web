<?php include("header.php"); ?>
<?php 
	$num1="166389"; $num2="799348"; $n1="Elías González"; $n2="Bladimir Arroyo"; $m1="60"; $m2="225";
	$f1="2015-06-15"; $f2="2015-05-02"; $des1="Esta es la descripción uno"; $des2="Sin descripción";
?>

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
				<td><?php echo $num1; ?></td>
				<td><?php echo $n1; ?></td>
				<td>$<?php echo $m1; ?></td>
				<td><a href="edit_invoice.php?nombre=<?php echo $n1; ?>&des=<?php echo $des1; ?>&monto=<?php echo $m1; ?>&fecha=<?php echo $f1; ?>"><i class="fa fa-pencil"></i></a><a href="delete_invoice.php?num=<?php echo $num1; ?>"><i class="fa fa-trash"></i></a></td>
			</tr>

			<tr>
				<td><?php echo $num2; ?></td>
				<td><?php echo $n2; ?></td>
				<td>$<?php echo $m2; ?></td>
				<td><a href="edit_invoice.php?nombre=<?php echo $n2; ?>&des=<?php echo $des2; ?>&monto=<?php echo $m2; ?>&fecha=<?php echo $f2; ?>"><i class="fa fa-pencil"></i></a><a href="delete_invoice.php?num=<?php echo $num2; ?>"><i class="fa fa-trash"></i></a></td>
			</tr>
		</table>
	</section>
</div>

<?php include("footer.php"); ?>