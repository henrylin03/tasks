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

    // ? perhaps shouldn't be an error. just log it and continue.
    if (!VALID_PRIORITIES.includes(newPriority))
      throw new Error("Invalid priority. Defaulting to 'Medium'.");
    priority = newPriority;
  };
  const setStatus = (newStatus) => {
    const VALID_STATUSES = ["To Do", "Doing", "Done", "Won't Do"];

    // ? perhaps shouldn't be an error. just log it and continue.
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

export default createTask;
