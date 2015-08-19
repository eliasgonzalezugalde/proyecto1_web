<?php include("header.php"); ?> 

<div class="header_login">
	<img class="normal" src="img/logo.png" alt="Logo">
</div>

<br>
<form action="#" method="POST" class="login" id="login">
	<div>
		<input type="text" placeholder="username" name="user" id="user_login">
		<input type="password" placeholder="password" name="password" id="pass_login">
		<input type="submit" value="Login" id="login_btn">
		<p id="error_msg"></p>
		<a href="register.php">Register</a>
	</div>
</form>
<div class="blur"></div>

<?php include("footer.php"); ?> 