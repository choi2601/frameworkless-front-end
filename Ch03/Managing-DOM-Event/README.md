# 💻 DOM 이벤트 관리

<br />

### 개요

### YAGNI 원칙

이전 렌더링 챕터에서 작성한 렌더링 엔진을 수정해 DOM 이벤트 관리를 추가한다.
그렇다면 왜 렌더링 챕터에선 이벤트를 무시한 불완전한 엔진을 학습하였을까?

필자는 **YAGNI** 원칙을 얘기한다.

> You aren't gonna need it; 정말 필요하다고 간주할 때까지 기능을 추가하지 마라

또한 필자는 YAGMI 원칙을 보다 더 잘 설명하기 위해 XP의 창시자 중 한 명인 론 제프리스 인용물을 들었다.

> 당신이 필요하다고 예측할 때가 아니라 실제로 필요할 때 구현하라.

이는 프레임워크 없는 프로젝트에서 절대적으로 중요하다.

프레임워크 없는 접근 방식에 대해 종종 듣게 되는 비판 중 하나는 **_아무도 관리하지 않는 또 다른 프레임워크를 작성했다_** 는 것이다.

아키텍쳐를 과도하게 엔지니어링할 경우 실제로 이러한 위험이 따른다.

### 사용자 정의 이벤트 사용

DOM 이벤트 API에서는 사용자 정의 이벤트 타입을 정의하고 다른 이벤트 처럼 처리할 수 있다.

이는 도메인에 바인딩되고 시스템 자체에서만 발생한 DOM 이벤트를 생성할 수 있기 때문에 DOM 이벤트 API에서 중요한 부분이다.

```js
const EVENT_NAME = "FiveCharInputValue";
const input = document.querySelector("input");

input.addEventListener("input", () => {
  const { length } = input.value;

  if (length === 5) {
    const time = new Date().getTime();
    const event = new CustomEvent(EVENT_NAME, {
      detail: {
        time,
      },
    });

    input.dipatchEvent(event);
  }
});

input.addEventListener(EVENT_NAME, (e) => {
  console.log(e.detail);
});
```
