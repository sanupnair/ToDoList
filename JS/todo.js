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


// Change the background colour when checkbox is checked

function change(obj) {

var tr=obj.parentNode.parentNode; 
tr.style.backgroundColor=(obj.checked)? '#3ccf68' : '#3ccf68';

}

// Alert message on marking task as completed
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
document.getElementsByTagName("input").checked = false;

}

