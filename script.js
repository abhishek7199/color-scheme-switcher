let buttons = document.querySelectorAll(".btn");
let body = document.querySelector('body');

buttons.forEach(function (button) {
    button.addEventListener("click", function change(e) {
        body.style.backgroundColor = e.target.id;
    });
});