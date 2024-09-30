/*
 * This is index.js
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */
'use strict';

async function showMessage(elem, url) {
  const response = await fetch(url);
  const text = await response.text();
  elem.textContent = text;
}

async function showList(elem, url) {
  const response = await fetch(url);
  let listItems = 'not good';
  if (response.ok) {
    listItems = await response.json();
  } else {
    console.log('error');
  }

  for (let index = 0; index < listItems.length; index++) {
    const newElement = document.createElement('li');
    newElement.textContent = listItems[index];
    elem.appendChild(newElement);
  }
}

function startShowingMessage(elem, url) {
  setInterval(async callback => {
    const response = await fetch(url);
    const text = await response.text();
    elem.textContent = text;
  }, 1000);
}

async function handleError(elem, url) {
  const response = await fetch(url);
  if (response.ok) {
    const text = await response.text();
    elem.textContent = text;
  } else {
    elem.textContent = 'OH DEAR';
  }
}

function drawBox(canvas, url) {
  setInterval(async event => {
    const response = await fetch(url);
    const coordinates = await response.json();
    const ctx = canvas.getContext('2d');
    ctx.fillRect(coordinates.x, coordinates.y, 10, 10);
    console.log(coordinates);
  }, 1000);
}
