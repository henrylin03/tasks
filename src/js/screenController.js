import { createAppController } from "./appController";

const app = createAppController();

const createScreenController = () => {
  // select required dom elements here
  const addProjectBtn = document.querySelector("#add-project");

  // add required event listeners
  addProjectBtn.addEventListener("click", addProject);

  // add anything that needs to be run

  return;
};

const addProject = () => {
  const dialog = document.querySelector("dialog.new-project");
  const form = dialog.querySelector("form");
  const input = form.querySelector("#new-project-name");
  const cancelBtn = form.querySelector(".cancel-btn");

  // event listeners and handlers
  function handleSubmit(e) {
    e.preventDefault();
    app.addProject(input.value);
    form.reset();
    dialog.close();
    displayProjects();
  }

  form.addEventListener("submit", handleSubmit);
  cancelBtn.addEventListener("click", () => dialog.close());

  // run
  dialog.showModal();
};

const displayProjects = () => {
  const navProjectsContainer = document.querySelector(
    ".current-projects-container"
  );

  const projectNamesArray = app.getProjectNames();

  alert(projectNamesArray);
};

export { createScreenController };

// ? likely will need a factory to create inbox page and a "project" page that then gets populated via js
//todo: fix errors for project name existing - make those not as thrown errors but actually in the DOM
