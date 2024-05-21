// CHECKS
const projectExists = (projectName) =>
  retrieveAllProjectNames().includes(projectName);

// RETRIEVERS
const retrieveProjects = () => {
  try {
    return Object.values(JSON.parse(localStorage.getItem("projects")));
  } catch (TypeError) {
    return [];
  }
};
const retrieveAllProjectNames = () => {
  const storedProjectsArray = retrieveProjects();
  return storedProjectsArray.map((project) => project.name);
};
//! project names must be unique
const retrieveProjectByName = (projectName) => {
  const storedProjectsArray = retrieveProjects();
  const filteredProjects = storedProjectsArray.find(
    (project) => project.name === projectName
  );

  // if (filteredProjects.length > 1)
  //   throw new Error("duplicate project names found");

  return filteredProjects;
};

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
  retrieveProjectByName,
  retrieveProjects,
  retrieveTasks,
  retrieveTaskById,
};
