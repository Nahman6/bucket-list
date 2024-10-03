let tasks = [];
const addTask = () => {
  const taskInput = document.getElementById("taskInput");
  const text = taskInput.value.trim();

  if (text) {
    tasks.push({ text: text, completed: false });
    updateTasksList();
  }
};
const taskList = document.getElementById("task-list");
const updateTasksList = () => {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
    <div class="taskItem">
    <div class="task ${task.completed ? "completed" : ""}">
        <input type="check" class="checkbox" ${
          task.completed ? "checked" : ""
        }/>
        <p>${task.text}</p>
    </div>
    <div class="icons">
        <img src="./signature.png" class="size" onClick="editTask(${index})"/>
        <img src="./saving.png" class="size" onClick="deleteTask(${index})"/>
    </div>
</div>
`;

    listItem.addEventListener("change", () => toggleTaskComplete(index));
    taskList.append(listItem);
  });
};

document.getElementById("newTask").addEventListener("click", function (e) {
  e.preventDefault();
  addTask();
});

const darkModeToggle = document.getElementById("darkmode-toggle");
const background = document.querySelector(".background");
const form = document.querySelector("form");

darkModeToggle.addEventListener("change", () => {
  if (darkModeToggle.checked) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
});

form.addEventListener("submit", (event) => {
  // Prevent default form submission behavior
  event.preventDefault();
  form.reset();
});

//.
