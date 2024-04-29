// a task list should be an array of objects, each object representing a todo
const createTaskList = () => {
  const taskList = [];
  const add = (toDoObject) => {
    taskList.push(toDoObject);
  };

  const print = () => {
    console.log("TO-DOS:", taskList);
  };

  const updateToDo = (index, property, updatedValue) => {
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

    print();
  };

  return { add, print, updateToDo };
};

export default createTaskList;
