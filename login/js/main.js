
	var user = document.getElementById('username');//variable to get username
	var pass = document.getElementById('password');//variable to get password
	var btn = document.getElementById('loginBtn');//variable login
	var title = document.getElementById('title');// variable till title
	
	var coruser = "test";
	var corpass = "1234";
  //Här skapar jag funktion för att login med if-sats
function login() {

	// user.value = localStorage.getItem('username');
	// pass.value = localStorage.getItem('password');

	if(user.value == coruser) {
	
		if(pass.value == corpass) {
		
			// window.alert(user.value);
			// window.open("https://campus.varnamo.se");
			user.style.visibility = "hidden";
			pass.style.visibility = "hidden";
			btn.value = "Logout";
			title.innerHTML = "Welcome";


             
			localStorage.setItem('username', user.value);
			localStorage.setItem('password', pass.value);


			console.log(localStorage.getItem('username'));
			console.log(localStorage.getItem('password'));
		
		} else {
		  //Här kommer meddelande om man skriva fel användarnamn eller lösenord
			window.alert("Fel användarnamn eller lösenord!");
		
		}
	
	} else {
	
			window.alert("Fel användarnamn eller lösenord!!");
	
	}
}
// Här skapar jag funktion när man logout
function logout(){
	user.style.visibility = "visible";//visar textfälet för username
	pass.style.visibility = "visible";//visar textfälet för password
	btn.value = "Login";
	title.innerHTML = "Login";


	document.getElementById('username').value = ''; 
	document.getElementById('password').value = ''; 

	
	localStorage.clearItem('username'); //Här raderar vi value från local storage
	localStorage.clearItem('password'); 

}
// En funktion för login och logout
function check(){
	if(btn.value == "Login"){
		login();
	}
	else{
		logout();
	}
}