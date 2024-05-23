import { createAppController } from "../../App/createAppController";

const toggleUrgency = (modalElement) =>
  modalElement.classList.toggle("is-urgent");

const generateProjectOptions = (projectDropdownElement) => {
  const app = createAppController();

  // clear all options
  projectDropdownElement.replaceChildren();

  const storedProjects = app.getProjects(false);

  storedProjects.forEach((project) => {
    const optionElement = document.createElement("option");
    optionElement.setAttribute("value", project.getId());
    optionElement.textContent = project.getName();

    projectDropdownElement.appendChild(optionElement);
  });
};

const closeModal = (modalElement) => {
  const form = modalElement.querySelector("form");
  const isTaskDetailsModal =
    modalElement.classList.contains("task-details-modal");

  if (isTaskDetailsModal) document.body.removeChild(modalElement);

  form.reset();
  modalElement.close();
};

export { toggleUrgency, generateProjectOptions, closeModal };
