const createDOMController = () => {
  const sidebar = document.querySelector(".sidebar");
  const projectsLinksContainer = document.querySelector(".projects");

  const addProjectBtn = document.querySelector("#add-project");

  addProjectBtn.addEventListener("click", addProject);

  return;
};

const addProject = () => {
  alert("adding project");
};

export default createDOMController;
