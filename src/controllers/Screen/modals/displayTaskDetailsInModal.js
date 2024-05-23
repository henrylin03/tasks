import {
  generateProjectOptions,
  toggleUrgency,
  closeModal,
} from "./taskModalsHandlers";
import modifyTaskInModal from "./modifyTaskInModal";

const displayTaskDetailsInModal = (taskObject) => {
  const taskDetailsModal = generateTaskDetailsModal(taskObject);

  taskDetailsModal.addEventListener("keydown", (e) => {
    if (e.key === "Enter") modifyTaskInModal(taskObject, taskDetailsModal);
    if (e.key === "Escape") closeModal(taskDetailsModal);
  });

  taskDetailsModal.showModal();
};

const generateTaskDetailsModal = (taskObject) => {
  const modal = document.createElement("dialog");
  modal.classList.add("task-details-modal");
  if (taskObject.getUrgency()) modal.classList.add("is-urgent");

  const form = document.createElement("form");

  // checkbox (left-side of modal)
  const checkboxContainer = document.createElement("div");
  checkboxContainer.classList.add("checkbox-container");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.classList.add("checkbox");
  checkbox.checked = taskObject.getCompleted();

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
  taskName.value = taskObject.getName();

  const toggleUrgentBtn = document.createElement("button");
  toggleUrgentBtn.type = "button";
  toggleUrgentBtn.classList.add("toggle-urgent-btn");
  toggleUrgentBtn.addEventListener("mousedown", () => toggleUrgency(modal));

  const taskDescription = document.createElement("textarea");
  taskDescription.setAttribute("id", "task-description-in-modal");
  taskDescription.setAttribute("cols", "30");
  taskDescription.setAttribute("rows", "5");
  taskDescription.setAttribute("placeholder", "Description");
  taskDescription.value = taskObject.getDescription();

  const dueDateAndProjectContainer = document.createElement("div");
  dueDateAndProjectContainer.classList.add("input-container");
  const dueDate = document.createElement("input");
  dueDate.input = "text";
  dueDate.setAttribute("id", "task-due-date-in-modal");
  dueDate.setAttribute("placeholder", "Due date");
  dueDate.setAttribute("onfocus", "(this.type='date')");
  dueDate.setAttribute("onblur", "(this.type='text')");
  dueDate.value = taskObject.getDueDate();

  const projects = document.createElement("select");
  projects.setAttribute("id", "task-project-in-modal");
  generateProjectOptions(projects);
  projects.value = taskObject.getProjectId();

  const buttons = document.createElement("div");
  buttons.classList.add("btn-group");
  const saveBtn = document.createElement("button");
  saveBtn.type = "button";
  saveBtn.classList.add("confirm-btn");
  saveBtn.classList.add("save-changes-to-task");
  saveBtn.textContent = "Save";
  saveBtn.addEventListener("mousedown", () =>
    modifyTaskInModal(taskObject, modal)
  );

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

export default displayTaskDetailsInModal;
