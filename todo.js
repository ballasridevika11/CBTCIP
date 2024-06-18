function addTodo() {
    const Input = document.getElementById('todoInput');
    const newItem = Input.value.trim();
    
    if (newItem === '') {
        alert('Please enter a task.');
        return;
    }
    
    const todoList = document.getElementById('todoList');
    const todoItem = document.createElement('li');
    
    const currentDate = new Date();
    const dateStr = currentDate.toLocaleString();

    todoItem.innerHTML = `
        <span>${newItem} (Added: ${dateStr})</span>
        <button onclick="completeTodo(this)">Complete</button>
        <button class="remove-btn" onclick="removeTodo(this)">Remove</button>
    `;

    todoList.appendChild(todoItem);
    Input.value = '';
}

function removeTodo(button) {
    const todoItem = button.parentElement;
    todoItem.remove();
}

function completeTodo(button) {
    const todoItem = button.parentElement;
    const currentDate = new Date();
    const dateStr = currentDate.toLocaleString();

    todoItem.classList.toggle('completed');

    if (todoItem.classList.contains('completed')) {
        button.previousElementSibling.innerHTML += ` (Completed: ${dateStr})`;
    } else {
        button.previousElementSibling.innerHTML = button.previousElementSibling.innerHTML.replace(/ \(Completed:.*\)/, '');
    }
}