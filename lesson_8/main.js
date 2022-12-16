"use strict";
let count = 0
const butEls = document.querySelectorAll('.featuredImgDark');
const cartSpanEl = document.querySelector('.cartIconWrap span');
const cartEl = document.querySelector('.cartIconWrap');
const basketEl = document.querySelector('.basket');
for (let i = 0; i < butEls.length; i++) {
    butEls[i].addEventListener('click', event => {
        if (event.target.tagName === 'BUTTON') {
            count++;
            cartSpanEl.textContent = count;
        }
    })
};
cartEl.addEventListener('click', () => {
    basketEl.classList.toggle('hidden')
});