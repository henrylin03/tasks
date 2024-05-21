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

// OTHER METHODS
const getCleanedProjectNames = () => {
  const storedProjectNames = retrieveProjectNames();
  const cleanedProjectNames = storedProjectNames.map((projectName) => {
    if (!projectName.includes("(")) return projectName;
    const regexToMatchParenthesesWithNumbersInside = /\(\s*\d+\s*\)$/g;
    return projectName
      .replace(regexToMatchParenthesesWithNumbersInside, "")
      .trim();
  });

  return cleanedProjectNames;
};

export {
  getCleanedProjectNames,
  retrieveProjectById,
  retrieveProjects,
  retrieveProjectNames,
  retrieveTasks,
  retrieveTaskById,
};
