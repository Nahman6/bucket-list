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

const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

form.addEventListener("submit", (event) => {
  // Prevent default form submission behavior
  event.preventDefault();
  form.reset();
});

function addTask() {
  if (taskInput.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = taskInput.value;
    taskList.appendChild(li);

    const span = document.createElement("span");
    const img = document.createElement("img");
    img.id = "myImage";
    img.src = "saving.png";
    span.appendChild(img);
    li.appendChild(span);
    saveData();
  }
  taskInput = "";
}
taskList.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.id === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", taskList.innerHTML); //name,what u want to save
}

function showTask() {
  taskList.innerHTML = localStorage.getItem("data");
}
saveData();
