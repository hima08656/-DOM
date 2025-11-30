// 1) Change the <h1> text by its id
const title = document.getElementById('main-title');
title.textContent = 'Welcome to the DOM World!';

// 2) Select all <p> elements and set their color to blue
const paragraphs = document.getElementsByTagName('p');
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = 'blue';
}

// 3) Select the first <div> with class "container" and change background to yellow
const container = document.querySelector('.container');
container.style.backgroundColor = 'yellow';