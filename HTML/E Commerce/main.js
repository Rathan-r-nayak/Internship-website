function openSignin() {
   
    if(document.getElementById("form_login").style.display == "block")
    {
        document.getElementById("form_login").style.display = "none";
    }
    document.getElementById("form_signin").style.display = "block";

  }
  
  function closeSignin() {
    document.getElementById("form_signin").style.display = "none";
  }


//   login
  function openLogin() {
    if(document.getElementById("form_signin").style.display == "block")
    {
        document.getElementById("form_signin").style.display = "none"
    }
    document.getElementById("form_login").style.display = "block";
    
  }
  
  function closeLogin() {
    document.getElementById("form_login").style.display = "none";
  }