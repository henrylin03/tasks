import { createAppController } from "../../App/createAppController";
import { closeModal } from "./taskModalsHandlers";
import displayPage from "../displayPage";

const modifyTask = (taskObject, modalElement) => {
  const app = createAppController();

  const taskNameElement = modalElement.querySelector("#task-name-in-modal");
  const taskDescriptionElement = modalElement.querySelector(
    "#task-description-in-modal"
  );
  const taskDueDateElement = modalElement.querySelector(
    "#task-due-date-in-modal"
  );
  const taskProjectElement = modalElement.querySelector(
    "#task-project-in-modal"
  );
  const taskCompletionCheckbox = modalElement.querySelector(".checkbox");

  const currentProjectId = taskObject.getProjectId();

  const updatedTaskDetails = {
    id: taskObject.getId(),
    name: taskNameElement.value,
    description: taskDescriptionElement.value,
    dueDate: taskDueDateElement.value,
    urgency: modalElement.classList.contains("is-urgent"),
    completed: taskCompletionCheckbox.checked,
    projectId: taskProjectElement.value,
  };

  app.updateTask(updatedTaskDetails);
  closeModal(modalElement);
  displayPage(currentProjectId);
};

export default modifyTask;
