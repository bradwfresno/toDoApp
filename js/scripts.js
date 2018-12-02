
function appendlist(){

const listItem = document.createElement('li');
listItem.className = "list-group-item list-group-item-action";
const todoList = document.querySelector('.todoList');
listItem.textContent = itemName.value
todoList.appendChild(listItem);
itemName.value='';
}

const itemName = document.querySelector("#inputToDo");
const submit = document.querySelector("#submit");
submit.addEventListener('click', ()=>appendlist());
itemName.addEventListener('change',()=>appendlist());
