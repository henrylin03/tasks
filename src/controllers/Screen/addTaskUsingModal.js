import { createAppController } from "../App/createAppController";

const modal = document.querySelector(".new-task-modal");
const form = document.querySelector(".new-task-modal form");
const taskNameInput = document.querySelector("#new-task-name");
const descriptionInput = document.querySelector("#new-task-description");
const dueDateInput = document.querySelector("#new-task-due-date");
const taggedProject = document.querySelector("#project-of-new-task");
const urgentBtn = document.querySelector(".toggle-urgent-btn");
const cancelBtn = document.querySelector(".new-task-modal .cancel-btn");

const addTaskUsingModal = () => {
  urgentBtn.addEventListener("mousedown", toggleUrgency);
  form.addEventListener("submit", handleSubmit);
  cancelBtn.addEventListener("click", () => modal.close());

  modal.showModal();
  return;
};

const handleSubmit = (e) => {
  const app = createAppController();

  e.preventDefault();

  // capture all properties required to create task from form
  //   const newTaskObjectFromForm = {
  //     name: taskNameInput.value,
  //     description:
  //   };

  //   app.addTask(taskNameInput.value);
};

const toggleUrgency = () => modal.classList.toggle("is-urgent");

export default addTaskUsingModal;
