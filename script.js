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

    const navLinks = document.getElementById("navLinks");

    window.toggleMenu = function () {
        if (navLinks) {
            navLinks.classList.toggle("active");
        }
    };


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

                if (navLinks) {
                    navLinks.classList.remove("active");
                }
            }
        });
    });


    /* ==============================
       CONTACT FORM (EmailJS)
    ============================== */

    const contactForm = document.getElementById("contactForm");

    if (contactForm && typeof emailjs !== "undefined") {

        emailjs.init("Y6R0FFPUKhENAJTo3");

        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let templateParams = {
                name: document.getElementById("name")?.value || "",
                email: document.getElementById("email")?.value || "",
                phone: document.getElementById("phone")?.value || "",
                message: document.getElementById("message")?.value || ""
            };

            emailjs.send("service_lnqxgdq", "template_22pn979~", templateParams)
                .then(function () {
                    const successMessage = document.getElementById("successMessage");
                    if (successMessage) {
                        successMessage.style.display = "block";
                    }
                    contactForm.reset();
                })
                .catch(function (error) {
                    console.error("Email Failed:", error);
                    alert("Email Failed");
                });
        });
    }


    /* ==============================
       DROPDOWN (Mobile Safe + Multiple Support)
    ============================== */

    document.querySelectorAll(".dropdown > a").forEach(link => {
        link.addEventListener("click", function (e) {

            if (window.innerWidth <= 768) {
                e.preventDefault();

                const submenu = this.nextElementSibling;

                if (submenu) {
                    submenu.classList.toggle("show");
                }
            }
        });
    });

});
