import createTask from "./createTask";

const taskManager = (function () {
  const taskList = [];
  const addTask = (taskObject) => taskList.push(taskObject);
  const viewTasks = () => {
    const taskTitles = taskList.map((task) => task.title);
    console.log("Your tasks: ", taskTitles);
  };

  // adding a bunch of test tasks - these can be deleted when we introduce localStorage management
  addTask(createTask("Get your shit together"));
  addTask(
    createTask(
      "Work hard",
      "Do something you love and it won't really feel like work at all"
    )
  );
  addTask(
    createTask("Relax with your family", "Nothing else has as much meaning")
  );

  // run
  console.log(" ~ welcome to serenity to-dos ~");
  viewTasks();
})();
