import {
  getCleanedProjectNames,
  retrieveProjectNames,
} from "../helpers/localStorageHelpers";

export default function addSuffixToDuplicateProjectName(projectName) {
  const projectNamesInStorage = retrieveProjectNames();
  const cleanedProjectNamesInStorage = getCleanedProjectNames();
  const projectNameExists = projectNamesInStorage.includes(projectName);

  if (!projectNameExists) return projectName;

  const duplicateCount = cleanedProjectNamesInStorage.filter(
    (n) => n === retrievedOrNewName
  ).length;

  for (let suffixInt = 1; suffixInt <= duplicateCount; suffixInt++) {
    const projectNameWithSuffix = `${retrievedOrNewName} (${suffixInt})`;
    if (!projectNamesInStorage.includes(projectNameWithSuffix))
      return projectNameWithSuffix;
  }
}
