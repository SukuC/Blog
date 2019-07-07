const editButton = document.getElementById('editButton');
const saveButton = document.getElementById('saveButton');
const blogBody = document.getElementById('blogBody');

editButton.onclick = function () {
    editButton.style.display = "none";
    saveButton.style.display = "block";
    const postValue = document.getElementById('blogBody').innerHTML;
    blogBody.innerHTML = `<textarea id="instantTextArea" style="width: 100%;height: 35rem;font-size: 1.8rem">${postValue}</textarea>`;

};

saveButton.onclick = function () {
    editButton.style.display = "block";
    saveButton.style.display = "none";
    const instantTextArea = document.getElementById('instantTextArea');
    const value = instantTextArea.value;
    if (value) {
        blogBody.innerHTML = `${value}`
    }
};

const commentArea = document.getElementById('commentArea');
const commentHolder = document.getElementById('commentHolder');
const commentButton = document.getElementById('commentButton');

const comments = [];

commentButton.onclick = function () {
    const value = commentArea.value;
    if (value) {
        const comment = `<div class="comment"><p>${value}</p></div>`;
        comments.unshift(comment);
        commentHolder.innerHTML = comments;
    }
};


const likeButton = document.getElementById('likeButton');
const likeStatus = document.getElementById('likeStatus');

let likeCount = 0;

likeButton.onclick = function () {
    likeCount++;
    if (likeCount === 1) {
        likeStatus.innerHTML = `${likeCount} person likes this!`;
    } else {
        likeStatus.innerHTML = `${likeCount} people liked this!`;
    }
};