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

function increaseRankBy(n) {
  const up = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i=0; i< up.length ; i++) {
    up[i].innerHTML = (parseInt(up[i].innerHTML) + 1)
  }
}