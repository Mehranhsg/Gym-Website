
$(document).ready(function () {

    $(".ham-burger, .nav ul li a").click(function () {

        $(".nav").toggleClass("open")

        $(".ham-burger").toggleClass("active");
    })
    $(".accordian-container").click(function () {
        $(".accordian-container").children(".body").slideUp();
        $(".accordian-container").removeClass("active")
        $(".accordian-container").children(".head").children("span").removeClass("fa-angle-down").addClass("fa-angle-up")
        $(this).children(".body").slideDown();
        $(this).addClass("active")
        $(this).children(".head").children("span").removeClass("fa-angle-up").addClass("fa-angle-down")
    })

    $(".nav ul li a, .go-down").click(function (event) {
        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html,body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });

            // add active class in navigation
            $(".nav ul li a").removeClass("active")
            $(this).addClass("active")
        }
    })
})



document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var form = event.target;
    var formData = new FormData(form);

    fetch('process_contact.php', {
        method: 'POST',
        body: formData
    })
        .then(response => response.text())
        .then(data => {
            var responseMessage = document.getElementById('responseMessage');
            responseMessage.style.display = 'block';
            responseMessage.innerText = data;
            responseMessage.style.color = 'white';

            if (data.includes('successfully')) {
                form.reset();
            }
        })
        .catch(error => {
            console.error('Error:', error);
            var responseMessage = document.getElementById('responseMessage');
            responseMessage.style.display = 'block';
            responseMessage.innerText = 'There was an error sending your message. Please try again later.';
            responseMessage.style.color = 'white';
        });

    return false;
});