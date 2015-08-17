var INVOICES = INVOICES || {
	invoice : function(client, descriptionC, date, amount){
		this.client = client;
		this.descriptionC = descriptionC;
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
		var descriptionC = document.getElementById('descriptionC').value;
		var date = document.getElementById('date').value;
		var amount = document.getElementById('amount').value;

		var newinvoices = new INVOICES.invoice(client, descriptionC, date, amount);
		newinvoices.save();
	},

	editinvoices : function(){
		var invoicesList = [];
		debugger;
		invoicesList = JSON.parse(localStorage.getItem("invoices"));
		var client = document.getElementById('client').value;
		var descriptionC = document.getElementById('descriptionC').value;
		var date = document.getElementById('date').value;
		var amount = document.getElementById('amount').value;
		debugger;
		for (i in invoicesList) {
			if (invoicesList[i].client == client) {
				 invoicesList[i].client = client;
				 invoicesList[i].descriptionC = descriptionC;
				 invoicesList[i].date = date;
				 invoicesList[i].amount = amount;
				 localStorage.setItem('invoices',JSON.stringify(invoicesList));
			};
		}
	},

	bindEvents: function() {
		jQuery('#saveInvoices').click(INVOICES.loadinvoices);
		jQuery('#editInvoices').click(INVOICES.editinvoices);
	},
};

jQuery(document).ready( function() {
	INVOICES.bindEvents();
});