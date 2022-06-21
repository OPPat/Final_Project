
 /*Function for actual Validation of first and last name using regular expression to 
 ensure that only a minimum of two alpha characters are used and that choice of facilitator
 also passes the three-choice constraint.*/
function validateForm(){
    let fName = document.getElementById("firstName");
    let lName  = document.getElementById("lastName");
    let facil = document.getElementById("facilitator");
    let mail = document.getElementById("mail");
   
    if (!(testName(/[A-Z]+[a-z]+/, fName.value))){
        document.getElementById("fNameError").innerHTML="Minimum of 2 letters for first name";
      
        return false} else if (!(testName(/[A-Z]+[a-z]+/, lName.value))){
            document.getElementById("lNameError").innerHTML="Minimum of 2 letters for last name";
        
            return false;
        }else if (!(validateEmail(mail.value))){
            document.getElementById("mailError").innerHTML="Please enter a valid email address";
           
            return false;
        } else {return true;}
      

}

function validateEmail(inputText)
{
let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.match(emailFormat))
{
//alert("Valid email address!");
document.myForm.mail.focus();
return true;
}
else
{
//alert("You have entered an invalid email address!");
document.myForm.mail.focus();
return false;
}
}
//Function to helpt test validity of first or last name using regular expression
function testName(regex, string){
    if(regex.test(string)){
        return true;
    }else{
    return false;
}
//Function to help with validation ensuring that facilitator is either Josh, Fasil or Christian
}
function testFacilitator(string){
    if(string === "Josh"|| string==="Fasil" || string==="Christian"){
        return true;
    }else{
    return false;
}

}