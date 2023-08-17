# 💻 웹 구성 요소

<br />

### 개요

오늘날 개발자들이 사용하는 주요 프론트엔드 프레임워크에는 공통점이 있다.

모든 UI 구성을 위한 기본 블록으로 구성 요소를 사용한다.

2장에서는 순수 함수를 기반으로 구성 요소 레지스토리를 작성하였지만, 거의 모든 최신 브라우저에서 웹 구성 요소(web component)라고 하는 네이티브 API 세트를 사용해 웹 어플리케이션의 구성 요소를 작성할 수 있다.

### API

웹 구성 요소는 세 가지 중요 기술로 구성된다.

- HTML 템플릿: <template> 태그는 콘텐츠가 렌더링되지 않지만 자바스크립트 코드에서 동적인 콘텐츠를 생성하는 데 **스탬프**로 사용되도록 하는 경우에 유용하다.
- 사용자 정의 요소: 이 API를 통해 개발자는 완전한 기능을 갖춘 자신만의 DOM 요소를 작성할 수 있다.
- 섀도우(shadow) DOM: 이 기술은 웹 구성 요소가 구성 요소 외부의 DOM에 영향을 받지 않아야 하는 경우에 유용하다.

### 사용자 정의 요소

```html
<app-calendar />
```

사용자 정의 요소 API를 사용해 사용자 정의 태그를 작성할 때는 대시로 구분된 두 단어 이상의 태그를 사용해야 한다.

한 단어 태그는 W3C(World Wide Web Consortium)에서만 단독으로 사용할 수 있다.

> 사용자 정의 요소는 HTML 요소를 확장하는 자바스크립트 클래스일 뿐ㅇ디ㅏ.

```js
export default class HelloWorld extends HTMLElement {
  connectedCallback() {
    window.requestAnimationFrame(() => {
      this.innerHTML = "<div>Hello World!</div>";
    });
  }
}
```

`connectedCallback`은 사용자 정의 요소의 라이프사이클 메서드 중 하나이다. 이 메서드는 구성 요소가 DOM에 연결될 때 호출된다. 리액트의 `componentDidMount` 메서드와 매우 유사하다.

예제처럼 구성 요소의 콘텐츠를 렌더링하거나 타이머를 시작하거나 또는 네트워크에서 데이터를 가져오기에 좋다.

마찬가지로 구성 요소가 DOM에서 삭제될 때 `disconnectedCallback`이 호출되는데, 정리 작업(clean up)에서 유용한 메서드이다.

새로 생성된 이 구성 요소를 사용하려면 브라우저 구성 요소 레지스트리에 추가해야 한다.

```js
import HelloWorld from "./components/HelloWorld.js";

window.customElements.define("hello-world", HelloWorld);
```

브라우저 구성 요소 레지스토리에 구성 요소를 추가하는 것은 태그 이름을 사용자 정의 클래스에 연결하는 것을 의미한다.

그런 다음에 생성한 사용자 정의 태그(<hello-world />)를 구성 요소로 사용할 수 있다.
