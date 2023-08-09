# 💻 렌더링

<br />

### 개요

모든 웹 어플리케이션에서 가장 중요한 기능 중 하나는 **데이터의 표시** 이다.

데이터를 표시한다는 것은 요소(element)를 화면이나 다른 출력 장치에 렌더링하는 것을 말한다.

[W3C](https://www.w3.org/)는 프로그래밍 방식으로 요소를 렌더링하는 방식을 [문서 객체 모델(DOM)](https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model/Introduction)으로 정의하였다.

> DOM은 웹 어플리케이션을 구성하는 요소를 조작할 수 있는 API이다.

### 렌더링 성능 모니터링

웹용 렌더링 엔진을 설계할 때는 **가독성(readability)**과 **유지 관리성(maintainability)**을 염두에 둬야 한다.

일반적으로 디스플레이의 주사율 60Hz인 경우, 브라우저는 1초에 60번 화면을 갱신하려고 시도한다.

그래서 이론적으로 한 번의 렌더링이 1/60초, 약 16.67밀리초 안에 완료되어야 한다.

**requestAnimationFrame**은 브라우저의 렌더링 주기와 동기화되므로, 브라우저가 화면을 갱신하는 시점마다 requestAnimationFrame에 전달된 콜백 함수가 실행된다.
