import { createAppController } from "../../App/createAppController";
import { closeModal } from "./modalHandlers";
import displayProjectsInNav from "../nav/displayProjectsInNav";
import handleNavLinkClicks from "../nav/handleNavLinkClicks";

const modal = document.querySelector(".new-project-modal");
const form = document.querySelector(".new-project-modal form");
const input = document.querySelector("#new-project-name");
const cancelBtn = document.querySelector(".new-project-modal .cancel-btn");

const addProjectUsingModal = () => {
  form.addEventListener("submit", handleSubmit);
  cancelBtn.addEventListener("mousedown", () => closeModal(modal));
  modal.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal(modal);
  });

  // run
  modal.showModal();
  focusOnInput();
};

const handleSubmit = (e) => {
  e.preventDefault();

  const app = createAppController();

  app.addProject(input.value);
  closeModal(modal);
  displayProjectsInNav();
  displayNewlyCreatedProjectPage();
};

const focusOnInput = () => setTimeout(() => input.focus(), 0.1);

const displayNewlyCreatedProjectPage = () => {
  return;
};

export default addProjectUsingModal;
