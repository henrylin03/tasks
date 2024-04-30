import { format } from "date-fns";

const createTask = (title) => {
  // use details to add more specific requirements and context that isn't necessarily a subtask
  let details = "";
  const setDetails = (detailsText) => (details = detailsText);
  const viewDetails = () => details;

  let dueDateAndTime = null;
  // default to 12am of due date if user does not provide a time
  const setDueDateAndTime = (year, month, date, time = 0) => {
    dueDateAndTime = format(
      new Date(year, month, date, time),
      "dd/MM/yyyy (hh:mm aaa)"
    );
  };
  const viewDueDateAndTime = () => dueDateAndTime;

  return {
    title,
    setDetails,
    viewDetails,
    setDueDateAndTime,
    viewDueDateAndTime,
  };
};

export default createTask;
