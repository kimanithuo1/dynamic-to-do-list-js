document.addEventListener('DOMContentLoaded', function () {
    // Step 1: Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Step 2: Create the addTask function
    function addTask() {
        // Get and trim the task input value
        const taskText = taskInput.value.trim();

        // Check if input is empty and show alert if it is
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Step 3: Create task and remove button
        const taskItem = document.createElement('li');  // Create a new li element
        taskItem.textContent = taskText;               // Set the task's text content

        const removeButton = document.createElement('button'); // Create the remove button
        removeButton.textContent = "Remove";           // Set the button's text
        removeButton.className = 'remove-btn';         // Assign a class to the button

        // Step 4: Add remove functionality
        removeButton.onclick = function () {
            taskList.removeChild(taskItem);  // Remove the task when "Remove" button is clicked
        };

        // Step 5: Append button to task item, then append task item to task list
        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);

        // Step 6: Clear the task input field after adding
        taskInput.value = '';
    }

    // Step 7: Attach event listeners
    addButton.addEventListener('click', addTask);  // Add event listener for "Add Task" button

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {  // Allow adding task by pressing "Enter" key
            addTask();
        }
    });
});
