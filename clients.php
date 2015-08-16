<?php include("header.php"); ?>
<?php $n1="Elías González"; $n2="Bladimir Arroyo"; $t1="87459632"; $t2="87452154"; ?>

<div class="page-wrapper">
	<section id="contenedor">
		<section class="col_titulo"><i class="fa fa-users"></i><h2>Clients</h2><a href="new_client.php" class="btn_new">New Client</a></section>
		<select name="select_clients" id="select_clients" placeholder="Client"></select>
		<option value="" selected disabled>Please select</option>

		<h2 id="nombre"></h2>
		<h2 id="cedula"></h2>
		<h2 id="telefono"></h2>

	</section>
</div>

<?php include("footer.php"); ?>