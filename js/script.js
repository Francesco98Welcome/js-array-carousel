const carosello = document.querySelector('.carosello');

const imgs = [
    'img/01.webp', // 1 - indice 0
    'img/02.webp', // 2 - indice 1
    'img/03.webp', // 3 - indice 2
    'img/04.webp', // 4 - indice 3
    'img/05.webp'  // 5 - indice 4
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
let currentSlide = 0;

const right = document.querySelector('.right');
const left = document.querySelector('.left');

// aggiungo un evento alla freccia di scorrimento
right.addEventListener('click', scorri);

if (currentSlide == 0) {
   left.classList.add('hidden');
}

function scorri() {
    console.log('cliccato su right');
    slides[currentSlide].classList.remove('current');
    slides[1 + currentSlide].classList.add('current');
    currentSlide++;

   /* console.log(currentSlide);
    console.log(slides.length);*/

    if (currentSlide == slides.length - 1) {
        right.classList.add('hidden');
    } 

    if (currentSlide == 1) {
        left.classList.remove('hidden');
    }
}

// aggiungo un evento alla freccia di ritorno
left.addEventListener('click', back);

function back() {
    slides[currentSlide].classList.remove('current');
    slides[currentSlide - 1].classList.add('current');
    currentSlide--;
    console.log(currentSlide);

    if (currentSlide == 0) {
        left.classList.add('hidden');
    } 

    if (currentSlide == slides.length - 2) {
        right.classList.remove('hidden');
    }

    if (currentSlide == 1) {
        left.classList.remove('hidden');
    }
}

