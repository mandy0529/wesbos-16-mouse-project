const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const distance = 300;

const handleMouseMove = (e) => {
  const {offsetWidth: width, offsetHeight: height} = hero;
  let {offsetX: x, offsetY: y} = e;
  if (e.target.nodeName === 'H1') {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  const xDistance = Math.round((x / width) * distance - distance / 2);
  const yDistance = Math.round((y / width) * distance - distance / 2);
  text.style.textShadow = `
  ${xDistance}px ${yDistance}px 0 gold,
  ${xDistance * -1}px ${yDistance}px 0 teal,
  ${yDistance}px ${xDistance}px 0 blue,
  ${yDistance}px ${xDistance * -1}px 0 red`;
};
hero.addEventListener('mousemove', handleMouseMove);
