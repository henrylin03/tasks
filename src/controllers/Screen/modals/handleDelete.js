import { createAppController } from "../../App/createAppController";
import displayPage from "../displayPage";
import { closeModal } from "./modalHandlers";

const handleDelete = (taskObject) => {
  const modal = generateModal(taskObject);
  modal.showModal();
};

const generateModal = (taskObject) => {
  const taskName = taskObject.getName();

  const modal = document.createElement("dialog");
  modal.classList.add("delete-modal");

  const form = document.createElement("form");

  const heading = document.createElement("h2");
  heading.textContent = `"${taskName}" will be permanently deleted.`;
  const paragraph = document.createElement("p");
  paragraph.textContent = "You won't be able to undo this action.";

  const buttons = document.createElement("div");
  buttons.classList.add("btn-group");
  const cancelBtn = document.createElement("button");
  cancelBtn.classList.add("cancel-btn");
  cancelBtn.type = "reset";
  cancelBtn.textContent = "Cancel";
  cancelBtn.addEventListener("mousedown", () => closeModal(modal));
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.type = "button";
  deleteBtn.textContent = "Delete task";
  deleteBtn.addEventListener("mousedown", () => {
    createAppController().deleteTask(taskObject);
    closeModal(modal);
    displayPage(taskObject.getProjectId());
  });

  buttons.appendChild(cancelBtn);
  buttons.appendChild(deleteBtn);
  form.appendChild(heading);
  form.appendChild(paragraph);
  form.appendChild(buttons);
  modal.appendChild(form);

  document.body.appendChild(modal);

  return modal;
};

export default handleDelete;
