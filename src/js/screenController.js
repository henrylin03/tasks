const createScreenController = () => {
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

  let newProjectName = "";

  function handleSubmit(e) {
    e.preventDefault();
    newProjectName = input.value;
    alert(newProjectName);
  }

  form.addEventListener("submit", handleSubmit);

  cancelBtn.addEventListener("click", () => dialog.close());

  dialog.showModal();
  form.submit();
};

export { createScreenController };
