const tasksContainer = document.querySelector("main .container");

const displayTasks = (project) => {
  // #1: for given project object (argument), get all of the task objects. clear the main section of all cards.
  const taskObjects = project.getTasksAsObjects();
  console.log(taskObjects); //todo: remove

  // #2: for each task object, generate a task card
  taskObjects.forEach((t) => generateTaskDiv(t));

  // #3 each task card can be opened and enable modification/deletion (this might have to be done later in a separate pr)

  return;
};

const generateTaskDiv = (task) => {
  const article = document.createElement("article");
  article.classList.add("task");
  if (task.urgency) article.classList.add("urgent");
  if (task.completed) article.classList.add("completed");

  const checkboxDiv = document.createElement("div");
  checkboxDiv.classList.add("checkbox-container");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.classList.add("checkbox");

  const rightDiv = document.createElement("div");
  rightDiv.classList.add("right");

  const taskName = document.createElement("p");
  taskName.classList.add("task-name");
  taskName.textContent = task.getName();

  const taskAttributes = document.createElement("ul");
  taskAttributes.classList.add("task-attributes");

  checkboxDiv.appendChild(checkbox);
  rightDiv.appendChild(taskName);
  article.appendChild(checkboxDiv);
  article.appendChild(rightDiv);

  console.log(task.viewDetails());
};

export default displayTasks;
