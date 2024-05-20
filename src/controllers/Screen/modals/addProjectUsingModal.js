import { createAppController } from "../../App/createAppController";
import { clearFormErrorMessages } from "./taskModalsHandlers";
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
  input.addEventListener("input", clearErrorMessage);
  cancelBtn.addEventListener("click", () => {
    clearFormErrorMessages(inputAndErrorMessageElements);
    dialog.close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      form.reset();
      clearFormErrorMessages(inputAndErrorMessageElements);
      dialog.close();
    }
  });

  // run
  dialog.showModal();
};

function handleSubmit(e) {
  e.preventDefault();
  const app = createAppController();

  // dealing with errors when project already exists
  try {
    const newProjectName = input.value;

    app.addProject(newProjectName);
    form.reset();
    clearFormErrorMessages(inputAndErrorMessageElements);
    dialog.close();
    displayProjectsInNav();
  } catch {
    [...inputAndErrorMessageElements].forEach((elem) =>
      elem.classList.add("error")
    );
  }
}

export default addProjectUsingModal;
