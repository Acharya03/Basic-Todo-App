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
    const todotext = todoInput.value.trim();
    if(todotext!==''){
        const li = document.createElement('li');
        li.textContent = todotext;
        todolist.appendChild(li);
        todoInput.value='';
    }
}