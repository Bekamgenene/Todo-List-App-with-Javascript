function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = taskText.length > 50 ? taskText.substring(0, 50) + "..." : taskText;
    span.classList.add('scrollable');

    span.onclick = function () {
        alert("Full Task: " + taskText);
    };

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.onclick = function () {
        const newTask = prompt('Edit your task:', taskText);
        if (newTask) {
            span.textContent = newTask.length > 50 ? newTask.substring(0, 50) + "..." : newTask;
            span.onclick = function () {
                alert("Full Task: " + newTask);
            };
        }
    };

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function () {
        taskList.removeChild(li);
    };

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = ''; // Clear input
}
