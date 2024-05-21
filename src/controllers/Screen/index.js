import addTaskUsingModal from "./modals/addTaskUsingModal";
import addProjectUsingModal from "./modals/addProjectUsingModal";
import displayProjectsInNav from "./nav/displayProjectsInNav";
import displayPage from "./displayPage";
import handleNavLinkClicks from "./nav/handleNavLinkClicks";

const createScreenController = () => {
  const brandingInSidebar = document.querySelector(".branding");
  const inboxLinkInSidebar = document.querySelector("#inbox-link");
  const addProjectBtn = document.querySelector(".add-project");
  const addTaskBtn = document.querySelector(".add-task");

  displayProjectsInNav();
  displayPage("inbox");

  //event listeners
  addTaskBtn.addEventListener("click", addTaskUsingModal);
  addProjectBtn.addEventListener("click", addProjectUsingModal);
  [brandingInSidebar, inboxLinkInSidebar].forEach((elem) =>
    elem.addEventListener("click", () => handleNavLinkClicks("inbox"))
  );
};

export default createScreenController;
