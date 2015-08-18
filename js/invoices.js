var INVOICES = INVOICES || {
	invoice : function(client, descriptionI, date, amount){
		this.client = client;
		this.descriptionI = descriptionI;
		this.date = date;
		this.amount = amount;

		this.save = function(){
			var invoicesList = [];
			invoicesList = JSON.parse(localStorage.getItem("invoices"));
			if (invoicesList == null) {
				invoicesList = [];
			}
			invoicesList.push(this);
			localStorage.setItem('invoices',JSON.stringify(invoicesList));
		}
	},

	loadinvoices : function(){
		debugger;
		var client = document.getElementById('client').value;
		var descriptionI = document.getElementById('descriptionI').value;
		var date = document.getElementById('date').value;
		var amount = document.getElementById('amount').value;

		var newinvoices = new INVOICES.invoice(client, descriptionI, date, amount);
		newinvoices.save();
	},

	editinvoices : function(){
		var invoicesList = [];
		invoicesList = JSON.parse(localStorage.getItem("invoices"));
		var client = document.getElementById('client').value;
		var descriptionI = document.getElementById('descriptionI').value;
		var date = document.getElementById('date').value;
		var amount = document.getElementById('amount').value;
		var n = JSON.parse(localStorage.getItem("temporal"));
		for (i in invoicesList) {
			if (invoicesList[i].client == n) {
				 invoicesList[i].client = client;
				 invoicesList[i].descriptionI = descriptionI;
				 invoicesList[i].date = date;
				 invoicesList[i].amount = amount;
				 localStorage.setItem('invoices',JSON.stringify(invoicesList));
			};
		}
	},

	loadCombo : function(){
		var invoicesList = [];
		invoicesList = JSON.parse(localStorage.getItem("invoices"));
		var s = document.getElementById('select_invoices');
		for (i in invoicesList) {
			var t = document.createElement("option");
			t.textContent = invoicesList[i].client;
			s.appendChild(t)
		}
	},

	loadData : function(nom){
		var invoicesList = [];
		invoicesList = JSON.parse(localStorage.getItem("invoices"));

		var c = jQuery('#cliente');
		var d = jQuery('#descripcion');
		var f = jQuery('#fecha');
		var m = jQuery('#monto');

		for (i in invoicesList) {
			var nameClient = invoicesList[i].client;
			localStorage.setItem('temporal',JSON.stringify(nameClient)); 
			if (nom == nameClient) {
				c.html('Client: ' + invoicesList[i].client).show();
				d.html('Description: ' + invoicesList[i].descriptionI).show();
				f.html('Date: ' + invoicesList[i].date).show();
				m.html('Amount: ' + invoicesList[i].amount).show();
			};
		}
	},

	loadFields : function(){													
		var invoicesList = [];
		invoicesList = JSON.parse(localStorage.getItem("invoices"));
		for (i in invoicesList) {
			var nameClient = invoicesList[i].client;
			var n = JSON.parse(localStorage.getItem("temporal"));
			if (nameClient == n ) {
				document.getElementById('client').value = invoicesList[i].client;
				document.getElementById('descriptionI').value = invoicesList[i].descriptionI;
				document.getElementById('date').value = invoicesList[i].date;
				document.getElementById('amount').value = invoicesList[i].amount;
			};
		}
	},

	bindEvents: function() {
		jQuery('#saveInvoices').click(INVOICES.loadinvoices);
		jQuery('#editInvoices').click(INVOICES.editinvoices);
		jQuery( "#select_invoices" ).change(function() {
			INVOICES.loadData(document.getElementById('select_invoices').value);
		});
	},
};

jQuery(document).ready( function() {
	INVOICES.bindEvents();
	if (document.getElementById('select_invoices')) {
		INVOICES.loadCombo();
	};
	if (document.getElementById('editInvoices')) {												
		INVOICES.loadFields();
	};
});