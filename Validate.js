function validateForm() {

 const user = document.getElementById("user");
    
 const pinid = document.getElementById("pinid");
    
 const state = document.getElementById("state");
    
 const validate= document.getElementById("validate");
    
 const test = document.getElementById("test");
    

    
 const validationtext = [];
    

    
 if (user.value.length < 6 || user.value.length > 8) {
    
 validationMessages.push("Username should be greater then 6 ");
    
 alert("range is between 6 and 8");
    
 }
    

    
 if (validatePinCheckbox.checked && !pin.value.match(/^[a-zA-Z0-9]+$/)) {
    
 validationMessages.push("Pin should be a combination.");
    
 alert("Pin should be a combination.");
    
 }
    

    
 if (!states.value) {
    
 validationMessages.push("select a state.");
    
 alert("select a state.");
    
 }
    

    
 let check = false;
    
 const option = document.getElementsByName("options");
    
 option.forEach(option => {
    
 if (option.check) {
    
  Check = true;
    
 }
    
 });
    

    
 if (Check) {
    
 validationMessages.push("Please choose one option.");
    
 
    
 }
    

    
 if (testMeCheckbox.check) {
    
 validationMessages.push("Validation message has been checked checked.");
    
document.getElementById("validation-messages").innerHTML = validationMessages;
    
 } else {
    
 validationMessages
    
 }
    
