import { createAppController } from "../../App/createAppController";
import displayPage from "../displayPage";
import {
  toggleUrgency,
  generateProjectOptions,
  closeModal,
} from "./taskModalsHandlers";

const app = createAppController();

const modal = document.querySelector(".new-task-modal");
const form = document.querySelector(".new-task-modal form");
const taskNameInput = document.querySelector("#new-task-name");
const descriptionInput = document.querySelector("#new-task-description");
const dueDateInput = document.querySelector("#new-task-due-date");
const projectDropdown = document.querySelector("#project-of-new-task");
const urgentBtn = document.querySelector(".new-task-modal .toggle-urgent-btn");
const cancelBtn = document.querySelector(".new-task-modal .cancel-btn");

const addTaskUsingModal = () => {
  urgentBtn.addEventListener("mousedown", () => toggleUrgency(modal));
  form.addEventListener("submit", handleSubmit);
  cancelBtn.addEventListener("click", () => closeModal(modal));
  modal.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal(modal);
  });

  // run
  modal.showModal();
  generateProjectOptions(projectDropdown);
};

const handleSubmit = (e) => {
  const currentPageProjectName = document
    .querySelector(".link.selected")
    .getAttribute("data-project-name");

  e.preventDefault();

  // capture all properties required to create task from form
  const newTaskObject = {
    name: taskNameInput.value,
    description: descriptionInput.value,
    dueDate: dueDateInput.value,
    urgency: modal.classList.contains("is-urgent"),
    projectName: projectDropdown.value,
  };

  app.addTask(newTaskObject);
  form.reset();
  modal.close();
  displayPage(currentPageProjectName);
};

export default addTaskUsingModal;
