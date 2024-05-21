import { createAppController } from "../../App/createAppController";

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

  console.log(taskObject.viewDetails());

  // gather all required details for the app.updateTask() method
  const updatedTaskDetails = {
    id: taskObject.getId(),
    name: taskNameElement.value,
    description: taskDescriptionElement.value,
    dueDate: taskDueDateElement.value,
    urgency: modalElement.classList.contains("is-urgent"),
    completed: taskCompletionCheckbox.checked,
    projectId: taskProjectElement.value,
  };

  console.log(updatedTaskDetails);
  // app.updateTask(updatedTaskDetails)

  // call the app.updateTask() method

  // redisplay the current project page (essentially refreshing the current page) - in the future, we might want to open the page that the task moved to, assuming the task has chagned projects
};

export default modifyTask;
