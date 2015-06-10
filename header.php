<!DOCTYPE HTML>
<html>
<head>
	<title>Homework 1</title>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="description" content="" />
	<meta name="keywords" content="" />
	<link rel="stylesheet" href="css/style.css" />
	<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
</head>

<?php if(basename($_SERVER['PHP_SELF'])=='index.php'){echo '<body class="body_login">';} else {echo '<body class="body">';}  ?>


	<header id="header">
		<div class="page-wrapper">
			<a id="link_logo" href="main.php"><img class="normal" src="img/logo.png" alt="Logo"></a>
			<nav id="nav">
				<ul>
					<li><a href="clients.php">Clients</a></li>
					<li><a href="main.php">Chambas</a></li>
					<li><a href="main.php">Invoices</a></li>
					<li id="user"><a href="#">user</a>
					<ul>
						<li><a href="#">Profile</a></li>
						<li><a href="index.php">Logout</a></li>
					</ul>
					</li>
				</ul>
			</nav>
		</div>
	</header>