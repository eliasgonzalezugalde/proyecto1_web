var CHAMBAS = CHAMBAS || {
	chamba : function(client, descriptionC, date, notes){
		this.client = client;
		this.descriptionC = descriptionC;
		this.date = date;
		this.notes = notes;

		this.save = function(){
			var chambasList = [];
			chambasList = JSON.parse(localStorage.getItem("chambas"));
			if (chambasList == null) {
				chambasList = [];
			}
			chambasList.push(this);
			localStorage.setItem('chambas',JSON.stringify(chambasList));
		}
	},

	loadChambas : function(){
		var client = document.getElementById('client').value;
		var descriptionC = document.getElementById('descriptionC').value;
		var date = document.getElementById('date').value;
		var notes = document.getElementById('notes').value;
		var newChambas = new CHAMBAS.chamba(client, descriptionC, date, notes);
		newChambas.save();
	},

	editChambas : function(){
		var chambasList = [];
		chambasList = JSON.parse(localStorage.getItem("chambas"));
		var client = document.getElementById('client').value;
		var descriptionC = document.getElementById('descriptionC').value;
		var date = document.getElementById('date').value;
		var notes = document.getElementById('notes').value;
		var n = JSON.parse(localStorage.getItem("temporal"));
		for (i in chambasList) {
			if (chambasList[i].client == n) {
				 chambasList[i].client = client;
				 chambasList[i].descriptionC = descriptionC;
				 chambasList[i].date = date;
				 chambasList[i].notes = notes;
				 localStorage.setItem('chambas',JSON.stringify(chambasList));
			};
		}
	},

	loadCombo : function(){
		var chambasList = [];
		chambasList = JSON.parse(localStorage.getItem("chambas"));
		var c = document.getElementById('select_chambas');
		for (i in chambasList) {
			var t = document.createElement("option");
			t.textContent = chambasList[i].client;
			c.appendChild(t)
		}
	},

	loadDataList : function(){
		var invoicesList = [];
		invoicesList = JSON.parse(localStorage.getItem("clients"));
		var options = '';

		for (i in invoicesList) {
			options += '<option value="'+ invoicesList[i].nameU + " " + invoicesList[i].lastName +'" />';
		}
		document.getElementById('clientes').innerHTML = options;
	},

	loadData : function(nom){
		var chambasList = [];
		chambasList = JSON.parse(localStorage.getItem("chambas"));
		var c = jQuery('#cliente');
		var d = jQuery('#descripcion');
		var f = jQuery('#fecha');
		var n = jQuery('#notas');
		for (i in chambasList) {
			var nameClient = chambasList[i].client;  
			if (nom == nameClient) {
				localStorage.setItem('temporal',JSON.stringify(nameClient)); 
				c.html('Client: ' + chambasList[i].client).show();
				d.html('Descrition: ' + chambasList[i].descriptionC).show();
				f.html('Date: ' + chambasList[i].date).show();
				n.html('Notes: ' + chambasList[i].notes).show();
			};
		}
	},

	loadFields : function(){													
		var chambasList = [];
		chambasList = JSON.parse(localStorage.getItem("chambas"));
		for (i in chambasList) {
			var nomCompleto = chambasList[i].client;
			var n = JSON.parse(localStorage.getItem("temporal"));
			if (nomCompleto == n ) {
				document.getElementById('client').value = chambasList[i].client;
				document.getElementById('descriptionC').value = chambasList[i].descriptionC;
				document.getElementById('date').value = chambasList[i].date;
				document.getElementById('notes').value = chambasList[i].notes;
			};
		}
	},

	deleteChamba: function() {
		var selectValue = document.getElementById('select_chambas').value;
		if (selectValue == "Please select") {
			swal("Wait!", "Please select a chamba!", "warning")
		} else {
			var n = JSON.parse(localStorage.getItem("temporal"));
			swal({
				title: "You want to delete the chamba to: " + n + "?",
				text: "You will not be able to recover this chamba!",
				type: "warning",
				showCancelButton: true,
				confirmButtonColor: "#DD6B55",
				confirmButtonText: "Yes, delete it!",
				closeOnConfirm: false }, function(){
					swal("Deleted!", "The chamba has been deleted.", "success");
					var chambasList = [];
					chambasList = JSON.parse(localStorage.getItem("chambas"));
					var n = JSON.parse(localStorage.getItem("temporal"));

					for (var i = 0; i < chambasList.length; i++) {
						if(chambasList[i].client == n){
							chambasList.splice(i,1);
							break;
						}
					}

					chambasList = JSON.stringify(chambasList)
					localStorage.setItem("chambas", chambasList);
					setTimeout ("location.reload(true);", 1500); 

				});
		};
		
	},

	bindEvents: function() {
		jQuery('#saveChambas').click(CHAMBAS.loadChambas);
		jQuery('#editChambas').click(CHAMBAS.editChambas);
		jQuery('#delete_chamba').click(CHAMBAS.deleteChamba);
		jQuery( "#select_chambas" ).change(function() {
			CHAMBAS.loadData(document.getElementById('select_chambas').value);
		});
	},
};

jQuery(document).ready( function() {
	CHAMBAS.bindEvents();
	if (document.getElementById('select_chambas')) {
		CHAMBAS.loadCombo();
	}
	if (document.getElementById('editChambas')) {												
		CHAMBAS.loadFields();
	};
	if (document.getElementById('client')) {												
		CHAMBAS.loadDataList();
	};
});