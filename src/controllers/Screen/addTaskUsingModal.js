const modal = document.querySelector(".new-task-modal");
const urgentBtn = document.querySelector(".toggle-urgent-btn");

const addTaskUsingModal = () => {
  urgentBtn.addEventListener("mousedown", toggleUrgency);

  modal.showModal();
  return;
};

const toggleUrgency = () => modal.classList.toggle("is-urgent");
export default addTaskUsingModal;
