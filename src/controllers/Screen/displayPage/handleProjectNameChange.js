import addSuffixToDuplicateProjectName from "../../../helpers/addSuffixToDuplicateProjectNames";
import { createAppController } from "../../App/createAppController";

const app = createAppController();

export default function handleProjectNameChange(e) {
  const projectId = e.target.dataset.id;
  const projectObject = app.getProject(projectId);
  const oldName = projectObject.getName();

  e.target.addEventListener(
    "blur",
    (evt) => {
      let newName = evt.target.value;

      if (oldName.trim() === newName.trim() || !newName.trim())
        return (evt.target.value = oldName);

      newName = addSuffixToDuplicateProjectName(newName);
      evt.target.value = newName;

      app.renameProject(projectObject, newName);
    },
    { once: true }
  );
}
