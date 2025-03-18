function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.classList.add('task-item');

    const span = document.createElement('span');
    span.textContent = taskText.length > 30 ? taskText.substring(0, 30) + "..." : taskText;
    span.classList.add('scrollable');

    span.onclick = function () {
        alert("📋 Full Task: " + taskText);
    };

    const editBtn = document.createElement('button');
    editBtn.textContent = '✏️';
    editBtn.classList.add('edit-btn');
    editBtn.onclick = function () {
        const newTask = prompt('Edit your task:', taskText);
        if (newTask) {
            span.textContent = newTask.length > 50 ? newTask.substring(0, 50) + "..." : newTask;
            span.onclick = function () {
                alert("📋 Full Task: " + newTask);
            };
        }
    };

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = function () {
        li.classList.add('remove'); // Smooth fade-out effect
        setTimeout(() => taskList.removeChild(li), 300);
    };

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = ''; // Clear input
}
