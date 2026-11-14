let button = document.getElementById("myButton");

let message = document.getElementById("message");

button.addEventListener("click", function() {
    message.textContent = "Welcome to my website!";
});

button = document.getElementById("titleChanger");

const title = document.getElementById("title");

button.addEventListener("click", function() {
    title.textContent = "Hi Darling!";
});