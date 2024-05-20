import { generateProjectOptions, toggleUrgency } from "./taskModalsHandlers";

const modal = document.querySelector(".task-details-modal");
const urgentBtn = document.querySelector(
  ".task-details-modal .toggle-urgent-btn"
);
const projectDropdown = document.querySelector("#task-project-in-modal");
const cancelBtn = document.querySelector(".task-details-modal .cancel-btn");

const viewAndEditTaskDetails = (e) => {
  urgentBtn.addEventListener("mousedown", () => toggleUrgency(modal));
  cancelBtn.addEventListener("click", () => modal.close());

  // run
  modal.showModal();
  generateProjectOptions(projectDropdown);
};

export default viewAndEditTaskDetails;

//todo: fix issue when user tries to check the checkbox in preview mode, the task pops open
