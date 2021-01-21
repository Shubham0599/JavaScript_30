//selector
//shift+alt+down arrow
const todoInput=document.querySelector('.todo-input');
const todoButton=document.querySelector('.todo-button');
const todoList=document.querySelector('.todo-list');

//event listener
todoButton.addEventListener('click',addTodo);

//function
function addTodo(event){
    event.preventDefault();
    //todo div
    const todoDiv=document.createElement("div");
    todoDiv.classList.add('todo');
    //createli
    const newTodo=document.createElement("li");
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //checkmark button
    const completedButton=document.createElement('button');
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //trash button
    const trashButton=document.createElement('button');
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //append todolist
    todoList.appendChild(todoDiv); 

    //clear input value
    todoInput.value=" ";
}