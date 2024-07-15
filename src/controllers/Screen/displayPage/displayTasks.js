import { format, isToday, isPast } from "date-fns";
import displayTaskDetailsInModal from "../modals/displayTaskDetailsInModal";
import { createAppController } from "../../App/createAppController";
import displayPage from ".";
import confirmTaskDeletion from "../modals/deletion/confirmTaskDeletion";
import sortTasks from "./sortTasks";

const tasksContainer = document.querySelector("main .container");

const displayTasks = (project) => {
  const taskObjects = project.getTasksAsObjects();
  if (!taskObjects) return;

  tasksContainer.replaceChildren();

  const sortedTasks = sortTasks(taskObjects);
  sortedTasks.forEach((taskObject) => {
    const taskArticleElement = generateTaskDiv(taskObject);
    tasksContainer.appendChild(taskArticleElement);
  });
};

const generateTaskDiv = (task) => {
  const app = createAppController();

  const taskId = task.getId();
  const taskDetails = task.viewDetails();

  const article = document.createElement("article");
  article.classList.add("task");
  article.setAttribute("data-id", taskId);
  if (taskDetails.urgency) article.classList.add("urgent");
  if (taskDetails.completed) article.classList.add("completed");

  // checkbox
  const checkboxDiv = document.createElement("div");
  checkboxDiv.classList.add("checkbox-container");
  checkboxDiv.addEventListener("mousedown", (e) => e.stopPropagation());

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.classList.add("checkbox");
  if (taskDetails.completed) checkbox.checked = true;

  // details
  const detailsDiv = document.createElement("div");
  detailsDiv.classList.add("task-details");

  const taskName = document.createElement("p");
  taskName.classList.add("task-name");
  taskName.textContent = taskDetails.name;

  const taskAttributes = document.createElement("ul");
  taskAttributes.classList.add("task-attributes");
  const taskAttributeChildren = generateTaskAttributes(taskDetails);
  taskAttributeChildren.forEach((c) => taskAttributes.appendChild(c));

  // rubbish bin ui for deletion
  const binBtn = document.createElement("button");
  binBtn.type = "button";
  binBtn.classList.add("delete-icon-btn");

  // EVENT LISTENERS
  article.addEventListener("mousedown", () => displayTaskDetailsInModal(task));

  checkbox.addEventListener("change", () => {
    app.updateTaskCompletion(task, checkbox.checked);
    displayPage(task.getProjectId());
  });

  binBtn.addEventListener("mousedown", (e) => {
    e.stopPropagation();
    confirmTaskDeletion(task);
  });

  // CREATE DOM NODES
  checkboxDiv.appendChild(checkbox);
  detailsDiv.appendChild(taskName);
  detailsDiv.appendChild(taskAttributes);
  article.appendChild(checkboxDiv);
  article.appendChild(detailsDiv);
  article.appendChild(binBtn);

  return article;
};

const generateTaskAttributes = (taskDetails) => {
  const ATTRIBUTES_NOT_GENERATED = ["id", "name", "completed", "projectId"];
  ATTRIBUTES_NOT_GENERATED.forEach((a) => delete taskDetails[a]);
  const ATTRIBUTES_NEEDING_ICONS = ["dueDate", "urgency"]

  const attributeListItems = [];
  for (const attribute in taskDetails) {
    if (!taskDetails[attribute]) continue;

    const item = document.createElement("li");
    item.classList.add(attribute);
    if (ATTRIBUTES_NEEDING_ICONS.includes(attribute)) {
      const iconContainer = document.createElement("figure");
      iconContainer.classList.add(`${attribute}-icon`);
      item.appendChild(iconContainer);
    }

    const text = document.createElement("p");
    if (attribute === "urgency") text.textContent = "Urgent";
    else if (attribute === "dueDate") {
      const [year, month, day] = taskDetails[attribute].split("-");
      const dueDate = new Date(year, month - 1, day); // month is zero-indexed
      if (isToday(dueDate)) {
        item.classList.add("today");
        text.textContent = "Today";
      } else {
        text.textContent = format(dueDate, "d/M/yyyy");
        if (isPast(dueDate)) item.classList.add("overdue");
      }
    } else text.textContent = taskDetails[attribute];

    item.appendChild(text);
    attributeListItems.push(item);
  }

  return attributeListItems;
};

export default displayTasks;
