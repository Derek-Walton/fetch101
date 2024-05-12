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
  if (response.ok) {
    const data = await response.json();
    for (const li of data) {
      const newLi = document.createElement('li');
      newLi.textContent = li;
      elem.appendChild(newLi);
    }
  } else {
    console.log('Response was not OK');
  }
}

function startShowingMessage(elem, url) {
  setInterval(fetchText, 1000, elem, url);
}

async function fetchText(elem, url) {
  const response = await fetch(url);
  if (response.ok) {
    const text = await response.text();
    elem.textContent = text;
  } else {
    console.log('NOT OK!!!');
  }
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
  setInterval(fetchBoxCoord, 1000, canvas, url);
}

async function fetchBoxCoord(canvas, url) {
  const response = await fetch(url);
  const coordinates = await response.json();
  const xCoord = coordinates.x;
  const yCoord = coordinates.y;

  const contex = canvas.getContext('2d');
  contex.fillRect(xCoord, yCoord, 10, 10);
}
