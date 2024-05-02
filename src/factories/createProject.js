const createProject = (name) => {
  const taskList = [];

  const getName = () => name;
  const getTasks = () => taskList;

  const setName = (newProjectName) => (name = newProjectName);

  const addTask = (taskObject) => taskList.push(taskObject);

  return { getName, getTasks, setName, addTask };
};

export default createProject;
