import createTask from "./factories/createTask";
import createProject from "./factories/createProject";
import {
  retrieveAll,
  storeProject,
  retrieveProject,
} from "./utils/localStorageHelpers";

const app = (function () {
  // localStorage.clear(); // comment out when you need to reset
  // console.log(getStoredTasks() ? getStoredTasks() : "No tasks yet");
  if (localStorage.length === 0) {
    const myTasksProject = createProject("My Tasks");
    storeProject(myTasksProject);
    console.log(`the id for 'My Tasks' is: `, myTasksProject.getId());
  }
  console.log(retrieveAll());

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
      newTask.setDueDate(
        prompt(
          "Please enter a due date for this task in the format: `dd/mm/yyyy` (eg 1/1/2025 for 2025 New Years Day). This is optional. Press enter to not include a due date."
        )
      );
      newTask.setPriority(
        prompt(
          "Please enter a priority for this task. This is optional. Priority will default to 'Medium'. Press enter to continue."
        )
      );
      newTask.setStatus(
        prompt(
          "Please enter the status of this task - 'To Do', 'Doing' or 'Done'. Status will default to 'To Do' if none is entered. Press enter to continue."
        )
      );

      input = prompt(`Would you like to tag this to a project? (y / n)`);
      if (input === "y") {
        input = prompt(
          `Would you like to add this to an existing project? (y / n)`
        );

        // create new project
        if (input === "n") {
          //? can this be collected up to DRY with creating new project immediately?
          const newProject = createProject(
            prompt("Please enter a name for your new project")
          );
          newProject.tasks.push(newTask.viewDetails());
          console.log(newProject.viewDetails());

          // add task to tasklist of newProject

          storeProject(newProject);
        }
      } else {
        const myTasksProject = retrieveProject("My Tasks");
        myTasksProject.tasks.push(newTask.viewDetails());
        storeProject(myTasksProject);
      }
    } else if (input === "2") {
      const newProject = createProject(
        prompt("Please enter a name for your project")
      );
      storeProject(newProject);
    }
  }
  console.log(retrieveAll());
})();
