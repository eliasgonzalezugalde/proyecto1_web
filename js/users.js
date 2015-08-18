var USERS = USERS || {
	user : function(user_name, user, pass, admin){
		this.user_name = user_name;
		this.user = user;
		this.pass = pass;
		this.admin = admin;

		this.save = function(){
			var usersList = [];
			usersList = JSON.parse(localStorage.getItem("users"));
			if (usersList == null) {
				usersList = [];
			}
			usersList.push(this);
			localStorage.setItem('users',JSON.stringify(usersList));
		}
	},

	loadUsers : function(){
		var userName = document.getElementById('name').value;
		var user = document.getElementById('userName').value;
		var pass = document.getElementById('password').value;

		var newUser = new USERS.user(userName, user, pass);
		newUser.save();
		console.log(localStorage.getItem("users"));
	},

	validateUser : function(){
		usersList = JSON.parse(localStorage.getItem("users"));
		var txtUser = document.getElementById('user_login').value;
		var txtPass = document.getElementById('pass_login').value;

		var msjAlert = jQuery('#error_msg');
		var errorElement = jQuery('#error_msg');
		for (i in usersList) {
			if (usersList[i].user == txtUser && usersList[i].pass == txtPass) {
				localStorage.setItem('current',JSON.stringify(txtUser)); //guardamos el usuario actual
				var si = true;
				document.getElementById("login").action = "main.php";
				document.getElementById("login").submit();
			};
		}
		if (!si) {
			errorElement.html('Username or Password invalid').addClass('error').show();
		};
	},

	editUser : function(){
		var usersList = [];
		usersList = JSON.parse(localStorage.getItem("users"));
		var name = document.getElementById('name').value;
		var userName = document.getElementById('userName').value;
		var password = document.getElementById('password').value;
		var n = JSON.parse(localStorage.getItem("temporal"));
		for (i in usersList) {
			var x = usersList[i].user;
			if ( x == n) {
				usersList[i].user_name = name;
				usersList[i].user = userName;
				usersList[i].pass = password;
				localStorage.setItem('users',JSON.stringify(usersList));
			};
		}
	},

	loadCombo : function(){
		var usersList = [];
		usersList = JSON.parse(localStorage.getItem("users"));
		var s = document.getElementById('select_users');
		for (i in usersList) {
			var t = document.createElement("option");
			t.textContent = usersList[i].user;
			s.appendChild(t)
		}
	},

	loadData : function(nom){
		var usersList = [];
		usersList = JSON.parse(localStorage.getItem("users"));

		var n = jQuery('#name');
		var u = jQuery('#userName');
		var p = jQuery('#password');

		for (i in usersList) {     
			var user = usersList[i].user; 
			if (nom == user) {
				localStorage.setItem('temporal',JSON.stringify(user)); 
				var aux ="";
				var x = usersList[i].pass;
				for (var j = x.length - 1; j >= 0; j--) {
					aux += "*";
				};
				n.html('Name: ' + usersList[i].user_name).show();
				u.html('User Name: ' + usersList[i].user).show();
				p.html('Password: ' + aux).show();
			};
		}
	},

	loadFields : function(){	
		var usersList = [];
		usersList = JSON.parse(localStorage.getItem("users"));
		for (i in usersList) {
			var user = usersList[i].user;
			var n = JSON.parse(localStorage.getItem("temporal"));
			if (user == n ) {
				debugger;
				document.getElementById('name').value = usersList[i].user_name;
				document.getElementById('userName').value = usersList[i].user;
				document.getElementById('password').value = usersList[i].pass;
				document.getElementById('pass').value = usersList[i].pass;
			};
		}
	},

	saveCurrentUser: function() {
		var current = JSON.parse(localStorage.getItem("current"));
		var userLogged = jQuery('#user_logged');
		userLogged.html(current + ' <i class="fa fa-user"></i>');
	},

	deleteUser: function() {
		var selectValue = document.getElementById('select_users').value;
		if (selectValue == "Please select") {
			swal("Wait!", "Please select an user!", "warning")
		} else {
			var n = JSON.parse(localStorage.getItem("temporal"));
			swal({
				title: "You want to delete the user: " + n + "?",
				text: "You will not be able to recover this user!",
				type: "warning",
				showCancelButton: true,
				confirmButtonColor: "#DD6B55",
				confirmButtonText: "Yes, delete it!",
				closeOnConfirm: false }, function(){
					swal("Deleted!", "The user has been deleted.", "success");
					var usersList = [];
					usersList = JSON.parse(localStorage.getItem("users"));
					var n = JSON.parse(localStorage.getItem("temporal"));

					for (var i = 0; i < usersList.length; i++) {
						if(usersList[i].user == n){
							usersList.splice(i,1);
							break;
						}
					}

					usersList = JSON.stringify(usersList)
					localStorage.setItem("users", usersList);
					setTimeout ("location.reload(true);", 1500); 
					
				});
		};
		
	},

	bindEvents: function() {
		jQuery('#editUser').click(USERS.editUser);
		jQuery('#saveUser').click(USERS.loadUsers);
		jQuery('#register_btn').click(USERS.loadUsers);
		jQuery('#login_btn').click(USERS.validateUser);
		jQuery('#delete_user').click(USERS.deleteUser);
		jQuery( "#select_users" ).change(function() {
			USERS.loadData(document.getElementById('select_users').value);
		});
	},
};

jQuery(document).ready( function() {
	USERS.bindEvents();
	USERS.saveCurrentUser();
	if (JSON.parse(localStorage.getItem("current")) == 'admin') {
		jQuery("#btn_users").show();
	} else {
		jQuery("#btn_users").hide();
	};
	if (document.getElementById('select_users')) {
		USERS.loadCombo();
	}
	if (document.getElementById('editUser')) {												
		USERS.loadFields();
	};
});