const todoInput = document.getElementById('todoInput');
const addTodobutton = document.getElementById('addTodobutton');
const todolist = document.getElementById('todolist');

addTodobutton.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', function(e){
    if(e.key==='Enter'){
        addTodo();
    }
});

function addTodo() {
    const todoText = todoInput.value.trim();
    if(todoText!==''){
        const li = document.createElement('li');
        li.textContent = todoText;
        todolist.appendChild(li);
        todoInput.value='';
    }
}