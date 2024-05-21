import { retrieveProjectNames } from "../../../helpers/localStorageHelpers";

const toggleUrgency = (modalElement) =>
  modalElement.classList.toggle("is-urgent");

const generateProjectOptions = (projectDropdownElement) => {
  projectDropdownElement.replaceChildren();

  const projectNames = retrieveProjectNames();
  projectNames.forEach((p) => {
    const option = document.createElement("option");
    option.setAttribute("value", p);
    option.textContent = p;

    projectDropdownElement.appendChild(option);
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
