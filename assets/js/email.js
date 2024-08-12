function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_q43bkvd", "template_1i3u4rs", parms).then(function() {
        
        // On success, redirect to home page with a message
        window.location.href = 'index.html?message=Email sent successfully';
    }, function(error) {
        console.log('FAILED...', error);
    });
}