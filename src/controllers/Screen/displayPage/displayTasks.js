import { format, isToday, isPast } from "date-fns";
import displayTaskDetailsInModal from "../modals/displayTaskDetailsInModal";

// todo: make svgs easier to manipulate (we need to be able to colour them, but also center them (mask-image didn't work with flexbox - so maybe grid if we pursue that?)) - otherwise, maybe a JSON with all the SVGs inside would be good in like a data/ folder!
const SVGS = {
  dueDate: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-calendar-due">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                    <path d="M16 3v4" />
                    <path d="M8 3v4" />
                    <path d="M4 11h16" />
                    <path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />`,
  urgency: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"
                      fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-alert-circle">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm.01 13l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z" />`,
};
const tasksContainer = document.querySelector("main .container");

const displayTasks = (project) => {
  const taskObjects = project.getTasksAsObjects();
  if (!taskObjects) return;

  tasksContainer.replaceChildren();

  taskObjects.forEach((t) => {
    const taskArticleElement = generateTaskDiv(t);
    tasksContainer.appendChild(taskArticleElement);
  });
};

const generateTaskDiv = (task) => {
  const taskId = task.getId();
  const taskDetails = task.viewDetails();

  const article = document.createElement("article");
  article.classList.add("task");
  article.setAttribute("data-id", taskId);
  article.addEventListener("mousedown", () => displayTaskDetailsInModal(task));
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
  const taskAttributeChildren = generateTaskAttributes(taskDetails);
  taskAttributeChildren.forEach((c) => taskAttributes.appendChild(c));

  checkboxDiv.appendChild(checkbox);
  rightDiv.appendChild(taskName);
  rightDiv.appendChild(taskAttributes);
  article.appendChild(checkboxDiv);
  article.appendChild(rightDiv);

  return article;
};

const generateTaskAttributes = (taskDetails) => {
  const ATTRIBUTES_NOT_GENERATED = ["id", "name", "completed"];
  ATTRIBUTES_NOT_GENERATED.forEach((a) => delete taskDetails[a]);

  const attributeListItems = [];
  for (const attribute in taskDetails) {
    if (!taskDetails[attribute]) continue;

    const item = document.createElement("li");
    item.classList.add(attribute);
    if (SVGS.hasOwnProperty(attribute)) {
      const icon = document.createElement("figure");
      icon.innerHTML = SVGS[attribute];
      item.appendChild(icon);
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
