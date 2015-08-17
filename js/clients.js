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
		debugger;
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

		for (i in clientsList) {
			if (clientsList[i].nameU == nameU) {
				 clientsList[i].nameU = nameU;
				 clientsList[i].lastName = lastName;
				 clientsList[i].idU = idU;
				 clientsList[i].phone = phone;
				 localStorage.setItem('clients',JSON.stringify(clientsList));
			};
		}
	},

	bindEvents: function() {
		jQuery('#saveClient').click(CLIENTS.loadClient);
		jQuery('#editClient').click(CLIENTS.editClient);
	},
};

jQuery(document).ready( function() {
	CLIENTS.bindEvents();
});