const createTask = ({
  title,
  description = "",
  dueDate = "",
  priority = "Medium",
  status = "To Do",
}) => {
  return { title, description, dueDate, priority, status };
};

const app = (function () {
  // show all tasks from localStorage. if none, show "no tasks yet"
  let input = prompt(
    `What would you like to do? Please enter number: 
    1: add something new, 
    2: modify existing task, 
    3: modify existing project`
  );

  if (input === "1") {
    input = prompt(`What would you like to add?
    1: add task,
    2: add project`);

    if (input === "1") {
      const title = prompt("Please enter a title for the task");
      const description = prompt(
        "Please enter a description for the task. This is optional. Press enter to continue."
      );
      const dueDate = prompt(
        "Please enter a due date for this task. This is optional. Press enter to continue."
      );
      const priority = prompt(
        "Please enter a priority for this task. This is optional. Priority will default to 'Medium'. Press enter to continue."
      );
      const status = prompt(
        "Please enter the status of this task - 'To Do', 'Doing' or 'Done'. Status will default to 'To Do' if none is entered. Press enter to continue."
      );
    }
  }
})();
