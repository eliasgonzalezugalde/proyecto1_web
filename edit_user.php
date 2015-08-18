<?php include("header.php"); ?> 

<div class="page-wrapper">
	<section id="contenedor">
		<section class="col_titulo"><i class="fa fa-user"></i><h2>Edit User</h2></section>
		<form action="users.php" method="POST">
			<input placeholder='Name' type="text" id="name">
			<input placeholder='Username' type="text" id="userName">
			<input placeholder='Pass' type="password" id="password">
			<input placeholder='Repeat pass' type="password" id="pass">
			<input value='Register' type="submit" value="Save" id="editUser">
			<a href="index.php">Cancel</a>
	</section>
</div>

<?php include("footer.php"); ?>