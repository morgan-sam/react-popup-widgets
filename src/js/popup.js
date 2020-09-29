const hasParentClass = (element, classname) => {
  if (element.className && element.className.split(" ").indexOf(classname) >= 0)
    return true;
  return element.parentNode && hasParentClass(element.parentNode, classname);
};

export const closeIfClickedOutside = (e, open, closePopup, popupClass) => {
  const clickedOutside = !hasParentClass(e.target, popupClass);
  if (open && clickedOutside) closePopup();
};
