<?php include("header.php"); ?> 

<div class="page-wrapper">
	<section id="contenedor">
		<section class="col_titulo"><i class="fa fa-users"></i><h2>New Client</h2><a href="#" class="btn_new">New Client</a></section>
		<form action="client_saved.php" method="POST">
			<input type="text" placeholder="Name" name="name"><br>
			<input type="text" placeholder="Last Name" name="last_name"><br>
			<input type="text" placeholder="Id" name="id"><br>
			<input type="tel" placeholder="Phone" name="phone"><br>
			<input type="submit" value="Guardar">
		</form>
	</section>
</div>

<?php include("footer.php"); ?>