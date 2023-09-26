document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTaskButton");
  const taskList = document.getElementById("taskList");

  // Función para añadir una nueva tarea
  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const newTask = document.createElement("li");
      newTask.innerHTML = `
            <span>${taskText}</span>
            <button class="deleteButton btn btn-danger">Borrar</button>
            `;
     
      taskList.appendChild(newTask);
      taskInput.value = "";
      const deleteButton = newTask.querySelector(".deleteButton");
      deleteButton.addEventListener("click", function(){
        taskList.removeChild(newTask);
      });
    }
  }

  // Escuchar el evento click en el botón "Añadir"
  addTaskButton.addEventListener("click", addTask);

  // Escuchar el evento "Enter" en el campo de entrada
  taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
