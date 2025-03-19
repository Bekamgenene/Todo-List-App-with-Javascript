function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const taskList = document.getElementById('taskList');
  const li = document.createElement('li');

  const span = document.createElement('span');
  span.classList.add('task-text');
  span.textContent = taskText.length > 40 ? taskText.substring(0, 40) + "..." : taskText;
  
  span.onclick = function () {
    alert("📋 Full Task: " + taskText);
  };

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.classList.add('edit-btn');
  editBtn.onclick = function () {
    const newTask = prompt('Edit your task:', taskText);
    if (newTask) {
      span.textContent = newTask.length > 40 ? newTask.substring(0, 40) + "..." : newTask;
      span.onclick = function () {
        alert("📋 Full Task: " + newTask);
      };
    }
  };

  
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.onclick = function () {
    taskList.removeChild(li);
  };

  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = '';
}
