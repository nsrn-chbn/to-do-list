const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementsByClassName("addTaskBtn");
const taskList = document.getElementById("taskList");

function addTask() 

{
    const taskText = taskInput.value.trim();

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;


/* "X" button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.style.border = "none";
    deleteBtn.style.background = "transparent";
    deleteBtn.style.cursor = "pointer";
    deleteBtn.style.fontSize = "16px";

    // When delete button is clicked
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });
*/

    li.appendChild(span);
/* li.appendChild(deleteBtn); */
    taskList.appendChild(li);

}

// Add task when clicking 'Add'
addTaskBtn.addEventListener("click", addTask);

/* Add task w/ 'Enter'
taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});
 */