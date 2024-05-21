import { createAppController } from "../../App/createAppController";
import handleNavLinkClicks from "./handleNavLinkClicks";

const displayProjectsInNav = () => {
  const app = createAppController();
  const navProjectsContainer = document.querySelector(
    ".current-projects-container"
  );
  const projectsArray = app.getProjects().map((p) => createProjectLinkInNav(p));

  navProjectsContainer.replaceChildren(...projectsArray);
};

const createProjectLinkInNav = (project) => {
  const projectName = project.name;
  const projectId = project.id;

  const linkDiv = document.createElement("div");
  linkDiv.classList.add("link");
  linkDiv.setAttribute("data-project-name", projectName);
  linkDiv.setAttribute("data-project-id", projectId);

  linkDiv.addEventListener("click", () => handleNavLinkClicks(projectName));

  const linkAnchor = document.createElement("a");
  const iconContainer = document.createElement("figure");
  iconContainer.classList.add("icon-container");
  const projectNameText = document.createElement("p");
  projectNameText.textContent = projectName;

  iconContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none"
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
  linkAnchor.appendChild(iconContainer);
  linkAnchor.appendChild(projectNameText);
  linkDiv.appendChild(linkAnchor);

  return linkDiv;
};

export default displayProjectsInNav;
