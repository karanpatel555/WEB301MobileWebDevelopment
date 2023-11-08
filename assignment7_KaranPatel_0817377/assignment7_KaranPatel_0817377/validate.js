$(document).ready(function () {
    $("#school").validate({
        rules: {
            schoolname: "required",
            joiningdate: {
                required: true,
                date: true
            },
            graduated: "required"
        },
        messages: {
            schoolname: "Enter your school name",
            joiningdate: {
                required: "Enter a date",
                date: "Date must in dd/mm/yyyy"
            },
            graduated: "Select yes or no"
        }
    });

    $("#information").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                pattern: /\d{11}/
            },
            zip: {
                required: true,
                pattern: /[A-Za-z]\d[A-Za-z]\d/
            }
        },
        messages: {
            email: {
                required: "Please enter your email",
                email: "Please enter a valid email address"
            },
            phone: {
                required: "Please enter a phone number",
                pattern: "Please enter a valid phone number (123-456-7890)"
            },
            zip: {
                required: "Enter a zip code",
                pattern: "Zip code must be filled"
            }
        }
    });
    $("#payment").validate({
        rules: {
            ccNumber: {
                required: true,
                pattern: /\d{15}/
            },
            expirationDate: {
                required: true,
                date: true,
            },
            cvv: {
                required: true,
                pattern: /\d{4}/
            }
        },
        messages: {
            ccNumber: {
                required: "Enter CC number",
                pattern: "Enter a valid CC number"
            },
            expirationDate: {
                required: "Enter a date",
                date: "Date must ADDED"
            },
            cvv: {
                required: "Enter CVV number",
                pattern: "CVV must be in NNN format"
            }
        }
    });
    let mySwiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });
});