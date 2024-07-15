import addTaskUsingModal from "../modals/addTaskUsingModal";

const updateHeader = (project) => {
  const pageIcon = document.querySelector(".page-icon");
  const pageTitle = document.querySelector("#page-title");
  const addTaskBtn = document.querySelector(".add-task");

  const currentProjectPageId = project.getId();
  const isInboxPage = currentProjectPageId === "inbox";
  const iconClass = isInboxPage ? "inbox" : "project";

  pageTitle.value = project.getName();
  pageTitle.setAttribute("data-id", currentProjectPageId);
  pageTitle.disabled = isInboxPage;
  pageIcon.classList.add(iconClass);

  addTaskBtn.addEventListener("mousedown", () =>
    addTaskUsingModal(currentProjectPageId),
  );
};

export default updateHeader;
