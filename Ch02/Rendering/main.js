import getTodos from "./getTodos";
import view from "./view";

const state = {
  todos: getTodos(),
  currentFilter: "All",
};

const main = document.querySelector(".todoapp");

/**
 * @description 렌더링 엔진
 * 메인 스레드를 차단하지 않으며 다음 다시 그리기(repaint)가 이벤트 루프에서 스케줄링되기 직전에 실행된다
 */
window.requestAnimationFrame(() => {
  const newMain = view(main, state);

  main.replaceWith(newMain);
});
