// Ini JS
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs() {
    var i;
    var imageList = document.getElementsByClassName("imageSlideShow");
    if (slideIndex > imageList.length) { slideIndex = 1 }
    else if (slideIndex < 1) { slideIndex = imageList.length }
    for (i = 0; i < imageList.length; i++) {
        imageList[i].style.display = "none";
    }
    imageList[slideIndex - 1].style.display = "block";
}

setInterval(() => {
    plusDivs(1);
}, 5000);
