
let button = document.querySelector("#email-button")
 let example = 2;
 

button.addEventListener("click",(e)=>{
    e.preventDefault()
let email = document.querySelector("#email").value
let senderName = document.querySelector("#name").value
let subject = document.querySelector("#subject").value
let message = document.querySelector("#message").value
console.log(email)
const templateParams = {
   subject,senderName,message,email
 };
 console.log(templateParams)
    
    emailjs.send('<service-id>','template-id', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(err) {
           console.log('FAILED...', err);
        });
    

})


