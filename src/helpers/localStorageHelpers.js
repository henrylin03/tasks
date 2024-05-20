// CHECKS
// const projectExists = (projectName) => !!localStorage.getItem(projectName);

// RETRIEVERS
const retrieveAllProjectsAsObjects = () =>
  JSON.parse(localStorage.getItem("projects"));
const retrieveAllProjectsAsArray = () =>
  Object.values(retrieveAllProjectsAsObjects());
const retrieveAllProjectNames = () => {
  const storedProjectsArray = retrieveAllProjectsAsArray();
  return storedProjectsArray.map((project) => project.name);
};
//! project names must be unique
const retrieveProjectByName = (projectName) => {
  const storedProjectsArray = retrieveAllProjectsAsArray();
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
export { retrieveProjectByName, retrieveAllProjectNames };
