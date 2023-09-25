document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    // Función para añadir una nueva tarea
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const newTask = document.createElement("li");
            newTask.textContent = taskText;
            newTask.addEventListener("click", function () {
                // Borrar la tarea al hacer clic en ella
                this.remove();
            });
            taskList.appendChild(newTask);
            taskInput.value = "";
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