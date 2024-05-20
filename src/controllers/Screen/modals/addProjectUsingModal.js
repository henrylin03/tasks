import { createAppController } from "../../App/createAppController";
import { clearFormErrorMessages, closeModal } from "./taskModalsHandlers";
import displayProjectsInNav from "../nav/displayProjectsInNav";

const dialog = document.querySelector(".new-project-modal");
const inputAndErrorMessageElements = document.querySelector(
  ".new-project-modal .top"
).children;
const form = document.querySelector(".new-project-modal form");
const input = document.querySelector("#new-project-name");
const cancelBtn = document.querySelector(".new-project-modal .cancel-btn");

const addProjectUsingModal = () => {
  form.addEventListener("submit", handleSubmit);
  input.addEventListener(
    "input",
    clearFormErrorMessages(inputAndErrorMessageElements)
  );
  cancelBtn.addEventListener("click", () => closeModal(dialog));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal(dialog);
  });

  // run
  dialog.showModal();
};

function handleSubmit(e) {
  e.preventDefault();

  const app = createAppController();

  // dealing with errors when project already exists
  try {
    app.addProject(input.value);
    closeModal(dialog);
    displayProjectsInNav();
  } catch {
    [...inputAndErrorMessageElements].forEach((elem) =>
      elem.classList.add("error")
    );
  }
}

export default addProjectUsingModal;
