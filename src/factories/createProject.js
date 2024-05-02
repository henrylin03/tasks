const createProject = (name) => {
  // the creation timestamp is the unique identifier of this project
  const id = Date.now();
  const taskList = [];

  // getters
  const getName = () => name;
  const getTasks = () => taskList;
  const getId = () => id;

  // setters
  const setName = (newProjectName) => (name = newProjectName);

  // other methods
  const addTask = (taskObject) => taskList.push(taskObject);

  return { getName, getTasks, getId, setName, addTask };
};

export default createProject;
