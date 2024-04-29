import createTask from "./createTask";

const taskManager = (function () {
  const taskList = [];
  const addTask = (taskObject) => taskList.push(taskObject);
  const viewTasks = () => {
    const taskTitles = taskList.map((task) => task.title);
    console.log("Your tasks: ", taskTitles);
  };

  // adding a bunch of test tasks - these can be deleted when we introduce localStorage management
  addTask(
    createTask("Analyse latest news articles to find the most relevant quotes")
  );
  addTask(
    createTask(
      "Write email to Mary Jin",
      "see earlier email from 20 March 2022 for reply"
    )
  );

  // run
  console.log(" ~ welcome to serenity to-dos ~");
  viewTasks();

  const newTask = prompt("Please add in the title of your new task");
  addTask(createTask(newTask));
  viewTasks();

  return { addTask, viewTasks };
})();
