const modal = document.querySelector(".task-details-modal");

const viewAndEditTaskDetails = (e) => {
  modal.showModal();
};

export default viewAndEditTaskDetails;

//todo: fix issue when user tries to check the checkbox in preview mode, the task pops open
