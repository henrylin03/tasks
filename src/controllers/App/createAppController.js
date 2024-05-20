import { createProject, recreateProjectFromJSON } from "../../models/Project";
import { createTask } from "../../models/Task";
import { retrieveProjectByName } from "../../helpers/localStorageHelpers";
// import {
//   retrieveAllProjects,
//   retrieveProject,
// } from "../../helpers/localStorageHelpers";

const createAppController = () => {
  const addTask = ({ name, description, dueDate, urgency, projectName }) => {
    if (!name) return;
    const newTask = createTask(name);
    newTask.setDescription(description);
    newTask.setDueDate(dueDate);
    newTask.setUrgency(urgency);

    const project = recreateProjectFromJSON(retrieveProjectByName(projectName));
    project.addTask(newTask);
    project.store();
  };

  const addProject = (newProjectName) => {
    if (!newProjectName) return;
    createProject(newProjectName).store();
  };

  const getProjects = (excludeInbox = true) => {
    // let retrievedProjects = retrieveAllProjects();

    // if (excludeInbox)
    //   retrievedProjects = retrievedProjects.filter(
    //     (project) => project.name !== "Inbox"
    //   );

    // return retrievedProjects.sort(
    //   (projectA, projectB) => projectA.id - projectB.id
    // );
    return;
  };

  const getProject = (projectName) =>
    recreateProjectFromJSON(retrieveProject(projectName));

  // run
  if (localStorage.length === 0) createProject("Inbox").store();

  return { addTask, addProject, getProjects, getProject };
};

export { createAppController };

// TODO: DO NOT STORE TASKS UNLESS VIEWDETAILS HAVE BEEN CALLED ON IT. BECAUSE THEN IT LIKELY MEANS THAT IT WASN'T RECONSTRUCTED FIRST BEFORE MANIPULATION AND THUS INVALID.
