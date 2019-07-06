const deleteButton = document.getElementsByClassName('right');
const deleteModal = document.getElementById('deleteModal');
const containerDelete = document.getElementById('container-delete');
const deleteClose = document.getElementById('deleteClose');

const deleteFunction = function () {
    deleteModal.style.display = "flex";
    containerDelete.style.display = "flex";
    console.log("Clicked delete")

};

deleteClose.onclick = function () {
    deleteModal.style.display = "none";
    containerDelete.style.display = "none";
};

for (var i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener('click', deleteFunction, false);
}

