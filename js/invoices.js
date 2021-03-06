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
		var invoicesList = [];
		invoicesList = JSON.parse(localStorage.getItem("invoices"));

		var c = jQuery('#cliente');
		var d = jQuery('#descripcion');
		var f = jQuery('#fecha');
		var m = jQuery('#monto');

		for (i in invoicesList) { 
			var nameClient = invoicesList[i].client;
			if (nom == nameClient) {
				localStorage.setItem('temporal',JSON.stringify(nameClient));
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

	deleteInvoice: function() {
		var selectValue = document.getElementById('select_invoices').value;
		if (selectValue == "Please select") {
			swal("Wait!", "Please select an invoice!", "warning")
		} else {
			var n = JSON.parse(localStorage.getItem("temporal"));
			swal({
				title: "You want to delete the invoice to: " + n + "?",
				text: "You will not be able to recover this invoice!",
				type: "warning",
				showCancelButton: true,
				confirmButtonColor: "#DD6B55",
				confirmButtonText: "Yes, delete it!",
				closeOnConfirm: false }, function(){
					swal("Deleted!", "The invoice has been deleted.", "success");
					var invoicesList = [];
					invoicesList = JSON.parse(localStorage.getItem("invoices"));
					var n = JSON.parse(localStorage.getItem("temporal"));

					for (var i = 0; i < invoicesList.length; i++) {
						if(invoicesList[i].client == n){
							invoicesList.splice(i,1);
							break;
						}
					}

					invoicesList = JSON.stringify(invoicesList)
					localStorage.setItem("invoices", invoicesList);
					setTimeout ("location.reload(true);", 1500); 

				});
		};
		
	},

	bindEvents: function() {
		jQuery('#saveInvoices').click(INVOICES.loadinvoices);
		jQuery('#editInvoices').click(INVOICES.editinvoices);
		jQuery('#delete_invoice').click(INVOICES.deleteInvoice);
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
	if (document.getElementById('client')) {												
		INVOICES.loadDataList();
	};
});