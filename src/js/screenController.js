import { createAppController } from "./appController";

const app = createAppController();

const createScreenController = () => {
  // select required dom elements here

  // add required event listeners

  const sidebar = document.querySelector(".sidebar");
  const projectsLinksContainer = document.querySelector(".projects");

  const addProjectBtn = document.querySelector("#add-project");

  addProjectBtn.addEventListener("click", addProject);

  return;
};

const addProject = () => {
  const dialog = document.querySelector("dialog.new-project");
  const form = dialog.querySelector("form");
  const input = form.querySelector("#new-project-name");
  const cancelBtn = form.querySelector(".cancel-btn");

  function handleSubmit(e) {
    e.preventDefault();
    app.addProject(input.value);
    form.reset();
    dialog.close();
  }

  form.addEventListener("submit", handleSubmit);

  cancelBtn.addEventListener("click", () => dialog.close());

  dialog.showModal();
  form.submit();
};

export { createScreenController };
