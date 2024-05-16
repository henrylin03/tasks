import addProject from "./addProject";
import displayProjectsInNav from "./displayProjectsInNav";
import displayProjectPage from "./displayProjectPage";
import handleNavLinkClicks from "./handleNavLinkClicks";

const createScreenController = () => {
  // select required dom elements here
  const brandingInSidebar = document.querySelector(".branding");
  const inboxLinkInSidebar = document.querySelector("#inbox-link");
  const addProjectBtn = document.querySelector(".add-project");

  // add anything that needs to be run
  displayProjectsInNav();
  displayProjectPage("Inbox");

  // add required event listeners
  addProjectBtn.addEventListener("click", addProject);
  [brandingInSidebar, inboxLinkInSidebar].forEach((elem) =>
    elem.addEventListener("click", () => handleNavLinkClicks("Inbox"))
  );
};

export default createScreenController;
