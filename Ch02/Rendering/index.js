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

const render = () => {
  window.requestAnimationFrame(() => {
    const main = document.querySelector(".todoapp");
    const newMain = registry.renderRoot(main, state);

    main.replaceWith(newMain);
  });
};

/**
 * @description 임의로 5초마다 state 값을 변경하고 가상 루트 요소를 렌더링
 */
window.setInterval(() => {
  state.todos = getTodos();
  render();
}, 5000);
