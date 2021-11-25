function validate(show) {
    var user = document.getElementById("userid").value;
    var pass = document.getElementById("pass").value;

    if (user == "Admin" && pass == "12345"){
    window.location.href = "main.html";
    }
    else {
        alert("Incorrect Username or Password \n Username = Admin \nPassword = 12345")
    }
}


function change(obj) 

{
var tr=obj.parentNode.parentNode; 
tr.style.backgroundColor=(obj.checked)? '#3ccf68' : '#3ccf68';


}

function checkboxes(){
var inputs = document.getElementsByTagName("input");
var inputObj;
var count = 0;
for(var count1 = 0;count1<inputs.length;count1++) {
inputObj = inputs[count1];
var type = inputObj.getAttribute("type");
if (type == 'checkbox' && inputObj.checked) {
  count++;
}
}

alert ("Congrats  " + count + "  Tasks have been Succesfully Completed")  
document.getElementsByTagName("input").checked = true;
document.getElementsByTagName("input").checked = false;}

