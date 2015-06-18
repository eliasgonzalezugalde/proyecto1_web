<!DOCTYPE HTML>
<html>
<head>
	<title>chamberos.net</title>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
	<meta name="description" content="" />
	<meta name="keywords" content="" />
	<link rel="stylesheet" href="css/style.css" />
	<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
	<script type="text/javascript" src="js/script.js"></script>
</head>

<?php if(basename($_SERVER['PHP_SELF'])=='index.php'){echo '<body class="body_login">';} else {echo '<body class="body">';}  ?>

	<header id="header">
		<div class="page-wrapper">
			<a id="link_logo" href="main.php"><img class="normal" src="img/logo.png" alt="Logo"></a>
			<nav id="nav">
				<ul class="toAnimate">
					<li><a href="clients.php">Clients</a></li>
					<li><a href="chambas.php">Chambas</a></li>
					<li><a href="invoices.php">Invoices</a></li>
					<li id="user"><a href="profile.php">user   <i class="fa fa-user"></i></a>
					<ul id="sub">
						<li><a href="index.php">Logout</a></li>
					</ul>
					</li>
				</ul>
				<a class="asd" id="pull" href="#"><img class="normal" src="img/logo.png" alt="Logo">Menu</a>
			</nav>
		</div>
	</header>