const wrappers = Array(44).fill(null);

wrappers.forEach((item, i) => {
  const area = (i+1) * 44;
  item = document.createElement('div');

  const divs = Array((i+1) * 3).fill(null);
  divs.forEach((div, i) => {
    div = document.createElement('div');
    div.classList.add('dot');
    item.appendChild(div);
    div.style.transformOrigin = `${area/2}px ${area/2}px`;
    div.style.transform = `rotateZ(${i*(360/divs.length)}deg)`;
  });


  item.classList.add('wrapper');
  item.style.width = area + 'px';
  item.style.height = area + 'px';
  item.style.setProperty('--nth', (i+1)*2+'s');

  window.main.appendChild(item);
});

let main = document.getElementById('main');
let dots = document.querySelectorAll('.dot');

const setBg = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  main.style.backgroundColor = "#" + randomColor;
  dots.forEach((dot) => {
    dot.style.backgroundColor = "#" + randomColor;
  })
}

main.addEventListener("click", setBg);
setBg();