/*
IIUC localStorage is a big object, where keys can be called in .setItem / .getItem methods.

The structure of our localStorage should be that the keys are the projects (objects).
For each project key, the value is an array that contains tasks (objects).
*/

// function to get all projects, and their tasks in a big object
const getAllTasks = () => {
  const allProjectsAndTasks = {};
  return allProjectsAndTasks;
};

// function to create a new project and add task objects to its array OR update existing project with new tasks array
const storeProjectAndTasks = (projectObject) => {
  return projectObject;
};

// const getStoredTasks = () => {
//   const storedData = localStorage.getItem("tasks");
//   if (!storedData) return;
//   return JSON.parse(storedData);
// };

// const storeProject = (projectsArray) =>
//   localStorage.setItem("tasks", JSON.stringify(projectsArray.getTasks()));
