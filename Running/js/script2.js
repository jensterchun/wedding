function doalert(checkboxElem) {
    if (checkboxElem.checked) {
      document.write("Welcome");
    } else {
      alert ("bye");
    }
}

//This function seems to check if it's check. 
function exefunction(){
    var lfckv = document.getElementById("lifecheck").checked;
    alert(lfckv);
}

function writen(age) {
    if (age === 1) {
        document.write("Welcome");
      } else {
        alert("bye");
      }
  }