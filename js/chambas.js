var CHAMBAS = CHAMBAS || {
	client : function(client, descriptionC, date, notes){
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
		debugger;
		var client = document.getElementById('client').value;
		var descriptionC = document.getElementById('descriptionC').value;
		var date = document.getElementById('date').value;
		var notes = document.getElementById('notes').value;

		var newChambas = new CHAMBAS.client(client, descriptionC, date, notes);
		newChambas.save();
	},

	editChambas : function(){
		var chambasList = [];
		debugger;
		chambasList = JSON.parse(localStorage.getItem("chambas"));
		var client = document.getElementById('client').value;
		var descriptionC = document.getElementById('descriptionC').value;
		var date = document.getElementById('date').value;
		var notes = document.getElementById('notes').value;
		debugger;
		for (i in chambasList) {
			if (chambasList[i].client == client) {
				 chambasList[i].client = client;
				 chambasList[i].descriptionC = descriptionC;
				 chambasList[i].date = date;
				 chambasList[i].notes = notes;
				 localStorage.setItem('chambas',JSON.stringify(chambasList));
			};
		}
	},

	bindEvents: function() {
		jQuery('#saveChambas').click(CHAMBAS.loadChambas);
		jQuery('#editChambas').click(CHAMBAS.editChambas);
	},
};

jQuery(document).ready( function() {
	CHAMBAS.bindEvents();
});