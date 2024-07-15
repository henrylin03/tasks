import { createAppController } from "../../App/createAppController";
import confirmProjectDeletion from "../modals/deletion/confirmProjectDeletion";
import handleNavLinkClicks from "./handleNavLinkClicks";

const app = createAppController();
const navProjectsContainer = document.querySelector(
  ".current-projects-container",
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

  const linkAnchor = document.createElement("a");
  const iconContainer = document.createElement("figure");
  iconContainer.classList.add("icon-container");
  const projectNameText = document.createElement("p");
  projectNameText.textContent = projectName;
  const binBtn = document.createElement("button");
  binBtn.type = "button";
  binBtn.classList.add("delete-icon-btn");

  iconContainer.classList.add("project-icon");

  // add event listeners
  linkAnchor.addEventListener("mousedown", () =>
    handleNavLinkClicks(projectId),
  );
  binBtn.addEventListener("mousedown", (e) => {
    e.stopPropagation();
    confirmProjectDeletion(project);
  });

  // append to DOM
  linkAnchor.appendChild(iconContainer);
  linkAnchor.appendChild(projectNameText);
  linkAnchor.appendChild(binBtn);
  linkDiv.appendChild(linkAnchor);
  navProjectsContainer.appendChild(linkDiv);
};

export default displayProjectsInNav;
