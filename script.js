

var aA = document.querySelector('.weight-section > p');

var light = document.querySelector('.normal > div:nth-of-type(1)');
var book = document.querySelector('.normal > div:nth-of-type(2)');
var bold = document.querySelector('.normal > div:nth-of-type(3)');
var ultra = document.querySelector('.normal > div:nth-of-type(4)');

var lightItalic = document.querySelector('.italic > div:nth-of-type(1)');
var bookItalic = document.querySelector('.italic > div:nth-of-type(2)');
var boldItalic = document.querySelector('.italic > div:nth-of-type(3)');
var ultraItalic = document.querySelector('.italic > div:nth-of-type(4)');




light.addEventListener('mouseover', function(){
    aA.className = '';
    aA.classList.add('fw-light');
});


book.addEventListener('mouseover', function(){
    aA.className = '';
    aA.classList.add('fw-book');
});


bold.addEventListener('mouseover', function(){
    aA.className = '';
    aA.classList.add('fw-bold');
});


ultra.addEventListener('mouseover', function(){
    aA.className = '';
    aA.classList.add('fw-ultra');
});








lightItalic.addEventListener('mouseover', function(){
    aA.className = '';
    aA.classList.add('fw-light', 'fs-italic');
});


bookItalic.addEventListener('mouseover', function(){
    aA.className = '';
    aA.classList.add('fw-book', 'fs-italic');
});


boldItalic.addEventListener('mouseover', function(){
    aA.className = '';
    aA.classList.add('fw-bold', 'fs-italic');
});


ultraItalic.addEventListener('mouseover', function(){
    aA.className = '';
    aA.classList.add('fw-ultra', 'fs-italic');
});