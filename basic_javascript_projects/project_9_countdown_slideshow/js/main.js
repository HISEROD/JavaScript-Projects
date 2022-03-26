// slideshow script

let slideIndex = 1;

// prevent asynchronicity related bug caused by image loading ...I think
// ¯\_(ツ)_/¯
window.onload = showSlides;

// Next/previous controls
function plusSlides(n) {
    // add the given increment to the current index and pass to showSlides()
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n); // set the slide index using the given number
}

function showSlides(n) {
    let i; // initialize for loop variable
    let slides = document.getElementsByClassName("mySlides"); // shortcut for mySlides elements
    let dots = document.getElementsByClassName("dot"); // shortcut for dot elements
    if (n > slides.length) {slideIndex = 1} // same as slideIndex %= slides.length;
    /* The below if statement would be covered by the same code shown in the previous comment if
    Javascript's modulo used the floor function instead of truncation.
    see: https://en.wikipedia.org/wiki/Modulo_operation#Variants_of_the_definition */
    if (n < 1) { slideIndex = slides.length }
    // siable display of all images
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // remove active class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    // set the current image to display as a block-level element
    slides[slideIndex - 1].style.display = "block";
    // add the active class to the corresponding selector dot 
    dots[slideIndex-1].className += " active";
}

// countdown script
function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds -= 1; // decrement seconds
        document.getElementById("timer").innerHTML = seconds; // display seconds
        var time = setTimeout(tick, 1000); // run tick again after 1000ms
        if (seconds == -1) { // end of timer
            // popup message
            alert("Time is up!");
            // don't run the tick funtion anymore
            clearTimeout(time);
            // clear seconds display to prevent it from showing -1
            // inserting the nbsp keeps the p element's height the same
            document.getElementById("timer").innerHTML = "&nbsp;";
        }
    }
    tick();
}