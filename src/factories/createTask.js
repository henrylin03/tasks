import { format } from "date-fns";

const createTask = ({ title, description = "" }) => {
  // default values of private properties
  let dueDate = "";
  let priority = "Medium";
  let status = "To Do";

  const getDueDate = () => dueDate;
  const getPriority = () => priority;
  const getStatus = () => status;

  const setDueDate = (dueDateString) => {
    if (!dueDateString) return;
    // user is advised to input due date as format "dd/MM/YYYY" per Australian common use
    const [date, month, year] = dueDateString.split("/");
    dueDate = format(new Date(year, month, date), "dd/MM/yyyy");
  };
  const setPriority = (newPriority) => {
    if (!newPriority) return;
    const VALID_PRIORITIES = ["Low", "Medium", "High", "Urgent"];
    if (VALID_PRIORITIES.includes(newPriority)) return (priority = newPriority);
    console.log(
      "Invalid priority. Reverting to the last defined priority or, if this is a new task, defaulting to 'Medium' priority."
    );
  };
  const setStatus = (newStatus) => {
    if (!newStatus) return;
    const VALID_STATUSES = ["To Do", "Doing", "Done", "Won't Do"];
    if (VALID_STATUSES.includes(newStatus)) return (status = newStatus);
    console.log(
      "Invalid status. Reverting to the last defined status or, if this is a new task, 'To Do'."
    );
  };

  const viewDetails = () => ({
    title,
    description,
    dueDate: getDueDate(),
    priority: getPriority(),
    status: getStatus(),
  });

  return {
    title,
    description,
    setPriority,
    setDueDate,
    setStatus,
    viewDetails,
  };
};

export default createTask;
