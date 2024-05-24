// RETRIEVERS
const retrieveProjects = () => {
  const storedData = localStorage.getItem("projects");
  return storedData === null ? [] : Object.values(JSON.parse(storedData));
};

const retrieveProjectIds = () => retrieveProjects().map((p) => p.id);
const retrieveProjectNames = () => retrieveProjects().map((p) => p.name);
const retrieveProjectById = (projectId) =>
  retrieveProjects().find((project) => project.id === projectId);
const retrieveProjectByName = (projectName) =>
  retrieveProjects().find((project) => project.name === projectName);

const retrieveTasks = () => {
  const storedData = localStorage.getItem("tasks");
  return storedData === null ? [] : Object.values(JSON.parse(storedData));
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
  retrieveProjectByName,
  retrieveProjects,
  retrieveProjectNames,
  retrieveProjectIds,
  retrieveTasks,
  retrieveTaskById,
};
