const handleDelete = (e) => {
  e.stopPropagation();

  console.log("bin btn clicked");
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
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.type = "button";
  deleteBtn.textContent = "Delete task";

  buttons.appendChild(cancelBtn);
  buttons.appendChild(deleteBtn);
  form.appendChild(heading);
  form.appendChild(paragraph);
  form.appendChild(buttons);
  modal.appendChild(form);

  return modal;
};

export default handleDelete;
