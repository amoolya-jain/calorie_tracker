

  

document.getElementById("password1").onblur = chkPasswords; 
document.getElementById("myform").onsubmit = chkPasswords;

function chkPasswords() { 
    var init = document.getElementById("password");
    var sec = document.getElementById("password1");
    if (init.value == "") {
      alert("You did not enter a password \n" +
            "Please enter one now");
      init.focus();
      return false;
    }
    if (init.value != sec.value) {
      alert("The two passwords you entered are not the same \n" +
            "Please re-enter both now");
      init.focus();
      init.select();
      return false;
    } else
      return true;
  }
  