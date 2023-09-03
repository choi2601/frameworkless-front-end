import todosView from "./view/todos";
import counterView from "./view/counter";
import filtersView from "./view/filters";
import appView from "./view/app";
import applyDiff from "./applyDiff";

import registry from "./registry";

import stateFactory from "./model/state";

const loadState = () => {
  const serializedState = window.localStorage.getItem("state");

  if (!serializedState) {
    return;
  }

  return JSON.parse(serializedState);
};

const state = stateFactory(loadState());

const { addChangeListener, ...events } = state;

registry.add("app", appView);
registry.add("todos", todosView);
registry.add("counter", counterView);
registry.add("filters", filtersView);

const render = (state) => {
  window.requestAnimationFrame(() => {
    const main = document.querySelector("#root");

    const newMain = registry.renderRoot(main, state, events);

    applyDiff(document.body, main, newMain);
  });
};

addChangeListener(render);

addChangeListener((state) => {
  Promise.resolve.then(() => {
    window.localStorage.setItem("state", JSON.stringify(state));
  });
});

addChangeListener((state) => {
  console.log(`Current State (${new Date().getTime()})`, state);
});

render(model.getState());
