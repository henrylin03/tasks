import { createAppController } from "./appController";

//todo: make svg imported - there is too much markup here...

const app = createAppController();
const svgs = {
  project: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-list">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 6l11 0" />
                <path d="M9 12l11 0" />
                <path d="M9 18l11 0" />
                <path d="M5 6l0 .01" />
                <path d="M5 12l0 .01" />
                <path d="M5 18l0 .01" />
              </svg>`,
  inbox: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-inbox">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
            <path d="M4 13h3l3 3h4l3 -3h3" />
          </svg>`,
};

const createScreenController = () => {
  // select required dom elements here
  const brandingInSidebar = document.querySelector(".branding");
  const inboxLinkInSidebar = document.querySelector("#inbox-link");
  const addProjectBtn = document.querySelector(".add-project");

  // add anything that needs to be run
  displayProjectsInNav();
  displayProjectPage("Inbox");

  // add required event listeners
  addProjectBtn.addEventListener("click", addProject);
  [brandingInSidebar, inboxLinkInSidebar].forEach((elem) =>
    elem.addEventListener("click", () => handleNavLinkClicks("Inbox"))
  );
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
    // create DOM elements from top down
    const linkDiv = document.createElement("div");
    linkDiv.classList.add("link");
    linkDiv.setAttribute("data-project", projectName);
    linkDiv.addEventListener("click", () => handleNavLinkClicks(projectName));

    const linkAnchor = document.createElement("a");
    const iconContainer = document.createElement("figure");
    iconContainer.classList.add("icon-container");
    const projectNameText = document.createElement("p");
    projectNameText.textContent = projectName;

    iconContainer.innerHTML = svgs.project;
    linkAnchor.appendChild(iconContainer);
    linkAnchor.appendChild(projectNameText);
    linkDiv.appendChild(linkAnchor);

    return linkDiv;
  }
};

const displayProjectPage = (projectName) => {
  const headerLeftContainer = document.querySelector("header .left");
  const pageIcon = headerLeftContainer.querySelector("figure");
  const pageTitle = headerLeftContainer.querySelector(".page-title");
  const navbarLink = document.querySelector(`[data-project="${projectName}"]`);

  const project = app.getProject(projectName);

  navbarLink.classList.add("selected");
  pageTitle.textContent = project.name;
  pageIcon.innerHTML = projectName === "Inbox" ? svgs.inbox : svgs.project;

  // all tasks are populated (? might need to come back to this later on once i've built tasks in ui)

  return;
};

// event handler for clicking project links (including inbox) on the side
function handleNavLinkClicks(projectName) {
  const projectsIncludingInbox = document.querySelectorAll(
    "div[class=link], div.link.selected"
  );
  // clear all previously selected pages (link has '.selected' attached)
  projectsIncludingInbox.forEach((div) => div.classList.remove("selected"));
  displayProjectPage(projectName);
}

export { createScreenController };

//todo: fix errors for project name existing - make those not as thrown errors but actually in the DOM. toggle using js and css class for error (have a look at the signup form project you did)
