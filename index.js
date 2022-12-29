let arr = [1, 2, 3];

const generateListButton = document.querySelector('#generateList');
const list = document.querySelector('ul');

generateListButton.addEventListener("click", () => {
    for (let i = 0; i < arr.length; i++) {
    let listItem = document.createElement("li");
    listItem.innerHTML = arr[i];
    list.appendChild(listItem)
    } 
});




const clearListButton = document.querySelector('#clearList');

clearListButton.addEventListener("click", () => {
    for (let i = 0; i < arr.length; i++) {
    let listItem = document.createElement("li");
    listItem.innerHTML = arr[i];
    list.remove(listItem);
    }
});



if (list.length == 1) {
    removeButton.generateListButton("disabled", "true");
  }

  if (generateList.hasAttribute("disabled")) {
    generateList.removeAttribute("disabled");
  }