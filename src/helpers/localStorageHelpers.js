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
  return storedProjectsArray.filter((project) => project.name === projectName);
};

// const retrieveProject = (projectName) =>
//   JSON.parse(localStorage.getItem(projectName));

// const retrieveAllProjects = () => Object.values(retrieveAll());

// const retrieveAll = () => {
//   const obj = {};
//   const storedProjectNames = Object.keys(localStorage);
//   storedProjectNames.forEach((p) => (obj[p] = retrieveProject(p)));
//   return obj;
// };

// export { retrieveAllProjects, retrieveProject, projectExists };
export { projectExists, retrieveProjectByName, retrieveProjects };
