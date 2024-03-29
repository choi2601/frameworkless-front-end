# 💻 프레임워크

<br />

### 프레임워크란?

**_무언가를 만들 수 있는 지지 구조_**

### 라이브러리와 프레임워크의 차이?

**_프레임워크는 코드를 호출한다. 코드는 라이브러리를 호출한다._**

프레임워크는 내부적으로 하나 이상의 라이브러리를 사용할 수 있지만, 개발자가 모듈식 프레임워크를 선택하면 프레임워크를 단일 단위나 여러 모듈로 보는 개발자에게는 이러한 사실이 숨겨진다

예를 들어, `앵귤러(Angular)`는 개발자가 코드로 채울 수 있는 구조와 표준 작업에 도움이 되는 유틸리티 세트를 제공한다.

- 언어
- 의존성 주입
- 옵저버블(observable)

반면 라이브러리는 애플리케이션 코드를 어떻게 구성해야 하는지에 대해 특별한 형식을 요구하지 않는다.

### 리액트는 라이브러리와 프레임워크 중 무엇일까?

리액트 공식 홈페이지 상에서는 리액트를 다음과 같이 설명하고 있다.

**사용자 인터페이스 구축을 위한 자바스크립트 라이브러리**

그러나 저자는 프레임워크의 **모든 제약 조건** 을 프레임워크 방식 이라고 말한다.

이러한 측면에서 리액트의 주요 제약 사항은 **선언적 패러다임** 의 사용이며 이는 리액트가 라이브러리가 아닌 프레임워크임을 저자는 강조한다.

[선언적 패턴]('./src/exmaple01.jsx')
[명령형 패턴]('./src/example02.jsx')

위에 두 코드 사이 간에 `기묘함(strangeness)`이, 리액트는 라이브러리가 아닌 프레임워크라고 믿는 이유라고 저자는 얘기하고 있다
