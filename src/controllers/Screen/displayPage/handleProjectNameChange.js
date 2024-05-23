import { createAppController } from "../../App/createAppController";

const app = createAppController();

export default function handleProjectNameChange(e) {
  const projectId = e.target.dataset.id;
  const projectObject = app.getProject(projectId);
  const oldName = projectObject.getName();

  e.target.addEventListener(
    "blur",
    (evt) => {
      const newName = evt.target.value;

      if (oldName.trim() === newName.trim() || !newName.trim())
        return (evt.target.value = oldName);

      console.log(oldName.trim() === newName.trim());
    },
    { once: true }
  );

  return;
}
