let x =0;
let targetX = 0;
const speed = 0.1;

const contentAll = document.querySelectorAll(".contWrap img");

const shadow = contentAll[0];
const date = contentAll[1];
const human = contentAll[2];
const textImg = contentAll[3];

window.addEventListener("mousemove", (e) => {
  x = e.pageX - window.innerWidth / 2;
});


const loop = () => {
  targetX += (x - targetX) * speed;

  shadow.style.transform = `translateX(${x / 25}px)`;
  date.style.transform = `translateX(${x / 20}px)`;
  human.style.transform = `translateX(${-x / 30}px)`;
  textImg.style.transform = `translateX(${-x / 10}px)`;
  window.requestAnimationFrame(loop);
}

loop();