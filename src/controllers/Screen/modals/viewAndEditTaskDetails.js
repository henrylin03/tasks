const modal = document.querySelector(".task-details-modal");

const viewAndEditTaskDetails = (e) => {
  e.stopPropagation();

  modal.showModal();
};

export default viewAndEditTaskDetails;
