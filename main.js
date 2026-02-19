// Hide Preloader AFTER header loads
document.addEventListener("DOMContentLoaded", function () {

    // Header Load
    fetch("header.html")
.then(res => res.text())
.then(data => {
    document.getElementById("header").innerHTML = data;

    const loader = document.getElementById("preloader");
    if (loader) {
        loader.style.display = "none";
    }

    /* ✅ MOBILE MENU FIX */
    window.toggleMenu = function () {
        const navLinks = document.getElementById("navLinks");
        if (navLinks) {
            navLinks.classList.toggle("active");
        }
    };

});


});


document.addEventListener("DOMContentLoaded", function () {

    /* ==============================
       GALLERY LIGHTBOX
    ============================== */

    const images = document.querySelectorAll(".gallery-item img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close");

    if (images.length && lightbox && lightboxImg && closeBtn) {

        images.forEach(image => {
            image.addEventListener("click", () => {
                lightbox.style.display = "block";
                lightboxImg.src = image.src;
            });
        });

        closeBtn.addEventListener("click", () => {
            lightbox.style.display = "none";
        });

        lightbox.addEventListener("click", (e) => {
            if (e.target !== lightboxImg) {
                lightbox.style.display = "none";
            }
        });
    }


    /* ==============================
       MOBILE MENU TOGGLE
    ============================== */

    


    /* ==============================
       SMOOTH SCROLL (ONLY NAV LINKS)
    ============================== */

    document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

                // Close mobile menu after click
                navLinks.classList.remove("active");
            }
        });
    });


    /* ==============================
       CONTACT FORM (EmailJS)
    ============================== */

    if (document.getElementById("contactForm")) {

        (function(){
            emailjs.init("Y6R0FFPUKhENAJTo3");
        })();

        document.getElementById("contactForm").addEventListener("submit", function(e) {
            e.preventDefault();

            emailjs.send("service_n505qyd","template_22pn979",{
                from_name: document.getElementById("name").value,
                from_email: document.getElementById("email").value,
                phone: document.getElementById("phone").value,
                message: document.getElementById("message").value,
            })
            .then(function() {
                document.getElementById("successMessage").style.display = "block";
                document.getElementById("contactForm").reset();

                setTimeout(() => {
                    document.getElementById("successMessage").style.display = "none";
                }, 3000);

            }, function() {
                alert("Failed to send message.");
            });
        });
    }

});


document.addEventListener("DOMContentLoaded", function () {

    // Header Load
    fetch("header.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;

        // Preloader hide
        const loader = document.getElementById("preloader");
        if (loader) {
            loader.style.display = "none";
        }

        // Dropdown Fix (AFTER header loads)
        const dropdownLink = document.querySelector(".dropdown > a");

        if (dropdownLink) {
            dropdownLink.addEventListener("click", function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    this.nextElementSibling.classList.toggle("show");
                }
            });
        }

    });

});

