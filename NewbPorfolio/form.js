$(document).ready(function(){

    function errorMessage(message) { 
      $('div').first().remove();
      $('body').append("<div style='background-color:red'><p>" + message + "</p></div>"); 
    }

  function successMessage(message) { 
      $('div').first().remove();
      $('body').append("<div style='background-color:green'><p>" + message + "</p></div>"); 
    }


    


  $('#recap_form').submit(function(event){

    event.preventDefault();
    $emailInput = $("#email:input").val();
    $passwordInput = $("#password:input").val();

    if ( $emailInput === "" ) {
      var message = "Email field is empty";
      errorMessage(message);
      // event.preventDefault();

    } 
    else if ( $emailInput.length < 8 ){
      var message = "Email needs to be at least 8 characters long";
      errorMessage(message);
      // Nathaniel put event.preventDefault(); in each if statement and I'm not sure if that's necessary
      // event.preventDefault();
    } 
    else if ( ($emailInput.indexOf('@') === -1) || ($emailInput.indexOf('.') === -1) ) {
      var message = "Not a valid email address- must include '@' and '.' symbols"
      errorMessage(message);
      // event.preventDefault();
    } 

    if ( $passwordInput == "" ) {
      var message = "Password field is empty";
      errorMessage(message);
    } 
    else if ( $passwordInput.length < 8 ){
      var message = "Password needs to be at least 8 characters long";
      errorMessage(message);
    };

    if (!($emailInput === "") && !($emailInput.length < 8) && !(($emailInput.indexOf('@') === -1) || ($emailInput.indexOf('.') === -1)) && !($passwordInput === "") && !($passwordInput.length < 8) ) {
      var message = "Success! All is good";
      successMessage(message);
    } 




    // $("#email:input").each(function() {
    //   if($(this).val() === "")
    //   alert("Email field is empty");  
    // });

    // $(#password:input)

  });
});