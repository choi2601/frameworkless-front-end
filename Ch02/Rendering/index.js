import getTodos from "./getTodos";
import todosView from "./view/todos";
import counterView from "./view/counter";
import filtersView from "./view/filters";

import registry from "./registry";

registry.add("todos", todosView);
registry.add("counter", counterView);
registry.add("filters", filtersView);

const state = {
  todos: getTodos(),
  currentFilter: "All",
};

window.requestAnimationFrame(() => {
  const main = document.querySelector(".todoapp");
  const newMain = registry.renderRoot(main, state);

  main.replaceWith(newMain);
});
