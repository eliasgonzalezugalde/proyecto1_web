<?php include("header.php"); ?> 

<div class="header_login">
	<img class="normal" src="img/logo.png" alt="Logo">
</div>
<div class="blur"></div>
<br>
<form action="main.php" method="POST" class="login">
	<input type="text" placeholder="username" name="user">
	<input type="password" placeholder="password" name="password">
	<input type="submit" value="Login">
</form>