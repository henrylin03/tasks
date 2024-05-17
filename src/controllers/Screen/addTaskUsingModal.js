import { createAppController } from "../App/createAppController";
import displayPage from "./displayPage";

const app = createAppController();

const modal = document.querySelector(".new-task-modal");
const form = document.querySelector(".new-task-modal form");
const taskNameInput = document.querySelector("#new-task-name");
const descriptionInput = document.querySelector("#new-task-description");
const dueDateInput = document.querySelector("#new-task-due-date");
const projectDropdown = document.querySelector("#project-of-new-task");
const urgentBtn = document.querySelector(".toggle-urgent-btn");
const cancelBtn = document.querySelector(".new-task-modal .cancel-btn");

const addTaskUsingModal = () => {
  urgentBtn.addEventListener("mousedown", toggleUrgency);
  form.addEventListener("submit", handleSubmit);
  cancelBtn.addEventListener("click", () => modal.close());

  // run
  modal.showModal();
  generateProjectOptions();
};

const handleSubmit = (e) => {
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
  displayPage(newTaskObject.projectName);
};

const toggleUrgency = () => modal.classList.toggle("is-urgent");

const generateProjectOptions = () => {
  const projectNames = app.getProjects().map((p) => p.name);

  projectNames.forEach((p) => {
    const option = document.createElement("option");
    option.setAttribute("value", p);
    option.textContent = p;

    projectDropdown.appendChild(option);
  });
};

export default addTaskUsingModal;
