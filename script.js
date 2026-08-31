function showMessage() {
    alert("Thank you for visiting my portfolio!");
}

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;

        alert("Thank you " + name + "! Your message has been received.");

        form.reset();
    });

});