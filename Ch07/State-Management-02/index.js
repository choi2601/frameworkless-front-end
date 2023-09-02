import todosView from "./view/todos";
import counterView from "./view/counter";
import filtersView from "./view/filters";
import appView from "./view/app";
import applyDiff from "./applyDiff";

import registry from "./registry";

import modelFactory from "./model/model";

const model = modelFactory();

registry.add("app", appView);
registry.add("todos", todosView);
registry.add("counter", counterView);
registry.add("filters", filtersView);

const events = {
  addItem: (text) => {
    model.addItem(text);
    render(model.getState());
  },
  updateItem: (index, text) => {
    model.updateItem(index, text);
    render(model.getState());
  },
  deleteItem: (index) => {
    model.deleteItem(index);
    render(model.getState());
  },
  toggleItemCompleted: (index) => {
    model.toggleItemCompleted(index);
    render(model.getState());
  },
  completeAll: () => {
    model.completeAll();
    render(model.getState());
  },
  clearCompleted: () => {
    model.clearCompleted();
    render(model.getState());
  },
  changeFilter: (filter) => {
    model.changeFilter(filter);
    render(model.getState());
  },
};

const render = (state) => {
  window.requestAnimationFrame(() => {
    const main = document.querySelector("#root");

    const newMain = registry.renderRoot(main, state, events);

    applyDiff(document.body, main, newMain);
  });
};

render(model.getState());
