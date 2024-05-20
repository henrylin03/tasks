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

  console.log("storedProjectsArray", storedProjectsArray);
  console.log(
    storedProjectsArray.filter((project) => project.name === projectName)
  );

  return storedProjectsArray.filter(
    (project) => project.name === projectName
  )[0];
};

const retrieveTasks = () => {
  try {
    return Object.values(JSON.parse(localStorage.getItem("tasks")));
  } catch (TypeError) {
    return [];
  }
};

export {
  projectExists,
  retrieveProjectByName,
  retrieveProjects,
  retrieveTasks,
};
