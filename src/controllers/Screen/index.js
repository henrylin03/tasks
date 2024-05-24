import addProjectUsingModal from "./modals/addProjectUsingModal";
import displayProjectsInNav from "./nav/displayProjectsInNav";
import displayPage from "./displayPage";
import handleNavLinkClicks from "./nav/handleNavLinkClicks";
import handleProjectNameChange from "./displayPage/handleProjectNameChange";

const createScreenController = () => {
  const brandingInSidebar = document.querySelector(".branding");
  const inboxLinkInSidebar = document.querySelector("#inbox-link");
  const addProjectBtn = document.querySelector(".add-project");
  const pageTitle = document.querySelector("#page-title");

  displayProjectsInNav();
  displayPage("inbox");

  //event listeners
  pageTitle.addEventListener("mousedown", handleProjectNameChange);
  addProjectBtn.addEventListener("mousedown", addProjectUsingModal);
  [brandingInSidebar, inboxLinkInSidebar].forEach((elem) =>
    elem.addEventListener("mousedown", () => handleNavLinkClicks("inbox"))
  );
};

export default createScreenController;
