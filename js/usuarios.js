$("#login").submit(function(e) {
    e.preventDefault();
});

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
		debugger;
		var userName = document.getElementById('name_users').value;
		var user = document.getElementById('user_users').value;
		var pass = document.getElementById('pass_users').value;

		var newUser = new USERS.user(userName, user, pass);
		newUser.save();
		console.log(localStorage.getItem("users"));
	},

	validateUser : function(){
		debugger;
		usersList = JSON.parse(localStorage.getItem("users"));
		var txtUser = document.getElementById('user_login').value;
		var txtPass = document.getElementById('pass_login').value;

		var msjAlert = jQuery('#error_msg');
		var errorElement = jQuery('#error_msg');

		for (i in usersList) {
			if (usersList[i].user == txtUser && usersList[i].pass == txtPass) {
				var si = true;
				document.getElementById("login").action = "main.php";
				document.getElementById("login").submit(); 
			};
		}

		if (!si) {
			errorElement.html('Username or Password invalid').addClass('error').show();
		};
	},


	bindEvents: function() {
		jQuery('#register_btn').click(USERS.loadUsers);

		jQuery('#login_btn').click(USERS.validateUser);

		/*jQuery('#name_users').bind('click',function(){
			USERS.loadUsers();
		});*/
},
};

jQuery(document).ready( function() {
	USERS.bindEvents();
});