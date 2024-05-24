import { createAppController } from "../../../App/createAppController";
import displayPage from "../../displayPage";
import { closeModal } from "../modalHandlers";

const app = createAppController();

const confirmTaskDeletion = (taskObject) => {
  const modal = generateModal(taskObject);
  modal.showModal();
};

const generateModal = (taskObject) => {
  const name = taskObject.getName();

  const modal = document.createElement("dialog");
  modal.classList.add("delete-modal");
  const form = document.createElement("form");
  const heading = document.createElement("h2");
  heading.textContent = `"${name}" will be permanently deleted.`;
  form.appendChild(heading);
  const paragraph = document.createElement("p");
  paragraph.textContent = "You won't be able to undo this action.";
  form.appendChild(paragraph);

  // if (type === "project") {
  //   const taskMoveParagraph = document.createElement("p");
  //   taskMoveParagraph.textContent =
  //     "All of its tasks will move into your Inbox.";
  //   form.appendChild(taskMoveParagraph);
  // }

  const buttons = document.createElement("div");
  buttons.classList.add("btn-group");
  const cancelBtn = document.createElement("button");
  cancelBtn.classList.add("cancel-btn");
  cancelBtn.type = "reset";
  cancelBtn.textContent = "Cancel";
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.type = "button";
  deleteBtn.textContent = `Delete task`;

  buttons.appendChild(cancelBtn);
  buttons.appendChild(deleteBtn);
  form.appendChild(buttons);
  modal.appendChild(form);
  document.body.appendChild(modal);

  // add event listeners
  deleteBtn.addEventListener("mousedown", () => {
    app.deleteTask(taskObject);
    closeModal(modal);
    displayPage(taskObject.getProjectId());
  });

  cancelBtn.addEventListener("mousedown", () => closeModal(modal));

  return modal;
};

export default confirmTaskDeletion;
