function showMessage() {
    alert("You are currently in the BODY / HERO SECTION!");
}

function scrollToContent() {
    document.getElementById('content').scrollIntoView({ behavior: 'smooth' });
}

/* ============================= */
/* GET STARTED BUTTON */
/* ============================= */

function showMessage() {
alert("Welcome to MyWebsite! 🚀 Let's get started.");
}

/* ============================= */
/* LEARN MORE BUTTON */
/* ============================= */

function scrollToContent() {
document.getElementById("content").scrollIntoView({
behavior: "smooth"
});
}

/* ============================= */
/* FOOTER LINK SMOOTH SCROLL */
/* ============================= */

document.querySelectorAll('a[href^="#"]').forEach(function(link) {

```
link.addEventListener("click", function(event) {

    event.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
        target.scrollIntoView({
            behavior: "smooth"
        });
    }

});
```

});
