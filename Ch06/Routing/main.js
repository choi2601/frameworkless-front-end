import createRouter from "./router";
import createPages from "./pages";

const container = document.querySelector("main");

const pages = createPages(container);

const router = createRouter();

router
  .addRoute("/#", pages.home)
  .addRoute("#/list", page.list)
  .addRoute("#/list/:id", page.detail)
  .addRoute("#/list/:id/:anotherId", page.anotherDetail)
  .setNotFound(pages.notFound)
  .start();

const NAV_BTN_SELECTOR = "button[data-navigate]";

document.body.addEventListener("click", (e) => {
  const { target } = e;

  if (target.match(NAV_BTN_SELECTOR)) {
    const { navigate } = target.dataset;

    router.navigate(navigate);
  }
});
