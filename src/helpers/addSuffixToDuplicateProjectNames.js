import {
  getCleanedProjectNames,
  retrieveProjectNames,
} from "../helpers/localStorageHelpers";

export default function addSuffixToDuplicateProjectName(projectName) {
  const projectNamesInStorage = retrieveProjectNames();
  const cleanedProjectNamesInStorage = getCleanedProjectNames();
  const regexToMatchParenthesesWithNumbersInside = /\(\s*\d+\s*\)$/g;
  const cleanedProjectName = projectName
    .replace(regexToMatchParenthesesWithNumbersInside, "")
    .trim();
  const projectNameExistsInStorage = projectNamesInStorage.some(
    (name) => name === projectName
  );

  if (!projectNameExistsInStorage) return projectName;

  const duplicateCount = cleanedProjectNamesInStorage.filter(
    (cleanedName) => cleanedName === cleanedProjectName
  ).length;

  for (let suffixInt = 1; suffixInt <= duplicateCount; suffixInt++) {
    const suffixedName = `${cleanedProjectName} (${suffixInt})`;
    if (!projectNamesInStorage.includes(suffixedName)) return suffixedName;
  }
}
