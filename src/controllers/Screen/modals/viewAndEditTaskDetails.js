const modal = document.querySelector(".task-details-modal");
const cancelBtn = document.querySelector(".task-details-modal .cancel-btn");

const viewAndEditTaskDetails = (e) => {
  cancelBtn.addEventListener("click", () => modal.close());

  modal.showModal();
};

export default viewAndEditTaskDetails;

//todo: fix issue when user tries to check the checkbox in preview mode, the task pops open
