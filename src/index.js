import _ from 'lodash';

function component() {
  const element = document.createElement('div');

  // 아래 스크립트 실행하기 위해서 lodash import 함
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
