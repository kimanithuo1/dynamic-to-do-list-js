document.addEventListener('DOMContentLoaded', function () {
    // Select the DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Retrieve and trim the value from the input
        const taskText = taskInput.value.trim();

        // Check if the input is empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new li element and set its text content
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');

        // Add the event listener to remove the task when the button is clicked
        removeButton.addEventListener('click', function () {
            taskList.removeChild(taskItem);
        });

        // Append the remove button to the task item (li)
        taskItem.appendChild(removeButton);

        // Append the task item (li) to the task list (ul)
        taskList.appendChild(taskItem);

        // Clear the input field after adding the task
        taskInput.value = '';
    }

    // Event listener for adding a task when the button is clicked
    addButton.addEventListener('click', addTask);

    // Event listener for adding a task when the "Enter" key is pressed
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
