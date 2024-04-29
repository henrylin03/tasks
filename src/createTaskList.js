// a task list should be an array of objects, each object representing a todo
const createTaskList = () => {
  const taskList = [];
  const add = (toDoObject) => {
    taskList.push(toDoObject);
  };

  const print = () => {
    console.log("Your tasks are below:");
    taskList.forEach((t) => console.log(t));
  };

  return { add, print };
};

export default createTaskList;
