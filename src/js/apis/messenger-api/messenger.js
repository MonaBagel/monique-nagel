/*==========================
    EmailJS API
============================*/
$(document).ready(function(){

    $('#contact-form').submit(function(newMsg){
        // form input values
        const form = document.querySelector('form[id="contact-form"]');
        const sendName = form.elements['sender-name'].value;
        const sendMail = form.elements['sender-email'].value;
        const message = form.elements['sender-message'].value;

        newMsg.preventDefault();

        var data = {
            service_id: 'YOUR_SERVICE_ID',
            template_id: 'YOUR_TEMPLATE_ID',
            user_id: 'YOUR_USER_ID',
            template_params: {
                'from_name': sendName,
                'reply_to': sendMail,
                'message': message
            }
        };
         
        $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
                type: 'POST',
                data: JSON.stringify(data),
                contentType: 'application/json'
        }).done(function() {
            // Successful message sent
            alert('Your message has been sent! Thank you for contacting me!');
        }).fail(function(error) {
            // Unuccessful message sent
            alert('Oops... Something went wrong when sending a message... ' + JSON.stringify(error));
        });







    })
})();




