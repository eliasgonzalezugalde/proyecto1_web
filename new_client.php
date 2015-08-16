<?php include("header.php"); ?> 

<div class="page-wrapper">
	<section id="contenedor">
		<section class="col_titulo"><i class="fa fa-users"></i><h2>New Client</h2><a href="new_client.php" class="btn_new">New Client</a></section>
		<form action="saved_client.php" method="POST">
			<input type="text" placeholder="Name" name="name" id="name">
			<input type="text" placeholder="Last Name" name="last_name" id="lastName">
			<input type="text" placeholder="Id" name="id" id="id">
			<input type="tel" placeholder="Phone" pattern="[0-9]{8}" name="phone" id="phone">
			<input type="submit" value="Save" id="saveClient">
			<a href="clients.php">Cancel</a>
		</form>
	</section>
</div>

<?php include("footer.php"); ?>