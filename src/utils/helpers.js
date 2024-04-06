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

export const techStacksMapping = {
  d3xtra: ["Vite", "React", "Electron", "Tailwind"],
  portfolio: ["Vite", "React", "Tailwind"],
  "productivity app": ["Expo", "React Native"],
  spotify: ["HTML", "CSS", "JS"],
  "recipe website": ["Vite", "React", "Tailwind"],
};

export const techStacksImageMapping = {
  Vite: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1200px-Vitejs-logo.svg.png",
  React:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png",
  Electron:
    "https://miro.medium.com/v2/resize:fit:1200/1*O6KluMvEBZ1cBL3EPo4tig.png",
  Tailwind:
    "https://static-00.iconduck.com/assets.00/tailwind-css-icon-1024x615-fdeis5r1.png",
  Expo: "https://seeklogo.com/images/E/expo-logo-01BB2BCFC3-seeklogo.com.png",
  "React Native":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png",
  HTML: "https://cdn.iconscout.com/icon/free/png-256/free-html-5-1-1175208.png",
  CSS: "https://static-00.iconduck.com/assets.00/file-type-css-icon-1806x2048-r5fwjl3p.png",
  JS: "https://miro.medium.com/v2/resize:fit:512/1*W3ZHer9j6Cxzh78m0jLLdw.png",
};
