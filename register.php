<?php include("header.php"); ?> 

<div class="page-wrapper">
	<section id="contenedor">
		<section class="col_titulo"><i class="fa fa-user"></i><h2>Register</h2></section>
		<form action="index.php" method="POST">
			<input placeholder='Name' type="text" id="name_users">
			<input placeholder='Username' type="text" id="user_users">
			<input placeholder='Pass' type="password" id="pass_users">
			<input placeholder='Repeat pass' type="password" id="repass_users">
			<input value='Register' type="submit" value="Save" id="register_btn">
			<a href="index.php">Cancel</a>
		</form>
	</section>
</div>

<?php include("footer.php"); ?>