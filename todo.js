//To-Do List
function addTask() {
 let task = document.getElementById("todoInput").value;
 if (task) {
 let li = document.createElement("li");
 li.textContent = task;
 li.onclick = () => li.remove();
 document.getElementById("todoList").appendChild(li);
 }
}
