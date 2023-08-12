import getTodos from "./getTodos";
import todosView from "./view/todos";
import counterView from "./view/counter";
import filtersView from "./view/filters";

import registry from "./registry";
import applyDiff from "./applyDiff";

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

    /**
     * @description 기존 알고리즘은 비교 연산 없이 전체 UI를 교체했다.
     * 즉, 하나의 구성 요소가 변경되었는데 재귀 호출을 통해 참조된 모든 구성 요소를 변경하여 가상 DOM에 적용하고
     * 이를 실제 DOM과 바꾸는 방식으로 진행하였다.
     */
    main.replaceWith(newMain);
  });
};

/**
 * @description diff 알고리즘을 사용하는 메인 컨트롤러
 */
const renderDiff = () => {
  window.requestAnimationFrame(() => {
    const main = document.querySelector(".todoapp");
    const newMain = registry.renderRoot(main, state);

    /**
     * @param (새로운 가상 DOM 노드의 부모, 현재 DOM 노드, 실제 DOM 노드)
     */
    applyDiff(document.body, main, newMain);
  });
};

/**
 * @description 임의로 5초마다 state 값을 변경하고 가상 루트 요소를
 */
window.setInterval(() => {
  state.todos = getTodos();
  render();
}, 5000);
