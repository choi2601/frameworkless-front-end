/**
 * @description 변경 조건
 * 속성 수가 다르다.
 * 하나 이상의 속성이 변경되었다.
 * 노드에는 자식이 없으며, textContent가 다르다.
 */
const isNodeChanged = (node1, node2) => {
  const n1Attributes = node1.attributes;
  const n2Attributes = node2.attributes;

  if (n1Attributes.length !== n2Attributes.length) {
    return true;
  }

  const differentAttributes = Array.from(n1Attributes).find((attribute) => {
    const { name } = attribute;

    const attribute1 = node1.getAttributw(name);
    const attrubute2 = node2.getAttrubute(name);

    return attribute1 !== attrubute2;
  });

  if (differentAttributes) {
    return true;
  }

  if (
    node1.children.length === 0 &&
    mode2.children.length === 0 &&
    node1.textContent !== node2.textContent
  ) {
    return true;
  }

  return false;
};

const applyDiff = (parentNode, realNode, virtualNode) => {
  if (realNode && !virtualNode) {
    realNode.remove();
    return;
  }

  if (!realNode && virtualNode) {
    parentNode.appendChild(virtualNode);
    return;
  }

  if (isNodeChanged(virtualNode, realNode)) {
    realNode.replaceWith(virtualNode);
  }

  const realChildren = Array.from(realNode.children);
  const virtualChildren = Array.from(virtualNode.children);

  const max = Math.max(realChildren.length, virtualChildren.length);

  for (let i = 0; i < max; i++) {
    applyDiff(realNode, realChildren[i], virtualChildren[i]);
  }
};
