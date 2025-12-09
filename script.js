

document.getElementById("homeButton").addEventListener("click", function (event) {
    event.preventDefault();

    document.querySelector("#full-bleed-intro").scrollIntoView({
        behavior: "smooth"
    });
});