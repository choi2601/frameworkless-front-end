/**
 * @description 깊은 복사를 위한 헬퍼 함수
 */
const cloneDeep = (x) => {
  return JSON.parse(JSON.stringify(x));
};

const INITIAL_STATE = {
  todos: [],
  currentFilter: "All",
};

export default (initialState = INITIAL_STATE) => {
  const state = cloneDeep(initialState);

  const getState = () => {
    return Object.freeze(cloneDeep(state));
  };

  const addItem = (text) => {
    if (!text) {
      return;
    }

    state.todos.push({
      text,
      completed: false,
    });
  };

  const updateItem = (index, text) => {
    if (!text) {
      return;
    }

    if (index < 0) {
      return;
    }

    if (!state.todos[index]) {
      return;
    }

    state.todos[index].text = text;
  };

  const deleteItem = (index) => {
    if (index < 0) {
      return;
    }

    if (!state.todos[index]) {
      return;
    }

    state.todos.splice(index, 1);
  };

  const toggleItemCompleted = (index) => {
    if (index < 0) {
      return;
    }

    if (!state.todos[index]) {
      return;
    }

    state.todos[index].completed = !state.todos[index].completed;
  };

  const completeAll = () => {
    state.todos.forEach((t) => {
      t.completed = true;
    });
  };

  const clearCompleted = () => {
    state.todos = state.todos.filter((t) => !t.completed);
  };

  const changeFilter = (filter) => {
    state.currentFilter = filter;
  };

  return {
    addItem,
    updateItem,
    deleteItem,
    toggleItemCompleted,
    completeAll,
    clearCompleted,
    changeFilter,
    getState,
  };
};
