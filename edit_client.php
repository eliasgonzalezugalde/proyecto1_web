<?php include("header.php"); ?> 

<div class="page-wrapper">
	<section id="contenedor">
		<section class="col_titulo"><i class="fa fa-pencil"></i><h2>Edit Client</h2><a href="new_client.php" class="btn_new">New Client</a></section>
		<form action="saved_client.php" method="POST">
			<input type="text" value='' placeholder="Name" name="name" id="name">
			<input type="text" value='' placeholder="Last Name" name="last_name" id="lastName">
			<input type="text" value='' placeholder="Id" name="id" id="id">
			<input type="tel" pattern="[0-9]{8}" value='' placeholder="Phone" name="phone" id="phone">
			<input type="submit" value="Save" id="editClient">
			<a href="clients.php">Cancel</a>
		</form>
	</section>
</div>

<?php include("footer.php"); ?>