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
    (n) => n === projectName
  ).length;

  for (let suffixInt = 1; suffixInt <= duplicateCount; suffixInt++) {
    const projectNameWithSuffix = `${projectName} (${suffixInt})`;
    if (!projectNamesInStorage.includes(projectNameWithSuffix))
      return projectNameWithSuffix;
  }
}
