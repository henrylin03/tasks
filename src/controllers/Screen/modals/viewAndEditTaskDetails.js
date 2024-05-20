import {
  generateProjectOptions,
  toggleUrgency,
  closeModal,
} from "./taskModalsHandlers";

const viewAndEditTaskDetails = () => {
  const taskDetailsModal = generateTaskDetailsModal();

  taskDetailsModal.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal(taskDetailsModal);
  });

  taskDetailsModal.showModal();
};

const generateTaskDetailsModal = () => {
  const modal = document.createElement("dialog");
  modal.classList.add("task-details-modal");

  const form = document.createElement("form");

  // checkbox (left-side of modal)
  const checkboxContainer = document.createElement("div");
  checkboxContainer.classList.add("checkbox-container");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.classList.add("checkbox");

  // task details (right-side of modal)
  const taskDetailsDiv = document.createElement("div");
  taskDetailsDiv.classList.add("task-details-fields");

  const taskNameAndUrgencyWrapper = document.createElement("div");
  taskNameAndUrgencyWrapper.classList.add("task-name-input-wrapper");
  const taskName = document.createElement("input");
  taskName.setAttribute("type", "text");
  taskName.setAttribute("id", "task-name-in-modal");
  taskName.setAttribute("placeholder", "Task name");
  taskName.required = true;
  const toggleUrgentBtn = document.createElement("button");
  toggleUrgentBtn.setAttribute("type", "button");
  toggleUrgentBtn.classList.add("toggle-urgent-btn");
  toggleUrgentBtn.addEventListener("mousedown", () => toggleUrgency(modal));

  const taskDescription = document.createElement("textarea");
  taskDescription.setAttribute("id", "task-description-in-modal");
  taskDescription.setAttribute("cols", "30");
  taskDescription.setAttribute("rows", "5");
  taskDescription.setAttribute("placeholder", "Description");

  const dueDateAndProjectContainer = document.createElement("div");
  dueDateAndProjectContainer.classList.add("input-container");
  const dueDate = document.createElement("input");
  dueDate.setAttribute("input", "text");
  dueDate.setAttribute("id", "task-due-date-in-modal");
  dueDate.setAttribute("placeholder", "Due date");
  dueDate.setAttribute("onfocus", "(this.type='date')");
  dueDate.setAttribute("onblur", "(this.type='text')");
  const projects = document.createElement("select");
  projects.setAttribute("id", "task-project-in-modal");
  generateProjectOptions(projects);

  const buttons = document.createElement("div");
  buttons.classList.add("btn-group");
  const saveBtn = document.createElement("button");
  saveBtn.type = "submit";
  saveBtn.classList.add("confirm-btn");
  saveBtn.classList.add("save-changes-to-task");
  saveBtn.textContent = "Save";
  const cancelBtn = document.createElement("button");
  cancelBtn.type = "reset";
  cancelBtn.classList.add("cancel-btn");
  cancelBtn.textContent = "Cancel";
  cancelBtn.addEventListener("mousedown", () => closeModal(modal));

  checkboxContainer.appendChild(checkbox);
  taskNameAndUrgencyWrapper.appendChild(taskName);
  taskNameAndUrgencyWrapper.appendChild(toggleUrgentBtn);
  dueDateAndProjectContainer.appendChild(dueDate);
  dueDateAndProjectContainer.appendChild(projects);
  buttons.appendChild(saveBtn);
  buttons.appendChild(cancelBtn);

  taskDetailsDiv.appendChild(taskNameAndUrgencyWrapper);
  taskDetailsDiv.appendChild(taskDescription);
  taskDetailsDiv.appendChild(dueDateAndProjectContainer);
  taskDetailsDiv.appendChild(buttons);

  form.appendChild(checkboxContainer);
  form.appendChild(taskDetailsDiv);

  modal.appendChild(form);

  document.body.appendChild(modal);

  return modal;
};

export default viewAndEditTaskDetails;

//todo: fix issue when user tries to check the checkbox in preview mode, the task pops open
