//selector
//shift+alt+down arrow
const todoInput=document.querySelector('.todo-input');
const todoButton=document.querySelector('.todo-button');
const todoList=document.querySelector('.todo-list');
const filterOption=document.querySelector('.filter-todo');
//event listener
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterTodo);
//function
function addTodo(event){
    event.preventDefault();
    if(todoInput.value.length>1){
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
else {
    alert('type something meaningful');
}
}

// deleteCheck
function deleteCheck(e){
//console.log(e.target);
const item=e.target;
//delete
if(item.classList[0]=='trash-btn'){
    const todo=item.parentElement;
    todo.classList.add('fall');
    // todo.remove();
    todo.addEventListener('transitionend',function(){
        todo.remove();
    });
}

//checkmark
if(item.classList[0]=='complete-btn'){
    const todo=item.parentElement;
    todo.classList.toggle('completed');
}
}

//filtering 
function filterTodo(e){
    const todos=todoList.childNodes;
    console.log(todos);
    todos.forEach(function(tod){
     if(tod.hasChildNodes('div')){
        switch(e.target.value){
            case "all":
                tod.style.display="flex";
                break;
            case "completed":
                if(tod.classList.contains('completed')){
                    tod.style.display="flex";
                }else{
                    tod.style.display="none";
                }
                break;
            case "uncompleted" :
                if(tod.classList.contains('completed')){
                    tod.style.display="none";
                }else{
                    tod.style.display="flex";
                }
                break;
        }
     }
    })
}

