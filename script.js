document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("todo-form");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginLeft = "10px";

    deleteBtn.addEventListener("click", function () {
      taskList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
  });
});
