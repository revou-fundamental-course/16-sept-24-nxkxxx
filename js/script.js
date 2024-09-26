// SlideShow
const imageList = document.getElementsByClassName("imageSlideShow");
let slideIndex = 1;
showDivs(slideIndex);

function changeSlide(n) {
    showDivs(slideIndex += n);
}

function showDivs(index) {
    if (index > imageList.length) { slideIndex = 1; }
    else if (index < 1) { slideIndex = imageList.length; }

    Array.from(imageList).forEach((slide, i) => {
        slide.style.display = (i === slideIndex - 1) ? "block" : "none";
    });
}

setInterval(() => {
    changeSlide(1);
}, 5000);

// Replace Name
// replaceName();
function replaceName() {
    let name = prompt("Please enter your name");
    document.querySelector("#user-name").innerText = name;
}

// Message Us Form Validation
function validateForm() {
    let name = document.getElementById("nama").value;
    let date = document.getElementById("tanggal").value;
    let message = document.getElementById("pesan").value;
    if (name === "" || date === "" || message === "") {
        alert("Please fill in all fields");
    } else {
        alert("Thank you for your message");
        document.getElementById("resultNama").innerText = name;
        document.getElementById("resultTanggal").innerText = date;
        document.getElementById("resultPesan").innerText = message;
        // Handle gender
        let gender = document.querySelector('input[name="jenisKelamin"]:checked');
        document.getElementById("resultJenisKelamin").innerText = gender ? gender.nextElementSibling.innerText : "Not specified";
    }
}

// Back to Top Button
const backToTopButton = document.createElement("button");
backToTopButton.innerText = "Back to Top";
backToTopButton.id = "backToTop"; // Use the same ID for styling
document.body.appendChild(backToTopButton);

// Show button when scrolling down
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Scroll to top function
backToTopButton.onclick = function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
