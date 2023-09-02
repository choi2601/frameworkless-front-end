const cloneDeep = (x) => {
  return JSON.parse(JSON.stringify(x));
};

const freeze = (x) => Object.freeze(cloneDeep(x));

const INITIAL_STATE = {
  todos: [],
  currentFilter: "All",
};

export default (initialState = INITIAL_STATE) => {
  const state = cloneDeep(initialState);
  let listeners = [];

  const addChangeListener = (listener) => {
    listeners.push(listener);

    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  const invokeListners = () => {
    const data = freeze(state);
    listeners.forEach((l) => l(data));
  };

  const addItem = (text) => {
    if (!text) {
      return;
    }

    state.todos.push({
      text,
      completed: false,
    });

    invokeListners();
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

    invokeListners();
  };

  const deleteItem = (index) => {
    if (index < 0) {
      return;
    }

    if (!state.todos[index]) {
      return;
    }

    state.todos.splice(index, 1);

    invokeListners();
  };

  const toggleItemCompleted = (index) => {
    if (index < 0) {
      return;
    }

    if (!state.todos[index]) {
      return;
    }

    state.todos[index].completed = !state.todos[index].completed;

    invokeListners();
  };

  const completeAll = () => {
    state.todos.forEach((t) => {
      t.completed = true;
    });

    invokeListners();
  };

  const clearCompleted = () => {
    state.todos = state.todos.filter((t) => !t.completed);

    invokeListners();
  };

  const changeFilter = (filter) => {
    state.currentFilter = filter;

    invokeListners();
  };

  return {
    addItem,
    updateItem,
    deleteItem,
    toggleItemCompleted,
    completeAll,
    clearCompleted,
    changeFilter,
    addChangeListener,
  };
};
