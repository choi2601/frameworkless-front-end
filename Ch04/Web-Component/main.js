import HelloWorld from "./components/HelloWorld";
import GitHubAvatar from "./components/GitHubAvatar";

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
