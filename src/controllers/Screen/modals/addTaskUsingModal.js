import { createAppController } from "../../App/createAppController";
import displayProjectsInNav from "../nav/displayProjectsInNav";
import handleNavLinkClicks from "../nav/handleNavLinkClicks";
import {
  toggleUrgency,
  generateProjectOptions,
  closeModal,
} from "./modalHandlers";

const app = createAppController();

const modal = document.querySelector(".new-task-modal");
const form = document.querySelector(".new-task-modal form");
const taskNameInput = document.querySelector("#new-task-name");
const descriptionInput = document.querySelector("#new-task-description");
const dueDateInput = document.querySelector("#new-task-due-date");
const projectDropdown = document.querySelector("#project-of-new-task");
const urgentBtn = document.querySelector(".new-task-modal .toggle-urgent-btn");
const cancelBtn = document.querySelector(".new-task-modal .cancel-btn");

const addTaskUsingModal = (currentPageProjectId) => {
  urgentBtn.addEventListener("mousedown", () => toggleUrgency(modal));
  form.addEventListener(
    "submit",
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      handleSubmit();
    },
    { once: true },
  );
  cancelBtn.addEventListener("click", () => closeModal(modal));
  modal.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal(modal);
  });

  // run
  modal.showModal();
  generateProjectOptions(projectDropdown);
  projectDropdown.value = currentPageProjectId;
  setTimeout(() => taskNameInput.focus(), 0.1);
};

const handleSubmit = () => {
  if (!taskNameInput.value) return;

  const newTaskObject = {
    name: taskNameInput.value,
    description: descriptionInput.value,
    dueDate: dueDateInput.value,
    urgency: modal.classList.contains("is-urgent"),
    projectId: projectDropdown.value,
  };

  app.addTask(newTaskObject);
  form.reset();
  modal.close();
  displayProjectsInNav();
  console.log(newTaskObject);
  console.log(newTaskObject.projectId);
  handleNavLinkClicks(newTaskObject.projectId);
};

export default addTaskUsingModal;
