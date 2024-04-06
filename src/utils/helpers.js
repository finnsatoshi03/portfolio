export function toTitleCase(str) {
  // Convert camelCase to kebab-case
  const kebabCaseStr = str
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2")
    .toLowerCase();

  // Convert kebab-case to title case
  const titleCaseStr = kebabCaseStr
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Remove certain words
  return titleCaseStr.replace(/Html|Css|Electron/g, "");
}
