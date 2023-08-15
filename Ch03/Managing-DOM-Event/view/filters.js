export default (targetElement, { currentFilter }) => {
  const newFilter = targetElement.cloneNode(true);
  Array.from(newFilter.querySelectorAll("li a")).forEach((a) => {
    if (a.textContent === currentFilter) {
      a.classList.add("selected");
    } else {
      a.classList.remove("selected");
    }
  });

  return newFilter;
};
