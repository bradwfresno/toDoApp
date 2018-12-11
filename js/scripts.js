
function appendlist(){

const listItem = document.createElement('li');
listItem.className = "list-group-item list-group-item-action";
const todoList = document.querySelector('.todoList');
listItem.textContent = itemName.value
todoList.appendChild(listItem);
const deleteBtn = document.createElement('button');
deleteBtn.textContent = 'Delete'
deleteBtn.classname = "btn btn-danger"
deleteBtn.addEventListener('click', deleteItem)
listItem.appendChild(deleteBtn);
itemName.value='';

}

const itemName = document.querySelector("#inputToDo");
const submit = document.querySelector("#submit");

submit.addEventListener('click', ()=>appendlist());
itemName.addEventListener('change',()=>appendlist());

//more functions
function deleteItem(){
    const parentLi = this.parentNode;
  parentLi.style.display='none';
   
    
alert("triggered");
};

