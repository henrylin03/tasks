import { createAppController } from "../../App/createAppController";

const toggleUrgency = (modalElement) =>
  modalElement.classList.toggle("is-urgent");

const generateProjectOptions = (projectDropdownElement) => {
  const app = createAppController();

  projectDropdownElement.replaceChildren();

  const projectNames = app.getProjects(false).map((p) => p.name);
  projectNames.forEach((p) => {
    const option = document.createElement("option");
    option.setAttribute("value", p);
    option.textContent = p;

    projectDropdownElement.appendChild(option);
  });
};

export { toggleUrgency, generateProjectOptions };
