import addTaskUsingModal from "./addTaskUsingModal";
import addProjectUsingModal from "./addProjectUsingModal";
import displayProjectsInNav from "./displayProjectsInNav";
import displayPage from "./displayPage";
import handleNavLinkClicks from "./handleNavLinkClicks";

const createScreenController = () => {
  // select required dom elements here
  const brandingInSidebar = document.querySelector(".branding");
  const inboxLinkInSidebar = document.querySelector("#inbox-link");
  const addProjectBtn = document.querySelector(".add-project");
  const addTaskBtn = document.querySelector(".add-task");

  // add anything that needs to be run
  displayProjectsInNav();
  displayPage("Inbox");

  // add required event listeners
  addTaskBtn.addEventListener("click", addTaskUsingModal);
  addProjectBtn.addEventListener("click", addProjectUsingModal);
  [brandingInSidebar, inboxLinkInSidebar].forEach((elem) =>
    elem.addEventListener("click", () => handleNavLinkClicks("Inbox"))
  );
};

export default createScreenController;
