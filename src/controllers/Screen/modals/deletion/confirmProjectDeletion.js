import { createAppController } from "../../../App/createAppController";
import displayPage from "../../displayPage";
import displayProjectsInNav from "../../nav/displayProjectsInNav";
import { closeModal } from "../modalHandlers";

const app = createAppController();

export default function confirmProjectDeletion(projectObject) {
  generateModal(projectObject).showModal();
}

const generateModal = (projectObject) => {
  const name = projectObject.getName();

  const modal = document.createElement("dialog");
  modal.classList.add("delete-modal");
  const form = document.createElement("form");
  const heading = document.createElement("h2");
  heading.textContent = `"${name}" will be permanently deleted.`;
  form.appendChild(heading);
  const undoParagraph = document.createElement("p");
  undoParagraph.textContent = "You won't be able to undo this action.";
  form.appendChild(undoParagraph);
  const taskMoveParagraph = document.createElement("p");
  taskMoveParagraph.textContent = "All of its tasks will move into your Inbox.";
  form.appendChild(taskMoveParagraph);

  const buttons = document.createElement("div");
  buttons.classList.add("btn-group");
  const cancelBtn = document.createElement("button");
  cancelBtn.classList.add("cancel-btn");
  cancelBtn.type = "reset";
  cancelBtn.textContent = "Cancel";
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.type = "button";
  deleteBtn.textContent = `Delete project`;

  buttons.appendChild(cancelBtn);
  buttons.appendChild(deleteBtn);
  form.appendChild(buttons);
  modal.appendChild(form);
  document.body.appendChild(modal);

  // add event listeners
  deleteBtn.addEventListener("mousedown", () => {
    app.deleteProject(projectObject);
    displayProjectsInNav();
    closeModal(modal);
    displayPage("inbox");
  });

  cancelBtn.addEventListener("mousedown", () => closeModal(modal));

  return modal;
};
