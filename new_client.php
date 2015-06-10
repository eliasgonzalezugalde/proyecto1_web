<?php include("header.php"); ?> 

<div class="page-wrapper">
	<section id="contenedor">
		<section class="col_titulo"><i class="fa fa-users"></i><h2>New Client</h2><a href="new_client.php" class="btn_new">New Client</a></section>
		<form action="saved_client.php" method="POST">
			<input type="text" placeholder="Name" name="name">
			<input type="text" placeholder="Last Name" name="last_name">
			<input type="text" placeholder="Id" name="id">
			<input type="tel" placeholder="Phone" name="phone">
			<input type="submit" value="Save">
			<input type="button" VALUE="Cancel" onClick="history.go(-1);return true;">
		</form>
	</section>
</div>

<?php include("footer.php"); ?>