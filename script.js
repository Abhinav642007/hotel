/* ================================= */
/* GET STARTED BUTTON */
/* ================================= */

function showMessage() {
alert("Welcome to MyWebsite! 🚀 Let's get started.");
}

/* ================================= */
/* LEARN MORE BUTTON */
/* ================================= */

function scrollToContent() {
document.getElementById("content").scrollIntoView({
behavior: "smooth"
});
}

/* ================================= */
/* FOOTER LINK SMOOTH SCROLL */
/* ================================= */

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

/* ================================= */
/* CONTENT CARD FUNCTION */
/* ================================= */

function openCard(serviceName) {

```
alert(
    "You selected: " + serviceName +
    "\n\nMore information about " +
    serviceName +
    " will be available soon! 🚀"
);
```

}

/* ================================= */
/* START PROJECT BUTTON */
/* ================================= */

function startProject() {


alert(
    "Let's build something amazing! 🚀\n\n" +
    "Thanks for your interest in starting a project."
);


}

/* ================================= */
/* LIGHT / DARK MODE */
/* ================================= */

const themeButton = document.getElementById("themeButton");

function toggleTheme() {


document.body.classList.toggle("dark-mode");

if (document.body.classList.contains("dark-mode")) {

    themeButton.innerHTML = "☀️ Light";

    localStorage.setItem("theme", "dark");

} else {

    themeButton.innerHTML = "🌙 Dark";

    localStorage.setItem("theme", "light");

}


}

/* ================================= */
/* LOAD SAVED THEME */
/* ================================= */

window.addEventListener("DOMContentLoaded", function() {


const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");
    themeButton.innerHTML = "☀️ Light";

} else {

    document.body.classList.remove("dark-mode");
    themeButton.innerHTML = "🌙 Dark";

}


});
