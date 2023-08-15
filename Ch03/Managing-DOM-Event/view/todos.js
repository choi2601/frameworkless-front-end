/**
 * @description 기존 문자열 템플릿 방식은 이벤트 핸들러를 추가할 수 없다.
 * document.createElement API를 사용하는 방식은 코드를 읽고 유지하고 어렵다.
 * index.html 파일의 template 태그 안에 todo 요소의 마크업을 유지하는 것이 확장성 측면에서 좋다
 * template 태그는 렌더링 엔진의 '스탬프'로서 사용할 수 있는 보이지 않는 태그다.
 */

let template;

const createNewTodoNode = () => {
  if (!template) {
    template = document.getElementById("todo-item");
  }

  return template.content.firstElementChild.cloneNode(true);
};

const getTodoElement = (todo) => {
  const { text, completed } = todo;

  const element = createNewTodoNode();

  element.querySelector("input.edit").value = text;
  element.querySelector("label").textContent = text;

  if (completed) {
    element.classList.add("completed");

    element.querySelector("input.toggle").checked = true;
  }

  return element;
};

export default (targetElement, { todos }) => {
  const newTodoList = targetElement.cloneNode(true);

  newTodoList.innerHTML = "";

  todos.map(getTodoElement).forEach((element) => {
    newTodoList.appendChild(element);
  });

  return newTodoList;
};
