function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    if (taskInput.value === "") {
      return;
    }
  
    var newTask = document.createElement("li");
    newTask.innerHTML = '<span>' + taskInput.value + '</span><i class="fas fa-trash" onclick="deleteTask(this)"></i>';
  
    taskList.appendChild(newTask);
  
    taskInput.value = "";
  }
  
  function deleteTask(task) {
    var taskItem = task.parentNode;
    var taskList = taskItem.parentNode;
    taskList.removeChild(taskItem);
  }
  