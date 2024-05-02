import createTask from "./factories/createTaskcreateTask";
import createProject from "./factories/createProject";

const getStoredTasks = () => {
  const storedData = localStorage.getItem("tasks");
  if (!storedData) return;
  return JSON.parse(storedData);
};

const storeProject = (projectsArray) =>
  localStorage.setItem("tasks", JSON.stringify(projectsArray.getTasks()));

const app = (function () {
  // localStorage.clear(); comment out when you need to reset
  console.log(getStoredTasks() ? getStoredTasks() : "No tasks yet");

  const projects = [];
  const myProject = createProject("My Tasks");
  projects.push(myProject);

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

      input = prompt(`Would you like to tag this to a project? (Y / N)`);
      if (input.toLowerCase() === "n") {
        myProject.addTask(newTask.viewDetails());
        storeProject(myProject);
      }
      // ask whether user wants to create new project or add to existing one

      // myProject.addTask(newTask);
      // console.log(myProject.getTasks());
    }
  }
  getStoredTasks();
})();

//? WHAT DO WE DO IF WE NEED THE LOCALSTORAGE TO HAVE MULTIPLE PROJECTS? WOULD IT BE A DEEPLY-NESTED JSON OBJECT SUCH THAT IT IS LIKE {project1: [task1, task2, task3], project2: [task4, task5, task6]...}? NEED TO TEST THIS INSIDE OF BROWSER TO SEE IF IT CAN BE EXTRACTED LIKE SO. OTHERWISE RIGHT NOW, IT IS MERELY STORING THE PROJECT AND THEN OVERWRITING. SHOULD THE KEY BE THE PROJECT'S TITLE (LATER REQUIRING MORE LOOKUP) OR SHOULD THE KEY OF THE STORED JSON OBJECT BE THE FULL PROJECT OBJECT?

//? or, should the whole localStorage (which is an object) have the keys be the project name, allowing them to be updated. THEN ?? THE QUESTION IS CAN I GET "ALL TASKS" BY GETTING ALL OF LOCALSTORAGE AT ONCE?? ***test this first i think!!!

//! ? todo: fix bug - i believe the myprojects project is reinitialising so you can't add two consecutive tasks to the same project and then have them both be in the localstorage. i believe we should try and implement the data structure in the above comment first. perhaps that will be easier???
