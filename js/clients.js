var CLIENTS = CLIENTS || {
	
	client : function(nameU, lastName, idU, phone){
		this.nameU = nameU;
		this.lastName = lastName;
		this.idU = idU;
		this.phone = phone;

		this.save = function(){
			var clientsList = [];
			clientsList = JSON.parse(localStorage.getItem("clients"));
			if (clientsList == null) {
				clientsList = [];
			}
			clientsList.push(this);
			localStorage.setItem('clients',JSON.stringify(clientsList));
		}
	},

	loadClient : function(){
		var nameU = document.getElementById('name').value;
		var lastName = document.getElementById('lastName').value;
		var idU = document.getElementById('id').value;
		var phone = document.getElementById('phone').value;

		var newClient = new CLIENTS.client(nameU, lastName, idU, phone);
		newClient.save();
	},

	editClient : function(){
		var clientsList = [];
		clientsList = JSON.parse(localStorage.getItem("clients"));
		var nameU = document.getElementById('name').value;
		var lastName = document.getElementById('lastName').value;
		var idU = document.getElementById('id').value;
		var phone = document.getElementById('phone').value;
		var n = JSON.parse(localStorage.getItem("temporal"));      //////////////////////////////////////////////////////////////
		for (i in clientsList) {
			var x = clientsList[i].nameU + " " + clientsList[i].lastName;
			debugger;
			if ( x == n) {
				clientsList[i].nameU = nameU;
				clientsList[i].lastName = lastName;
				clientsList[i].idU = idU;
				clientsList[i].phone = phone;
				localStorage.setItem('clients',JSON.stringify(clientsList));
			};
		}
	},

	loadCombo : function(){
		var clientsList = [];
		clientsList = JSON.parse(localStorage.getItem("clients"));

		var s = document.getElementById('select_clients');
		
		for (i in clientsList) {
			var t = document.createElement("option");
			//t.value = clientsList[i].nameU + " " + clientsList[i].lastName;
			t.textContent = clientsList[i].nameU + " " + clientsList[i].lastName;
			s.appendChild(t)
		}
	},

	loadData : function(nom){
		var clientsList = [];
		clientsList = JSON.parse(localStorage.getItem("clients"));

		var n = jQuery('#nombre');
		var c = jQuery('#cedula');
		var t = jQuery('#telefono');

		for (i in clientsList) {
			var nomCompleto = clientsList[i].nameU + " " + clientsList[i].lastName;
			localStorage.setItem('temporal',JSON.stringify(nomCompleto));       /////////////////////////////////////////////////////////
			if (nom == nomCompleto) {
				n.html('Nombre: ' + nomCompleto).show();
				c.html('Cédula: ' + clientsList[i].idU).show();
				t.html('Teléfono: ' + clientsList[i].phone).show();
			};
		}
	},

<<<<<<< HEAD
	loadFields : function(){													////////////////////////////////////////////////
		var clientsList = [];
		clientsList = JSON.parse(localStorage.getItem("clients"));
		for (i in clientsList) {
			var nomCompleto = clientsList[i].nameU + " " + clientsList[i].lastName;
			var n = JSON.parse(localStorage.getItem("temporal"));
			if (nomCompleto == n ) {
				document.getElementById('name').value = clientsList[i].nameU;
				document.getElementById('lastName').value = clientsList[i].lastName;
				document.getElementById('id').value = clientsList[i].idU;
				document.getElementById('phone').value = clientsList[i].phone;
			};
		}
	},

=======
>>>>>>> origin/master
	bindEvents: function() {
		jQuery('#saveClient').click(CLIENTS.loadClient);
		jQuery('#editClient').click(CLIENTS.editClient);

		jQuery( "#select_clients" ).change(function() {
			CLIENTS.loadData(document.getElementById('select_clients').value);
		});
	},
};

jQuery(document).ready( function() {
	CLIENTS.bindEvents();
	if (document.getElementById('select_clients')) {
		CLIENTS.loadCombo();
	}
	if (document.getElementById('editClient')) {												///////////////////////////////
		CLIENTS.loadFields();
	};
		
	
	
});