const img = document.querySelector('img');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');

const imgSrc = ['./img/1.jpg', './img/2.jpg', './img/3.jpg', './img/4.jpg'];
let index = 0;

const changePhotoInt = setInterval(changePhoto, 3000);

btn1.addEventListener('click', () => {
  changePhoto();
});

btn2.addEventListener('click', () => {
  changePhoto();
});

function changePhoto() {
  if (index === 3) {
    img.src = imgSrc[index];
    index = 0;
  } else {
    img.src = imgSrc[index];
    index++;
  }
}
