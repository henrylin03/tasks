import { format } from "date-fns";

const createTask = ({
  title = "Unnamed task",
  description = "",
  dueDate = "",
  priority = "Medium",
  status = "To Do",
}) => {
  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;
  const getStatus = () => status;

  const setTitle = (newTitle) => (title = newTitle);
  const setDescription = (newDescription) => (description = newDescription);
  const setDueDate = (year, month, date) =>
    (dueDate = format(new Date(year, month, date), "dd/MM/yyyy"));
  const setPriority = (newPriority) => {
    const VALID_PRIORITIES = ["Low", "Medium", "High", "Urgent"];
    if (!VALID_PRIORITIES.includes(newPriority))
      throw new Error("Invalid priority. Defaulting to 'Medium'.");
    priority = newPriority;
  };
  const setStatus = (newStatus) => {
    const VALID_STATUSES = ["To Do", "Doing", "Done", "Won't Do"];
    if (!VALID_STATUSES.includes(newStatus))
      throw new Error("Invalid status. Defaulting to 'To do'");
    status = newStatus;
  };

  return {
    getTitle,
    getDescription,
    getDueDate,
    getPriority,
    getStatus,
    setTitle,
    setDescription,
    setPriority,
    setDueDate,
    setStatus,
  };
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

      console.log(createTask(title, description, dueDate, priority, status));
    }
  }
})();
