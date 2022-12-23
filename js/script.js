const carosello = document.querySelector('.carosello');

const imgs = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
]

for (let x = 0; x < imgs.length; x++) {
    console.log(imgs[x]);
    carosello.innerHTML += `<div class="slide">
                            <img src="${imgs[x]}"> 
                           </div>`;
}

// seleziono i div contententi le immagini
const slides = document.querySelectorAll('.slide');

// ad ogni div selezionato do una class 'current'
slides[0].classList.add('current');

// dichiaro una variabile pari a 0
let actually = 0;

let imgTwo = slides[1];
console.log(imgTwo);

const right = document.querySelector('.right');
const left = document.querySelector('.left');

right.addEventListener('click', scorri);

function scorri() {
    console.log('cliccato su right');
    slides[0].classList.remove('current');
}

