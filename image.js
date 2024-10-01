const slide = document.querySelector('.slide');
const image = document.querySelectorAll('.slide img');


const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');


let count = 0;
const size = image[0].clientWidth;


nextBtn.addEventListener('click', () => {
    if (count >= image.length - 1) {
        count = -1;
    }
    count++;
    slide.style.transform = `translateX(${-size * count}px)`;
});


prevBtn.addEventListener('click', () => {
    if (count <= 0) {
        count = image.length;
    }
    count--;
    slide.style.transform = `translateX(${-size * count}px)`;
});


setInterval(() => {
    nextBtn.click();
}, 3000);
