let  taskInput = document.getElementById("taskInput");
let  addBtn = document.getElementsByClassName("addBtn");
let  taskList = document.getElementById("taskList");


function addTask() 

{
    const newTask = taskInput.value;

    taskList.appendChild(newTask);

}

addBtn.addEventListener("click", addTask);

