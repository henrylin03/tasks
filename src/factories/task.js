import { format } from "date-fns";

const createTask = ({ title, description = "" }) => {
  let dueDate = "";
  let priority = "Medium";
  let status = "To Do";

  const setDueDate = (dueDateString) => {
    if (!dueDateString) return;
    // user is advised to input due date as format "dd/MM/YYYY" per Australian common use
    const [day, month, year] = dueDateString.split("/");

    // month is zero-indexed
    dueDate = format(new Date(year, month - 1, day), "dd/MM/yyyy");
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
    dueDate,
    priority,
    status,
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

const createTaskFromJSON = (retrievedTask) => {
  const reconstructedTask = createTask({
    title: retrievedTask.title,
    description: retrievedTask.description,
  });
  reconstructedTask.setPriority(retrievedTask.priority);
  reconstructedTask.setDueDate(retrievedTask.dueDate);
  reconstructedTask.setStatus(retrievedTask.status);

  return reconstructedTask.viewDetails();
};

export { createTask, createTaskFromJSON };
