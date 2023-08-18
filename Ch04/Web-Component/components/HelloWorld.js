const DEFAULT_COLOR = "black";

/**
 * @description 구성 요소의 라이프사이클동안 속성이 변경되도록 attributeChangedCallback 메서드를 사용
 * 속성이 변경될 때마다 호출된다
 * 모든 속성이 attributeChangedCallback을 트리거하지는 않으며 observedAttributes 배열에 나열된 속성만 트리거된다.
 */

export default class HelloWorld extends HTMLElement {
  static get observedAttributes() {
    return ["color"];
  }

  get color() {
    return this.getAttribute("color") || DEFAULT_COLOR;
  }

  set color(value) {
    this.setAttribute("color", value);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (!this.div) {
      return;
    }

    if (name === "color") {
      this.div.style.color = newValue;
    }
  }

  connectedCallback() {
    window.requestAnimationFrame(() => {
      const div = document.createElement("div");

      div.textContent = "Hello World";

      div.style.color = this.color;

      this.appendChild(div);
    });
  }
}
