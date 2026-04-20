// Show button when user scrolls down
window.onscroll = function () {
    var goTopBtn = document.getElementById("goTopBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        goTopBtn.style.display = "block";
    } else {
        goTopBtn.style.display = "none";
    }
};

// Smooth scroll to top function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
