// import {
//   retrieveProjectById,
//   retrieveProjectIds,
// } from "../../../helpers/localStorageHelpers";

import { createAppController } from "../../App/createAppController";

const toggleUrgency = (modalElement) =>
  modalElement.classList.toggle("is-urgent");

const generateProjectOptions = (projectDropdownElement) => {
  const app = createAppController();

  // clear all options
  projectDropdownElement.replaceChildren();

  const storedProjects = app.getProjects(false);

  storedProjects.forEach((project) => {
    const projectName = project.getName();
    const projectId = project.getId();

    const optionElement = document.createElement("option");
    optionElement.setAttribute("value", projectName);
    optionElement.setAttribute("data-projectId", projectId);
    optionElement.textContent = projectName;

    projectDropdownElement.appendChild(optionElement);
  });
};

const clearFormErrorMessages = (inputElements) =>
  [...inputElements].forEach((elem) => elem.classList.remove("error"));

const closeModal = (modalElement) => {
  const form = modalElement.querySelector("form");

  const isTaskDetailsModal =
    modalElement.classList.contains("task-details-modal");
  const isNewProjectModal =
    modalElement.classList.contains("new-project-modal");

  if (isNewProjectModal) clearFormErrorMessages(modalElement.children);
  if (isTaskDetailsModal) document.body.removeChild(modalElement);

  form.reset();
  modalElement.close();
};

export {
  toggleUrgency,
  generateProjectOptions,
  clearFormErrorMessages,
  closeModal,
};
