function addTask() {
    const taskInput = document.getElementById("taskInput").value;
    if (taskInput) {
      const li = document.createElement("li");
      li.textContent = taskInput;
      li.onclick = function() {
        li.classList.toggle("completed");
      };
      document.getElementById("taskList").appendChild(li);
      document.getElementById("taskInput").value = '';
    }
  }
  