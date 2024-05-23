import { createAppController } from "../../App/createAppController";
import handleNavLinkClicks from "./handleNavLinkClicks";

const app = createAppController();
const navProjectsContainer = document.querySelector(
  ".current-projects-container"
);

const displayProjectsInNav = () => {
  navProjectsContainer.replaceChildren();

  const storedProjectObjects = app.getProjects();
  storedProjectObjects.forEach((p) => createProjectLinkInNav(p));
};

const createProjectLinkInNav = (project) => {
  const projectName = project.getName();
  const projectId = project.getId();

  const linkDiv = document.createElement("div");
  linkDiv.classList.add("link");
  linkDiv.setAttribute("data-name", projectName);
  linkDiv.setAttribute("data-id", projectId);

  linkDiv.addEventListener("click", () => handleNavLinkClicks(projectId));

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

  navProjectsContainer.appendChild(linkDiv);
};

export default displayProjectsInNav;
