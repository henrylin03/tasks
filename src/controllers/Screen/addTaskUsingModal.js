import { createAppController } from "../App/createAppController";

const modal = document.querySelector(".new-task-modal");
const form = document.querySelector(".new-task-modal form");
const taskNameInput = document.querySelector("#new-task-name");
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

  app.addTask(taskNameInput.value);
};

const toggleUrgency = () => modal.classList.toggle("is-urgent");

export default addTaskUsingModal;
