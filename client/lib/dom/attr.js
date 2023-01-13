function getAttr(node, prop) {
  if(typeof node === 'string') {
    node = getNode(node);
  }
  return node.getAttribute(prop);
}

function setAttr(node,prop,value) {
  if(typeof node === 'string') {
    node = getNode(node);
  }

  if(typeof prop !== 'string') {
    throw new TypeError("setAttr 함수의 두번째 인자의 타입은 string이어야 합니다.")
  }

  if(!value) throw new SyntaxError("setAttr 함수의 세 번째 인자는 필수 값 입니다.")
  return node.setAttribute(prop,value);
  
}


function attr(node, prop, value) {
  return !value ? getAttr(node,prop) : setAttr(node,prop,value);
}