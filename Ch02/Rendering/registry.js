/**
 * @description 애플리케이션에서 사용할 수 있는 모든 구성 요소의 인덱스이다.
 * 래지스토리의 키는 data-component 속성 값과 일치한다.
 * 이 메커니즘은 루트 컨테이너(애플리케이션 뷰 함수)뿐만 아니라 생성할 모든 구성 요소에도 적용돼야 한다.
 * 모든 구성 요소가 다른 구성 요소 안에서도 사용될 수 있다(재사용성)
 */
const registry = {};

/**
 * @description 모든 구성 요소가 data-component 속성의 값을 읽고 올바른 함수를 자동으로 호출하는 기본 구성 요소에서 상속되어야 한다.
 * 각 구성 요소를 래핑하는 고차 함수(higher-order function)
 */
const renderWrapper = (component) => {
  return (targetElement, state) => {
    const element = component(targetElement, state);

    const childComponents = element.querySelectorAll("[data-component]");

    Array.from(childComponents).forEach((target) => {
      const name = target.dataset.component;

      const child = registry[name];

      if (!child) {
        return;
      }

      target.replaceWith(child(target, state));
    });

    return element;
  };
};

// 공용 인터페이스

/**
 * @description 레지스토리 접근자(Accessor) 메서드
 */
const add = (name, component) => {
  registry[name] = renderWrapper(component);
};

/**
 * @description 구성 요소 기반 애플리케이션의 부팅 함수
 */
const renderRoot = (root, state) => {
  const cloneComponent = (root) => {
    return root.cloneNode(true);
  };

  return renderWrapper(cloneComponent)(root, state);
};

export default { add, renderRoot };
