function getFirstSelector(selector) {
  return document.querySelector(selector);
}


function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  var deepest = document.querySelector('#grand-node').querySelectorAll('div');
  return deepest[deepest.length-1];
}