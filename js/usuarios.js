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
		var userName = document.getElementById('name_users').value;
		var user = document.getElementById('user_users').value;
		var pass = document.getElementById('pass_users').value;

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

	saveCurrentUser: function() {
		var current = JSON.parse(localStorage.getItem("current"));
		var userLogged = jQuery('#user_logged');
		userLogged.html(current + ' <i class="fa fa-user"></i>');
	},

	bindEvents: function() {
		jQuery('#register_btn').click(USERS.loadUsers);

		jQuery('#login_btn').click(USERS.validateUser);

		/*jQuery('#login_btn').bind('click',function(){
			USERS.loadUserinHeader(5);
		});*/
	},
};

jQuery(document).ready( function() {
	USERS.bindEvents();
	USERS.saveCurrentUser();
});