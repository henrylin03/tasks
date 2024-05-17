import { createAppController } from "../App/createAppController";
import displayProjectsInNav from "./displayProjectsInNav";
import displayPage from "./displayPage";

const dialog = document.querySelector(".new-project-modal");
const InputAndErrorMessageElements = document.querySelector(
  ".new-project-modal .top"
).children;
const form = document.querySelector(".new-project-modal form");
const input = document.querySelector("#new-project-name");
const cancelBtn = document.querySelector(".new-project-modal .cancel-btn");

const addProjectUsingModal = () => {
  form.addEventListener("submit", handleSubmit);
  input.addEventListener("input", clearErrorMessage);
  cancelBtn.addEventListener("click", () => {
    clearErrorMessage();
    dialog.close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      form.reset();
      clearErrorMessage();
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
    clearErrorMessage();
    dialog.close();
    displayProjectsInNav();
    displayPage(newProjectName);
  } catch {
    [...InputAndErrorMessageElements].forEach((elem) =>
      elem.classList.add("error")
    );
  }
}

function clearErrorMessage() {
  [...InputAndErrorMessageElements].forEach((elem) =>
    elem.classList.remove("error")
  );
}

export default addProjectUsingModal;
