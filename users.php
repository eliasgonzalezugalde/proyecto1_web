<?php include("header.php"); ?>

<div class="page-wrapper">
	<section id="contenedor">
		<section class="col_titulo"><i class="fa fa-users"></i><h2>Users</h2><a href="new_user.php" class="btn_new">New User</a></section>
		<section class="col_select"><select name="select_users" class="select" id="select_users"><option value="" selected disabled>Please select</option></select><section class="is"><a href="delete_user.php"><i class="fa fa-trash"></i></a><a href="edit_user.php"><i class="fa fa-pencil"></i></a></section></section>
		
		<section id="contenido">
			<p id="name" class="cont_select"></p>
			<p id="userName" class="cont_select"></p>
			<p id="password" class="cont_select"></p>
		</section>

	</section>
</div>

<?php include("footer.php"); ?>