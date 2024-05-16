const modal = document.querySelector(".new-task-modal");
const form = document.querySelector(".new-task-modal form");
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
  e.preventDefault();
};

const toggleUrgency = () => modal.classList.toggle("is-urgent");

export default addTaskUsingModal;
