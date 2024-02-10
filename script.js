document.addEventListener("DOMContentLoaded", function() {
    // Function to add task to the list
    function addTask() {
        var taskInput = document.getElementById("taskInput");
        var taskText = taskInput.value.trim();

        if (taskText !== "") {
            var li = document.createElement("li");
            li.textContent = taskText;

            // Add click event listener to mark task as completed
            li.addEventListener("click", function() {
                li.classList.toggle("completed");
            });

            document.getElementById("todoList").appendChild(li);
            taskInput.value = "";
        } else {
            alert("Please enter a task.");
        }
    }

    // Bind addTask function to button click event
    document.getElementById("addButton").addEventListener("click", addTask);
});
