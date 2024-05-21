// CHECKS
const projectExists = (projectName) =>
  retrieveProjectNames().includes(projectName);

// RETRIEVERS
const retrieveProjects = () => {
  try {
    return Object.values(JSON.parse(localStorage.getItem("projects")));
  } catch (TypeError) {
    return [];
  }
};

const retrieveProjectNames = () => {
  const storedProjectsArray = retrieveProjects();
  return storedProjectsArray.map((project) => project.name);
};

const retrieveProjectById = (projectId) =>
  retrieveProjects().find((project) => project.id === projectId);

const retrieveTasks = () => {
  try {
    return Object.values(JSON.parse(localStorage.getItem("tasks")));
  } catch (TypeError) {
    return [];
  }
};
const retrieveTaskById = (taskId) =>
  retrieveTasks().find((task) => task.id === taskId);

export {
  projectExists,
  retrieveProjectById,
  retrieveProjects,
  retrieveProjectNames,
  retrieveTasks,
  retrieveTaskById,
};
