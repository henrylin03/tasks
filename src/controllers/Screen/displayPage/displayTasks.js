const tasksContainer = document.querySelector("main .container");

const displayTasks = (project) => {
  // #1: for given project object (argument), get all of the task objects. clear the main section of all cards.
  const taskObjects = project.getTasksAsObjects();

  // #2: for each task object, generate a task card
  taskObjects.forEach((t) => generateTaskDiv(t));

  // #3 each task card can be opened and enable modification/deletion (this might have to be done later in a separate pr)

  return;
};

const generateTaskDiv = (task) => {
  const taskDetails = task.viewDetails();

  const article = document.createElement("article");
  article.classList.add("task");
  if (taskDetails.urgency) article.classList.add("urgent");
  if (taskDetails.completed) article.classList.add("completed");

  // left-side
  const checkboxDiv = document.createElement("div");
  checkboxDiv.classList.add("checkbox-container");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.classList.add("checkbox");

  // right-side
  const rightDiv = document.createElement("div");
  rightDiv.classList.add("right");

  const taskName = document.createElement("p");
  taskName.classList.add("task-name");
  taskName.textContent = taskDetails.name;

  const taskAttributes = document.createElement("ul");
  taskAttributes.classList.add("task-attributes");

  for (const attribute in taskDetails) {
    if (
      attribute === "name" ||
      attribute === "completed" ||
      !taskDetails[attribute]
    )
      continue;

    console.log(attribute, taskDetails[attribute]);
  }

  //todo: use css (mask-image probably) to add the svg (locally-stored) based on the class (eg for dueDate, need to have the svg for the calendar)

  // for each attribute (other than completed), generate its div

  // todo: style dates (today and overdue)

  checkboxDiv.appendChild(checkbox);
  rightDiv.appendChild(taskName);
  article.appendChild(checkboxDiv);
  article.appendChild(rightDiv);

  console.log(task.viewDetails());
};

export default displayTasks;
