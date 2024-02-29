const email = document.getElementById("email");
const btn = document.getElementById("submit");

const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function validateEmail(i) {
    const errorMessage = document.querySelector(".error-text"); // Doğru hata mesajı öğesini seçmek için querySelector kullanın

    if (i.value === "" || i.value === undefined) {
        errorMessage.textContent = "Hmm, that doesn't look like a valid email address 🤔";
        errorMessage.style.display = "block";
    } else if (!i.value.match(regexEmail)) {
        errorMessage.textContent = "*Please provide a valid email address";
        errorMessage.style.display = "block";
    } else {
        errorMessage.style.display = "none";
    }
}

btn.addEventListener("click", (e) => {
    e.preventDefault();

    validateEmail(email);
});
