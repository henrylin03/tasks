/*
in our localStorage, we will have two "objects".

-object #1: key = unique id of project, value = array of objects representing the projects' tasks (as objects)
-object #2: lookup for project where key = unique id of project, value = project object
*/

const noProjectsCreated = localStorage.length === 0;

const getAllStoredTasks = () => ({ ...localStorage });

// function to create a new project and add task objects to its array OR update existing project with new tasks array
const storeProjectAndTasks = (projectObject) => {
  const projectsTasksArray = projectObject.getTasks();
  localStorage.setItem(
    JSON.stringify(projectObject),
    JSON.stringify(projectsTasksArray)
  );
};

export { getAllStoredTasks, storeProjectAndTasks, noProjectsCreated };
