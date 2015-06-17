<?php include("header.php"); ?>
<?php
	$num1="032"; $num2="033"; $n1="Elías González"; $n2="Bladimir Arroyo"; $d1="Esta es la descripción uno"; $d2="Esta es la descripción dos";
	$f1="2015-06-15"; $f2="2015-05-02"; $nota1="Esta es la nota uno"; $nota2="Sin nota";
?>

<div class="page-wrapper">
	<section id="contenedor">
		<section class="col_titulo"><i class="fa fa-folder-open"></i><h2>Chambas</h2><a href="new_chamba.php" class="btn_new">New Chamba</a></section>
		<table>
			<tr id="col_p">
				<td>ID</td>
				<td>Client</td>
				<td>Actions</td>
			</tr>

			<tr>
				<td><?php echo $num1; ?></td>
				<td><?php echo $n1; ?></td>
				<td><a href="edit_chamba.php?nombre=<?php echo $n1; ?>&nota=<?php echo $nota1; ?>&des=<?php echo $d1; ?>&fecha=<?php echo $f1; ?>"><i class="fa fa-pencil"></i></a><a href="delete_chamba.php?num=<?php echo $num1; ?>"><i class="fa fa-trash"></i></a></td>
			</tr>

			<tr>
				<td><?php echo $num2; ?></td>
				<td><?php echo $n1; ?></td>
				<td><a href="edit_chamba.php?nombre=<?php echo $n1; ?>&nota=<?php echo $nota2; ?>&des=<?php echo $d2; ?>&fecha=<?php echo $f2; ?>"><i class="fa fa-pencil"></i></a><a href="delete_chamba.php?num=<?php echo $num2; ?>"><i class="fa fa-trash"></i></a></td>
			</tr>
		</table>
	</section>
</div>

<?php include("footer.php"); ?>