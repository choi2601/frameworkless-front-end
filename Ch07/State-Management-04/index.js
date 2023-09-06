import todosView from "./view/todos";
import filtersView from "./view/filters";
import appView from "./view/app";

import applyDiff from "./core/applyDiff";
import registry from "./core/registry";

import eventBusFactory from "./model/eventBus";
import modelFactory from "./model/model";

registry.add("app", appView);
registry.add("todos", todosView);
registry.add("filters", filtersView);

const modifiers = modelFactory();
const eventBus = eventBusFactory(modifiers);

const render = (state) => {
  window.requestAnimationFrame(() => {
    const main = document.querySelector("#root");

    const newMain = registry.renderRoot(main, state, eventBus.dispatch);

    applyDiff(document.body, main, newMain);
  });
};

eventBus.subscribe(render);

render(eventBus.getState());
