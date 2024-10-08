document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get and trim the input value
        const taskText = taskInput.value.trim();

        // Check if the input is empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create a new <li> element for the task
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Create a new "Remove" button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Set up the click event to remove the task
        removeButton.onclick = function () {
            taskList.removeChild(taskItem); // Remove the <li> when "Remove" is clicked
        };

        // Append the button to the <li> element
        taskItem.appendChild(removeButton);

        // Append the new <li> to the task list <ul>
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = '';
    }

    // Add event listener for the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Allow task addition via Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
