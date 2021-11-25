// Validation and load page - JS callback function

function alertmsg(load) {

  window.location.href = "main.html";
}
function validate(callBack) {
    var user = document.getElementById("userid").value;
    var pass = document.getElementById("pass").value;
    if (user == "Admin" && pass == "12345"){
    
      }
      else {
        alert("Incorrect Username or Password");
        callBack();
    }
}
validate(callBack, load);


