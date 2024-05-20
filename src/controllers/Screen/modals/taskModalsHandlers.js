import { createAppController } from "../../App/createAppController";

const toggleUrgency = (modalElement) =>
  modalElement.classList.toggle("is-urgent");

const generateProjectOptions = (projectDropdownElement) => {
  const app = createAppController();

  projectDropdownElement.replaceChildren();

  // false argument means we are not excluding 'Inbox' project here
  const projectNames = app.getProjects(false).map((p) => p.name);
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
  const isTaskDetailsModal =
    modalElement.classList.contains("task-details-modal");
  modalElement.close();
};

export {
  toggleUrgency,
  generateProjectOptions,
  clearFormErrorMessages,
  closeModal,
};
