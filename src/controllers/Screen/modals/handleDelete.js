import { createAppController } from "../../App/createAppController";
import displayPage from "../displayPage";
import { closeModal } from "./modalHandlers";

const app = createAppController();

const handleDelete = (taskOrProjectObj) => {
  const modal = generateModal(taskOrProjectObj);
  modal.showModal();
};

const generateModal = (obj) => {
  const id = obj.getId();
  const name = obj.getName();
  const type = Array.from(id)[0] === "T" ? "task" : "project";

  const modal = document.createElement("dialog");
  modal.classList.add("delete-modal");
  const form = document.createElement("form");
  const heading = document.createElement("h2");
  heading.textContent = `"${name}" will be permanently deleted.`;
  form.appendChild(heading);
  const paragraph = document.createElement("p");
  paragraph.textContent = "You won't be able to undo this action.";
  form.appendChild(paragraph);

  if (type === "project") {
    const taskMoveParagraph = document.createElement("p");
    taskMoveParagraph.textContent =
      "All of its tasks will move into your Inbox.";
    form.appendChild(taskMoveParagraph);
  }

  const buttons = document.createElement("div");
  buttons.classList.add("btn-group");
  const cancelBtn = document.createElement("button");
  cancelBtn.classList.add("cancel-btn");
  cancelBtn.type = "reset";
  cancelBtn.textContent = "Cancel";
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.type = "button";
  deleteBtn.textContent = `Delete ${type}`;

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

export default handleDelete;
