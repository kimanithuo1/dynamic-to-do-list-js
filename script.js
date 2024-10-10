document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage when the page loads
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false));  // Add tasks without saving to avoid duplication
    }

    // Function to save tasks to Local Storage
    function saveTasks(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to add a task to the list and optionally save it to Local Storage
    function addTask(taskText, save = true) {
        // If taskText is empty, alert the user and return
        if (!taskText.trim()) {
            alert("Please enter a task.");
            return;
        }

        // Create a new li element and set its text content
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Create a remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');

        // Add an event listener to remove the task from the DOM and Local Storage
        removeButton.addEventListener('click', function () {
            taskList.removeChild(taskItem);
            removeTaskFromLocalStorage(taskText); // Remove from Local Storage
        });

        // Append the remove button to the task item and the task item to the task list
        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);

        // Clear the task input field
        taskInput.value = '';

        // If save is true, update Local Storage
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            saveTasks(storedTasks); // Save the updated tasks array to Local Storage
        }
    }

    // Function to remove a task from Local Storage
    function removeTaskFromLocalStorage(taskText) {
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks = storedTasks.filter(task => task !== taskText); // Filter out the task to be removed
        saveTasks(storedTasks); // Save the updated tasks array
    }

    // Event listener for adding a task when the Add Task button is clicked
    addButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        addTask(taskText);  // Add task and save it to Local Storage
    });

    // Event listener for adding a task when the Enter key is pressed in the input field
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            addTask(taskText);  // Add task and save it to Local Storage
        }
    });

    // Load tasks from Local Storage when the page loads
    loadTasks();
});
