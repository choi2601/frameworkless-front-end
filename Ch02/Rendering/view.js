const getTodoElement = (todo) => {
  const { text, completed } = todo;

  return `
    <li ${completed ? 'class="completed"' : ""}>
    <div class="view">
      <input 
        ${completed ? "checked" : ""}
        class="toggle" 
        type="checkbox">
      <label>${text}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="${text}">
  </li>
    `;
};

const getTodoCount = (todos) => {
  const notCompleted = todos.filter((todo) => !todo.completed);

  const { length } = notCompleted;

  if (length === 1) {
    return "1 Item left";
  }

  return `${length} Items left`;
};

export default (targetElement, state) => {
  const { currentFilter, todos } = state;

  // 가상의 돔(Virtual DOM)
  const element = targetElement.cloneNode(true);
  const list = element.querySelector(".todo-list");
  const counter = element.querySelector(".todo-count");
  const filters = element.querySelector(".filters");

  list.innerHTML = todos.map(getTodoElement).join("");
  counter.textContent = getTodoCount(todos);

  Array.from(filters.querySelectorAll("li a")).forEach((a) => {
    if (a.textContent === currentFilter) {
      a.classList.add("selected");
    } else {
      a.classList.remove("selected");
    }
  });

  // 원본과는 동일한 복제본이자만 실제 문서의 본문과는 관련이 없다
  // 실제 수정 사항이 커밋되지 않았다
  return element;
};
