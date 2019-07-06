const signUpClose = document.getElementById('signUp-close');
const signInClose = document.getElementById('signIn-close');

const signInButton = document.getElementById('signInButton');
const signUpButton = document.getElementById('signUpButton');

const area = document.getElementById('modal-container');

const signInModal = document.getElementById('signIn--modal');
const signUpModal = document.getElementById('signUp--modal');

const signUp = document.getElementById('signUp');

signInButton.onclick = function () {
    area.style.display = "block";
    signInModal.style.display = "flex";
    signUpModal.style.display = "none";
};

signUpButton.onclick = function () {
    area.style.display = "block";
    signUpModal.style.display = "flex";
    signInModal.style.display = "none";
};

signInClose.onclick = function () {
    area.style.display = "none";
};

signUpClose.onclick = function () {
    area.style.display = "none";
};
signUp.onclick = function () {
    area.style.display = "block";
    signUpModal.style.display = "flex";
    signInModal.style.display = "none";
};

area.onclick = function (event) {
    if (event.target === area) {
        area.style.display = "none";
    }
};