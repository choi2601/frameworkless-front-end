/**
 * @description 이벤트 위임(Event delegation)
 * 리스트의 갯수가 많다면 성능과 메모리 사용량을 줄일 수 있다.
 */

let template;

const createNewTodoNode = () => {
  if (!template) {
    template = document.getElementById("todo-item");
  }

  return template.content.firstElementChild.cloneNode(true);
};

const getTodoElement = (todo, index) => {
  const { text, completed } = todo;

  const element = createNewTodoNode();

  element.querySelector("input.edit").value = text;
  element.querySelector("label").textContent = text;

  if (completed) {
    element.classList.add("completed");

    element.querySelector("input.toggle").checked = true;
  }

  element.querySelector("button.destory").dataset.index = index;

  return element;
};

export default (targetElement, { todos }, events) => {
  const newTodoList = targetElement.cloneNode(true);

  newTodoList.innerHTML = "";

  todos
    .map((todo, index) => getTodoElement(todo, index))
    .forEach((element) => {
      newTodoList.appendChild(element);
    });

  newTodoList.addEventListener("click", (e) => {
    if (e.target.matches("button.destory")) {
      events.deleteItem(e.target.dataset.index);
    }
  });

  return newTodoList;
};
