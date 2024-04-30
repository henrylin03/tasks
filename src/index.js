const createTask = ({
  title,
  description = "",
  dueDate = "",
  priority = "Medium",
}) => {
  return { title, description, dueDate, priority };
};

const app = (function () {
  // show all tasks from localStorage. if none, show "no tasks yet"
  let input = prompt(
    `What would you like to do? Please enter number: 
    1: add something new, 
    2: modify existing task, 
    3: modify existing project`
  );
})();
