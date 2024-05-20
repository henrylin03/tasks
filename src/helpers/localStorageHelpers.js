// // checks
// const projectExists = (projectName) => !!localStorage.getItem(projectName);

// // retrievers from localStorage

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
