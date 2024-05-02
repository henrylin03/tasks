/*
IIUC localStorage is a big object, where keys can be called in .setItem / .getItem methods.

The structure of our localStorage should be that the keys are the projects (objects).
For each project key, the value is an array that contains tasks (objects).
*/

// function to get all projects, and their tasks in a big object
const getAllStoredTasks = () => ({ ...localStorage });

// function to create a new project and add task objects to its array OR update existing project with new tasks array
const storeProjectAndTasks = (projectObject) => {
  const projectsTasksArray = projectObject.getTasks();
  localStorage.setItem(
    JSON.stringify(projectObject),
    JSON.stringify(projectsTasksArray)
  );
};

export { getAllStoredTasks, storeProjectAndTasks };
