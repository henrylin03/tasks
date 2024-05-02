/*
in our localStorage, we can use .getItem(projectId) to return the project object

// in our localStorage, we will have two "objects".

// -object #1 ("projectIdToTasks"): key = unique id of project, value = array of objects representing the projects' tasks (as objects)
// -object #2 ("projectIdToProjects"): lookup for project where key = unique id of project, value = project object
*/

const noProjectsCreated = localStorage.length === 0;

const getAllStoredTasks = () => ({ ...localStorage });

const storeProject = (projectObject) => {
  localStorage.setItem(projectObject.getId(), JSON.stringify(projectObject));
};

// function to create a new project and add task objects to its array OR update existing project with new tasks array
// const storeProjectAndTasks = (projectObject) => {
//   const projectsTasksArray = projectObject.getTasks();
//   localStorage.setItem(
//     JSON.stringify(projectObject),
//     JSON.stringify(projectsTasksArray)
//   );
// };

export { getAllStoredTasks, storeProject, noProjectsCreated };
