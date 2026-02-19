document.addEventListener("DOMContentLoaded", function() {

    // Profile Photo Preview
    let photoInput = document.getElementById("photo");
    let previewImg = document.getElementById("preview");

    if(photoInput){
        photoInput.addEventListener("change", function(){
            if(this.files && this.files[0]){
                let reader = new FileReader();
                reader.onload = function(e){
                    previewImg.src = e.target.result;
                    previewImg.style.display = "block";
                }
                reader.readAsDataURL(this.files[0]);
            }
        });
    }

    // Form Submit
    let form = document.getElementById("admissionForm");

    if(form){
        form.addEventListener("submit", function(e){
            e.preventDefault();

            let mobile = document.getElementById("mobile").value.trim();
            let aadhar = document.getElementById("aadhar").value.trim();
            let successBox = document.getElementById("successBox");

            if(mobile.length !== 10 || isNaN(mobile)){
                alert("Mobile number must be 10 digits");
                return;
            }

            if(aadhar.length !== 12 || isNaN(aadhar)){
                alert("Aadhar number must be 12 digits");
                return;
            }

            successBox.classList.add("show");

            setTimeout(function(){
                window.location.href = "index.html";
            }, 2000);
        });
    }

});
