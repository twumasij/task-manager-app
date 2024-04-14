document.getElementById('taskForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value;
    taskInput.value = ''; // clear input after submission

    fetch('http://localhost:3000/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: task })
    })
    .then(response => response.json())
    .then(addTaskToList)
    .catch(err => console.error('Error adding task:', err));
});

function addTaskToList(task) {
    const listItem = document.createElement('li');
    listItem.textContent = task.name; // assuming the response includes the task name
    document.getElementById('taskList').appendChild(listItem);
}

function loadTasks() {
    fetch('http://localhost:3000/tasks')
    .then(response => response.json())
    .then(tasks => {
        tasks.forEach(addTaskToList);
    })
    .catch(err => console.error('Error loading tasks:', err));
}

window.onload = loadTasks; // Load tasks when the page is ready
