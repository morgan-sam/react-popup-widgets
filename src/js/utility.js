export const toggleDarkTheme = (darkTheme) => {
  let root = document.documentElement;
  if (darkTheme) {
    root.style.setProperty("--background-color", "#333");
    root.style.setProperty("--popup-header-color", "#666");
    root.style.setProperty("--banner-color", "rgb(194, 112, 11)");
    root.style.setProperty("--shadow-color", "#111");
    root.style.setProperty("--text-color", "white");
    console.log(root.style);
  } else {
    root.style.setProperty("--background-color", "white");
    root.style.setProperty("--popup-header-color", "rgb(58, 12, 58)");
    root.style.setProperty("--banner-color", "rgb(194, 112, 11)");
    root.style.setProperty("--shadow-color", "#eee");
    root.style.setProperty("--text-color", "black");
  }
};
