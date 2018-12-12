//golbals
const todoList = []
let doneList = []
const itemName = document.querySelector("#inputTodo");
const submit = document.querySelector("#submit");

//Event Listeners 

submit.addEventListener('click', ()=>appendlist());
itemName.addEventListener('change',()=>appendlist());


////Functions

//Clear Todo
function clearTodo(){
  const listItems = document.querySelectorAll('.toDo li')
  for (item of listItems) {
    item.parentNode.removeChild(item);
  }
  buildTodo();
};
//Clear Done
function clearDone(){
  const listItems = document.querySelectorAll('.done li')
  for (item of listItems) {
    item.parentNode.removeChild(item);
  }
  buildDoneList();
};

function buildTodo(){
  for (item of todoList) {
    //li stuff
  const listItem = document.createElement('li');
    listItem.className = "list-group-item list-group-item-action";
    listItem.id = item
  const selectBox = document.createElement('input');
    selectBox.type = "checkbox";
    selectBox.id = `cb-${item}`;
    selectBox.addEventListener('click', complete)
  const label = document.createElement('label');
    label.textContent = item
  

  const todoUl = document.querySelector('.todoList')
    
    todoUl.appendChild(listItem);
    listItem.appendChild(selectBox);
    listItem.appendChild(label);

    //delete button stuff
  const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete'
    deleteBtn.className = "btn btn-danger"
    deleteBtn.addEventListener('click', deleteItem)
    listItem.appendChild(deleteBtn);
  }
};

//Append - Insert
function appendlist(){
  const todoItem = document.querySelector('#inputTodo')
  if(todoItem.value){
  todoList.push(todoItem.value);
  itemName.value='';
  clearTodo();
}
  };



//Delete Todo
function deleteItem(){
    const parentLi = this.parentNode;
      parentLi.style.display='none';
    const arrIndex = todoList.indexOf(this.parentNode.id);
    todoList.splice(arrIndex,1);
    clearTodo();
};
//Delete Done
function deleteItemDone(){
  const parentLi = this.parentNode;
    parentLi.style.display='none';
  const arrIndex = doneList.indexOf(this.parentNode.id);
  doneList.splice(arrIndex,1);
  clearTodo();
  clearDone();
};

//Complete
function complete(){
  const parentLi = this.parentNode;
    parentLi.style.display='none';
  const arrIndex = todoList.indexOf(this.parentNode.id);
  //console.log((todoList.splice(arrIndex,1))[0])
 // doneList.push('abc');
  doneList.push((todoList.splice(arrIndex,1))[0]);
  clearTodo();
  clearDone();


};

//Build Done List
function buildDoneList(){
  for (item of doneList) {
    //li stuff
  const listItem = document.createElement('li');
    listItem.className = "list-group-item list-group-item-action";
    listItem.id = item
  const selectBox = document.createElement('input');
    selectBox.type = "checkbox";
    selectBox.id = `cb-${item}`;
    selectBox.checked = true;
    selectBox.addEventListener('click', unComplete)
  const label = document.createElement('label');
    label.textContent = item;
    label.className = "strike";
  

  const doneUl = document.querySelector('.doneList');
    
    doneUl.appendChild(listItem);
    listItem.appendChild(selectBox);
    listItem.appendChild(label);

    //delete button stuff
  const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete'
    deleteBtn.className = "btn btn-danger"
    deleteBtn.addEventListener('click', deleteItemDone)
    listItem.appendChild(deleteBtn);
  }
};

//uncomplete or readd to todoList
function unComplete(){
console.log(this.parentNode.id);
todoList.push(this.parentNode.id);
const abc123= this.parentNode.id;
console.log(abc123);
const arrIndexDone = doneList.indexOf(this.parentNode.id);
console.log(arrIndexDone)
console.log(doneList);
doneList.splice(arrIndexDone,1);
console.log(doneList);
this.parentNode.style.display= 'none';

clearTodo();
clearDone();
};


function play(){
//Fluff
const audio = new Audio('/media/audio_file.mp3');
audio.play();
}

const pl = document.querySelector('#mediaimage')
pl.addEventListener('click',play);







