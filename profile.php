<?php include("header.php"); ?> 

<div class="page-wrapper">
	<section id="contenedor">
		<section class="col_titulo"><i class="fa fa-user"></i><h2>Profile</h2></section>
		<form action="main.php" method="POST">
			<input value='user' type="text" name="name">
			<input placeholder='pass' type="password" name="psw">
			<input placeholder='repeat pass' type="password" name="psw">
			<input value='user' type="submit" value="Save">
			<a href="chambas.php">Cancel</a>
		</form>
	</section>
</div>

<?php include("footer.php"); ?>