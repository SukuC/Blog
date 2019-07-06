const createPost = document.getElementById('createPost');
const postClose = document.getElementById('post-close');
// const area = document.getElementById('modal-container');
const postModal = document.getElementById('post--modal');

createPost.onclick = function () {
    area.style.display = "block";
    postModal.style.display = "flex";
};

area.onclick = function (event) {
    if (event.target === area) {
        area.style.display = "none";
        postModal.style.display = "none";
    }
};

postClose.onclick = function () {
    area.style.display = "none";
    postModal.style.display = "none";
};