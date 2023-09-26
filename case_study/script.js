// LOGIN-SHIT AREA
const login = document.querySelector("#sign-up")
const login_form = document.querySelector("form")
const close_button = document.querySelector("form .fa-circle-xmark")

login.addEventListener("click", function () {
    login_form.classList.add("active");
})

close_button.addEventListener("click", function () {
    login_form.classList.remove("active");
})