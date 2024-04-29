// a task list should be an array of objects, each object representing a todo
const createTaskList = () => {
  const taskList = [];
  const addTask = (toDoObject) => {
    taskList.push(toDoObject);
  };

  const printTasks = () => {
    console.log("TO-DOS:", taskList);
  };

  const updateTask = (index, property, updatedValue) => {
    if (taskList[index] === undefined)
      throw new Error(
        "That to-do index does not exist. Please select to-do item based on its index in the to do list."
      );

    const selectedToDo = taskList[index];
    if (selectedToDo[property] === undefined)
      throw new Error(
        "The To-Do property you are trying to modify does not exist."
      );

    console.log(`Updating to-do: "${selectedToDo.title}"`);
    taskList[index][property] = updatedValue;

    printTasks();
  };

  return { addTask, printTasks, updateTask };
};

export default createTaskList;
