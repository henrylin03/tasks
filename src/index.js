import createTask from "./createTask";
import createProject from "./createProject";

const controller = (function () {
  const taskList = [];

  const addTask = (taskObject) => taskList.push(taskObject);

  const viewTasks = () => {
    const tasksWithPropertiesShown = taskList.map((task) => ({
      title: task.viewTitle(),
      details: task.viewDescription(),
      due: task.viewDueDate(),
    }));
    console.log("Your tasks: ", tasksWithPropertiesShown);
  };

  const updateTask = (taskIndex, setter, updatedValue) => {
    if (taskList[taskIndex] === undefined)
      throw new Error("Index does not exist in tasks");
    taskList[taskIndex].setterHandler[setter](updatedValue);
  };

  const deleteTask = (taskIndex) => {
    if (taskList[taskIndex] === undefined)
      throw new Error("Index does not exist in tasks");
    console.log("Deleting task...");
    taskList.splice(taskIndex, 1);
    console.log("Done");
    viewTasks();
  };

  // adding a bunch of test tasks - these can be deleted when we introduce localStorage management
  const uncategorisedProject = createProject("My Tasks");
  uncategorisedProject.addTaskToProject(
    createTask("Analyse latest news articles to find the most relevant quotes")
  );
  uncategorisedProject.addTaskToProject(createTask("Write email to Mary Jin"));
  console.log(uncategorisedProject.tasksInProject);

  // taskList.push(uncategorisedProject.tasksInProject);

  // run
  console.log(" ~ welcome to serenity to-dos ~");
})();
