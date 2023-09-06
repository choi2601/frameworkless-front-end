import todosModifers from "./domain/todos";
import filterModifers from "./domain/filter";

const cloneDeep = (x) => {
  return JSON.parse(JSON.stringify(x));
};

const INITIAL_STATE = {
  todos: [],
  currentFilter: "All",
};

export default (initialState = INITIAL_STATE) => {
  return (prevState, event) => {
    /**
     * @description mount
     */
    if (!event) {
      return cloneDeep(initialState);
    }

    const { todos, currentFilter } = prevState;

    const newTodos = todosModifers(todos, event);
    const newCurrentFilter = filterModifers(currentFilter, event);

    if (newTodos === todos && newCurrentFilter === currentFilter) {
      return prevState;
    }

    return {
      todos: newTodos,
      currentFilter: newCurrentFilter,
    };
  };
};
