<?php include("header.php"); ?> 

<div class="page-wrapper">
	<section id="contenedor">
		<section class="col_titulo"><i class="fa fa-user"></i><h2>New User</h2></section>
		<form action="#" method="POST" class="register_form" id="register_form">
			<input placeholder='Name' type="text" id="name_users">
			<input placeholder='Username' type="text" id="user_users">
			<input placeholder='Pass' type="password" id="pass_users">
			<input placeholder='Repeat pass' type="password" id="re_pass_users">
			<p id="error_msg"></p>
			<input value='Register' value="Save" id="saveUser">
			<a href="users.php">Cancel</a>
		</form>
	</section>
</div>

<?php include("footer.php"); ?>