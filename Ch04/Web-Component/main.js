import HelloWorld from "./components/HelloWorld";
import GitHubAvatar, { EVENTS } from "./components/GitHubAvatar";

window.customElements.define("hello-world", HelloWorld);
window.customElements.define("github-avatar", GitHubAvatar);

/**
 * @description HelloWorld 구성 요소의 color 속성을 변경할 이벤트 바인딩
 */

const changeColorTo = (color) => {
  document.querySelectorAll("hello-world").forEach((helloWorld) => {
    helloWorld.color = color;
  });
};

document.querySelector("button").addEventListener("click", () => {
  changeColorTo("blue");
});

document.querySelectorAll("github-avatar").forEach((avatar) => {
  avatar.addEventListener(EVENTS.AVATAR_LOAD_COMPLETE, (e) => {
    console.log("Avatar Loaded", e.detail.avatar);
  });

  avatar.addEventListener(EVENTS.AVATAR_LOAD_ERROR, (e) => {
    console.log("Avatar Loading error", e.detail.error);
  });
});
