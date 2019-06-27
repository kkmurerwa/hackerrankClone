// When the user scrolls down 50px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").style.padding = "0px";
    } else {
        document.getElementById("navbar").style.padding = "55px 0px";
    }
}

// Add active class to the current button (highlight it)
var header = document.getElementById("navbar-links");
var btns = header.getElementsByClassName("navbar-links-item");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}