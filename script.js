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
document.getElementById("contactForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const form = document.getElementById("contactForm");
    const formData = new FormData(form);

    // 🔑 Web3Forms Access Key
    formData.append("access_key", "a647c6f6-0460-46d9-8560-4108ad01fa8e"); 

    // Custom Email Message
    formData.set("message", `
------------------------------
NEW CONTACT FORM MESSAGE
------------------------------

Name: ${form.name.value}
Email: ${form.email.value}
Phone: ${form.phone.value}

Message:
${form.message.value}
------------------------------
`);

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const result = await response.json();

        if(result.success) {
            // Show success message
            document.getElementById("successMessage").style.display = "block";
            form.reset();
        } else {
            alert("Submission failed! Please check your access key and internet connection.");
        }

    } catch(error) {
        console.error(error);
        alert("Error submitting form! Please try again.");
    }
});



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
