document.addEventListener('DOMContentLoaded', function () {

    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert('Enter a new task');
        return;
    } 

    const li = document.createElement('li');
    li.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add = 'remove-btn';

    removeButton.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(removeButton);
    taskList.appendChild(li);

    taskInput.value = "";

    }

    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    addTask();
});