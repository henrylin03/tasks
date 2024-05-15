import { createAppController } from "./appController";

const app = createAppController();

const createScreenController = () => {
  // select required dom elements here
  const addProjectBtn = document.querySelector("#add-project");

  // add required event listeners
  addProjectBtn.addEventListener("click", addProject);

  // add anything that needs to be run
  displayProjectsInNav();

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
    displayProjectsInNav();
  }

  form.addEventListener("submit", handleSubmit);
  cancelBtn.addEventListener("click", () => dialog.close());

  // run
  dialog.showModal();
};

const displayProjectsInNav = () => {
  const navProjectsContainer = document.querySelector(
    ".current-projects-container"
  );

  const projectsArray = app
    .getProjects()
    .map((p) => createProjectLinkInNav(p.name));

  navProjectsContainer.replaceChildren(...projectsArray);

  function createProjectLinkInNav(projectName) {
    const linkDiv = document.createElement("div");
    linkDiv.classList.add("link");
    const linkAnchor = document.createElement("a");
    linkAnchor.setAttribute("href", "#");
    const PROJECT_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-list">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 6l11 0" />
                <path d="M9 12l11 0" />
                <path d="M9 18l11 0" />
                <path d="M5 6l0 .01" />
                <path d="M5 12l0 .01" />
                <path d="M5 18l0 .01" />
              </svg>`;
    const projectNameText = document.createElement("p");
    projectNameText.textContent = projectName;

    linkAnchor.innerHTML = PROJECT_SVG;
    linkAnchor.appendChild(projectNameText);
    linkDiv.appendChild(linkAnchor);

    return linkDiv;
  }
};

export { createScreenController };

// ? likely will need a factory to create inbox page and a "project" page that then gets populated via js
//todo: fix errors for project name existing - make those not as thrown errors but actually in the DOM. toggle using js and css class for error (have a look at the signup form project you did)
