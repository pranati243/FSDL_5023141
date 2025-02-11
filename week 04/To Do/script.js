let tasks = [];
let taskId = 0;

function addTask() {
    const taskInput = document.getElementById('taskInput').value.trim();
    const taskDueDate = document.getElementById('taskDueDate').value;
    const taskPriority = document.getElementById('taskPriority').value;

    if (taskInput !== "") {
        const task = {
            id: taskId++,
            text: taskInput,
            dueDate: taskDueDate,
            priority: taskPriority,
            completed: false,
        };

        tasks.push(task);
        renderTasks();
        resetInputFields();
    }
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Clear previous tasks

    tasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        if (task.completed) {
            taskItem.classList.add('completed');
        }

        const taskTextElement = document.createElement('span');
        taskTextElement.classList.add('task-text');
        taskTextElement.innerText = task.text;

        const taskPriorityElement = document.createElement('span');
        taskPriorityElement.classList.add('task-priority', task.priority.toLowerCase());
        taskPriorityElement.innerText = task.priority;

        const taskDueDateElement = document.createElement('span');
        taskDueDateElement.classList.add('task-due-date');
        taskDueDateElement.innerText = task.dueDate;

        const taskCheckbox = document.createElement('input');
        taskCheckbox.type = 'checkbox';
        taskCheckbox.classList.add('checkbox');
        taskCheckbox.checked = task.completed;
        taskCheckbox.onclick = () => toggleTaskCompletion(task.id);

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.innerText = '×';
        deleteBtn.onclick = () => deleteTask(task.id);

        taskItem.appendChild(taskCheckbox);
        taskItem.appendChild(taskTextElement);
        taskItem.appendChild(taskPriorityElement);
        taskItem.appendChild(taskDueDateElement);
        taskItem.appendChild(deleteBtn);

        taskList.appendChild(taskItem);
    });
}

function toggleTaskCompletion(taskId) {
    const task = tasks.find(t => t.id === taskId);
    task.completed = !task.completed;
    renderTasks();
}

function deleteTask(taskId) {
    tasks = tasks.filter(t => t.id !== taskId);
    renderTasks();
}

function filterTasks() {
    const filterPriority = document.getElementById('filterPriority').value;
    const filterStatus = document.getElementById('filterStatus').value;

    const filteredTasks = tasks.filter(task => {
        const matchesPriority = filterPriority === 'All' || task.priority === filterPriority;
        const matchesStatus = filterStatus === 'All' || 
            (filterStatus === 'Completed' && task.completed) ||
            (filterStatus === 'Incomplete' && !task.completed);
        
        return matchesPriority && matchesStatus;
    });

    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    filteredTasks.forEach(task => renderTaskItem(task));
}

function renderTaskItem(task) {
    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    if (task.completed) {
        taskItem.classList.add('completed');
    }

    const taskTextElement = document.createElement('span');
    taskTextElement.classList.add('task-text');
    taskTextElement.innerText = task.text;

    const taskPriorityElement = document.createElement('span');
    taskPriorityElement.classList.add('task-priority', task.priority.toLowerCase());
    taskPriorityElement.innerText = task.priority;

    const taskDueDateElement = document.createElement('span');
    taskDueDateElement.classList.add('task-due-date');
    taskDueDateElement.innerText = task.dueDate;

    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';
    taskCheckbox.classList.add('checkbox');
    taskCheckbox.checked = task.completed;
    taskCheckbox.onclick = () => toggleTaskCompletion(task.id);

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerText = '×';
    deleteBtn.onclick = () => deleteTask(task.id);

    taskItem.appendChild(taskCheckbox);
    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(taskPriorityElement);
    taskItem.appendChild(taskDueDateElement);
    taskItem.appendChild(deleteBtn);

    taskList.appendChild(taskItem);
}

function resetInputFields() {
    document.getElementById('taskInput').value = '';
    document.getElementById('taskDueDate').value = '';
    document.getElementById('taskPriority').value = 'Low';
}
