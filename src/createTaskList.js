// a task list should be an array of objects, each object representing a todo
const createTaskList = () => {
  const taskList = [];
  const add = (toDoObject) => {
    taskList.push(toDoObject);
  };

  const print = () => {
    console.log("TO-DOS:", taskList);
  };

  const updateTodo = (taskSelector) => {};

  return { add, print, updateTodo };
};

export default createTaskList;
