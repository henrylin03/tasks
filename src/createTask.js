import { format } from "date-fns";

const createTask = ({ title, description = "" }) => {
  // default values of private properties
  let dueDate = "";
  let priority = "Medium";
  let status = "To Do";

  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;
  const getStatus = () => status;

  const setTitle = (newTitle) => (title = newTitle);
  const setDescription = (newDescription) => (description = newDescription);
  const setDueDate = (year, month, date) => {
    dueDate = dueDate
      ? format(new Date(year, month, date), "dd/MM/yyyy")
      : dueDate;
  };
  const setPriority = (newPriority) => {
    const VALID_PRIORITIES = ["Low", "Medium", "High", "Urgent"];
    if (VALID_PRIORITIES.includes(newPriority)) return (priority = newPriority);
    console.log(
      "Invalid priority. Reverting to the last defined priority or, if this is a new task, defaulting to 'Medium' priority."
    );
  };
  const setStatus = (newStatus) => {
    const VALID_STATUSES = ["To Do", "Doing", "Done", "Won't Do"];
    if (VALID_STATUSES.includes(newStatus)) return (status = newStatus);
    console.log(
      "Invalid status. Reverting to the last defined status or, if this is a new task, 'To Do'."
    );
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

export default createTask;
