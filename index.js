let arr = [1, 2, 3];

const generateListButton = document.querySelector('#generateList');
const list = document.querySelector('ul');

generateListButton.addEventListener("click", () => {
  generateListButton.setAttribute("disabled", "");
  document.getElementById("clearList").disabled = false;
  for (let i = 0; i < arr.length; i++) {
    let listItem = document.createElement("li");
    listItem.innerHTML = arr[i];
    list.appendChild(listItem)
  } 
});




const clearListButton = document.querySelector('#clearList');

clearListButton.addEventListener("click", () => {
  document.getElementById("clearList").disabled = true;
  document.getElementById("generateList").disabled = false;
    const allListItems = document.querySelectorAll('li') 
    for (let i = 0; i < allListItems.length; i++) {
      allListItems[i].remove()
    }
});




