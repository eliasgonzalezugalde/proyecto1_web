<?php include("header.php"); ?>
<?php $n1="Elías González"; $n2="Bladimir Arroyo"; $t1="87459632"; $t2="87452154"; ?>

<div class="page-wrapper">
	<section id="contenedor">
		<section class="col_titulo"><i class="fa fa-users"></i><h2>Clients</h2><a href="new_client.php" class="btn_new">New Client</a></section>
		<!--table>
			<tr id="col_p">
				<td>ID</td>
				<td>Full Name</td>
				<td>Phone</td>
				<td>Actions</td>
			</tr>

			<tr>
				<td>207030855</td>
				<td><?php echo $n1; ?></td>
				<td><?php echo $t1; ?></td>
				<td><a href="edit_client.php?nombre=<?php echo $n1; ?>&id=207030855&tel=<?php echo $t1; ?>"><i class="fa fa-pencil"></i></a><a href="delete_client.php?nombre=<?php echo $n1; ?>"><i class="fa fa-trash"></i></a></td>
			</tr>

			<tr>
				<td>101220453</td>
				<td><?php echo $n2; ?></td>
				<td><?php echo $t2; ?></td>
				<td><a href="edit_client.php?nombre=<?php echo $n2; ?>&id=207030855&tel=<?php echo $t2; ?>"><i class="fa fa-pencil"></i></a><a href="delete_client.php?nombre=<?php echo $n2; ?>"><i class="fa fa-trash"></i></a></td>
			</tr>
		</table-->
	</section>
</div>

<?php include("footer.php"); ?>