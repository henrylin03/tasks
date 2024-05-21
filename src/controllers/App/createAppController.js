import { createProject, recreateProjectFromJSON } from "../../models/Project";
import { createTask, recreateTaskFromJSON } from "../../models/Task";
import {
  retrieveProjectById,
  retrieveProjects,
  retrieveTaskById,
} from "../../helpers/localStorageHelpers";

const createAppController = () => {
  const addTask = ({ name, description, dueDate, urgency, projectId }) => {
    if (!name) return;
    const newTask = createTask(name);
    newTask.setDescription(description);
    newTask.setDueDate(dueDate);
    newTask.setUrgency(urgency);
    newTask.setProjectId(projectId);
    newTask.store();

    const project = newTask.getProjectObject();
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
    return projects
      .map((project) => recreateProjectFromJSON(project))
      .sort((projectA, projectB) => projectA.getId() - projectB.getId());
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
    const task = getTask(id);
    // const projectHasChanged = projectName !== task.getName();
    const projectHasChanged = "";

    if (projectHasChanged) return;

    // #1.1: if project has changed, then task's id needs to be popped from the current project's tasks, and added to new project's tasks list
    // #1.2 then, both projects needs to be pushed back to localStorage

    // otherwise, no need to even touch the project!

    task.setName(name);
    task.setDescription(description);
    task.setDueDate(dueDate);
    task.setUrgency(urgency);
    task.setCompletion(completed);

    task.store();
  };

  // run
  if (localStorage.length === 0) createProject("Inbox").store();

  return { addTask, getTask, updateTask, addProject, getProjects, getProject };
};

export { createAppController };
