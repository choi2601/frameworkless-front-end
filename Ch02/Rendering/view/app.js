import todoView from "./todo";
import counterView from "./counter";
import filtersView from "./filters";

export default (targetElement, state) => {
  const element = targetElement.cloneNode(true);

  /**
   * @description 각 view 함수에 대해 수동으로 호출하고 있다.
   * 구성 요소 기반의 애플리케이션을 작성하려면 구성 요소 간의 상호작용에 선언전 방식을 사용해야 한다.
   * 추상화 작업이 더 필요하다.
   */
  const list = element.querySelector(".todo-list");
  const counter = element.querySelector(".todo-count");
  const filters = element.querySelector(".filters");

  list.replaceWith(todosView(list, state));
  counter.replaceWith(counterView(counter, state));
  filters.replaceWith(filtersView(filters, state));

  return element;
};
