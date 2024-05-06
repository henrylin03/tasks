import { createTask, createTaskFromJSON } from "./factories/task";
import createProject from "./factories/project";
import {
  retrieveAll,
  retrieveAllProjectNames,
  retrieveProject,
  storeProject,
  findProjectsWithTask,
  checkTaskExists,
  retrieveTask,
  storeTask,
} from "./utils/localStorageHelpers";

const app = (function () {
  // localStorage.clear(); // comment out when you need to reset
  console.log(retrieveAll());
  if (localStorage.length === 0) {
    const myTasksProject = createProject("My Tasks");
    storeProject(myTasksProject);
  }

  let input = prompt(
    `What would you like to do? Please enter number: 
    1: add something new, 
    2: modify existing task, 
    3: modify existing project`
  );

  if (input === "1") {
    input = prompt(`What would you like to add?
    1: add task,
    2: add project`);

    if (input === "1") {
      const newTask = createTask({
        title: prompt("Please enter a title for the task"),
        description: prompt("Please enter the description of this task"),
      });
      newTask.set.dueDate(
        prompt(
          "Please enter a due date for this task in the format: `dd/mm/yyyy` (eg 1/1/2025 for 2025 New Years Day). This is optional. Press enter to not include a due date."
        )
      );
      newTask.set.priority(
        prompt(
          "Please enter a priority for this task. This is optional. Priority will default to 'Medium'. Press enter to continue."
        )
      );
      newTask.set.status(
        prompt(
          "Please enter the status of this task - 'To Do', 'Doing' or 'Done'. Status will default to 'To Do' if none is entered. Press enter to continue."
        )
      );

      input = prompt(`Would you like to tag this to a project? (y / n)`);
      if (input === "y") {
        input = prompt(
          `Would you like to add this to an existing project? (y / n)`
        );
        if (input === "y") {
          const storedProjects = retrieveAllProjectNames();
          while (true) {
            const selectedProjectName =
              prompt(`Current projects: [${storedProjects}]
Please type the name of the project to add this task to:`);
            if (!storedProjects.includes(selectedProjectName)) {
              alert("Project does not exist. Please check your project name.");
              continue;
            }
            const retrievedProject = retrieveProject(selectedProjectName);
            retrievedProject.tasks.push(newTask.viewDetails());
            storeProject(retrievedProject);
            break;
          }
        } else if (input === "n") {
          const newProject = createProject(
            prompt("Please enter a name for your new project")
          );
          newProject.addTaskDetails(newTask);
          storeProject(newProject);
        }
      } else {
        const myTasksProjectRetrieved = retrieveProject("My Tasks");
        myTasksProjectRetrieved.tasks.push(newTask.viewDetails());
        storeProject(myTasksProjectRetrieved);
      }
    } else if (input === "2") {
      const newProject = createProject(
        prompt("Please enter a name for your project")
      );
      storeProject(newProject);
    }
  } else if (input === "2") {
    const selectedTaskName = prompt(
      "Please enter the name of the task you would like to modify:"
    );
    checkTaskExists(selectedTaskName);
    input = prompt(`What would you like to do with task, "${selectedTaskName}"?
    1: modify task
    2: delete task`);

    if (input === "1") {
      const retrievedTaskObject = retrieveTask(selectedTaskName);
      const taskProperties = Object.keys(retrievedTaskObject);
      const reconstructedTask = createTaskFromJSON(retrievedTaskObject);

      const propertyToModify = prompt(
        "Please enter the property name you would like to change (title, description, dueDate, priority, status): "
      );
      if (!taskProperties.includes(propertyToModify))
        throw new Error(
          `A task does not have that property. Please select from the following: 
    title, description, dueDate, priority, status`
        );

      const updatedValue = prompt("Please enter the updated value: ");

      reconstructedTask.set[propertyToModify](updatedValue);
      storeTask(reconstructedTask);
    } else if (input === "2") {
      const matchedProjects = findProjectsWithTask(selectedTaskName);
      matchedProjects.forEach((project) => {
        project.tasks = project.tasks.filter(
          (task) => task.title != selectedTaskName
        );
        storeProject(project);
      });
    }
  } else if (input === "3") {
    const selectedProjectName = prompt(
      "Please enter the name of the project you would like to modify:"
    );
    // check project actually exists. throw error if not. also prevent user from deleting the 'My Tasks' project

    // if project exists, as what user would like to do

    // if user wishes to delete project, then get the list of tasks assigned to that project (as objects)
  }

  console.log(retrieveAll());
})();

//? should we restrict tasks to a single project? what if doing a task actually hits two projects? THEN it would mean we need to deduplicate the list of all _tasks_
//todo: need to refactor the app here so it's not spaghetti code - package into different functions (methods of an 'app controller')
//? explore using unique ids of tasks and projects to establish relations rather than manipulating arrays and objects etc...
