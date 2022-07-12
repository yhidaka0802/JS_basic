'use strict';

document.getElementById('form').onsubmit = function() {
  event.preventDefault();
  const name = document.getElementById('input_name').value;
  const age = document.getElementById('input_age').value;
  if (age > 20) {
    document.getElementById('output').textContent = `${name}さんは20歳以上なので大人料金です。`;
  } else {
    document.getElementById('output').textContent = `${name}さんは20歳未満なので子供料金です。`;
  }
}