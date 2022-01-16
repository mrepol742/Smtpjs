function sendEmail() {
Email.send( {
  Host: "smtp.gmail.com",
  Username: "Your Gmail Here", // the  account youd like to use to send the email
  Password: "Your Gmail Password Here", // account password
  To: "To?", // the receiver email address
  From: "Your Gmail Here", // same value as Username
  Subject: "Youtube Coding Tutorials", // the topic / subject
  Body: "It sends" // your message
}).then(function(message){
   if (message == "OK") {
     alert("The email was send successfully")
   } else {
     alert(message) // i smell mistake here so lets show the error
   }
});
}
