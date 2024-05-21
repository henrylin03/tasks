import { createProject, recreateProjectFromJSON } from "../../models/Project";
import { createTask, recreateTaskFromJSON } from "../../models/Task";
import {
  retrieveProjectById,
  retrieveProjectByName,
  retrieveProjects,
  retrieveTaskById,
} from "../../helpers/localStorageHelpers";

const createAppController = () => {
  const addTask = ({ name, description, dueDate, urgency, projectName }) => {
    if (!name) return;
    const newTask = createTask(name);
    newTask.setDescription(description);
    newTask.setDueDate(dueDate);
    newTask.setUrgency(urgency);
    newTask.store();

    const project = recreateProjectFromJSON(retrieveProjectByName(projectName));
    project.addTask(newTask.getId());
    project.store();
  };

  const addProject = (newProjectName) => {
    if (!newProjectName) return;
    const newProject = createProject();
    newProject.setName(newProjectName);
    newProject.store();
  };

  const getProjects = (excludeInbox = true) => {
    let projects = retrieveProjects();
    if (excludeInbox)
      projects = projects.filter((project) => project.name !== "Inbox");
    return projects.sort((projectA, projectB) => projectA.id - projectB.id);
  };

  const getProject = (projectId) =>
    recreateProjectFromJSON(retrieveProjectById(projectId));

  const getTask = (taskId) => recreateTaskFromJSON(retrieveTaskById(taskId));

  const updateTask = ({
    id,
    name,
    description,
    dueDate,
    urgency,
    completed,
    projectName,
  }) => {
    const taskBeforeChanging = getTask(id);

    const projectHasChanged = () => {};
    // get the id for task (we might not need this but probably should just in case)
    // #1.1: if project has changed, then task's id needs to be popped from the current project's tasks, and added to new project's tasks list
    // #1.2 then, both projects needs to be pushed back to localStorage
    // #2: remove task from localStorage
    // #3: re-store task from localStorage
  };

  // run
  if (localStorage.length === 0) createProject("Inbox").store();

  return { addTask, getTask, updateTask, addProject, getProjects, getProject };
};

export { createAppController };
