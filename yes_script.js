const container = document.querySelector('.falling-elements');

function createElement() {
  const element = document.createElement('div');
  element.classList.add('element');

  // Случайным образом выбираем, будет ли это сердечко или лепесток
  if (Math.random() > 0.5) {
    element.classList.add('heart');
    element.innerHTML = '🥳';
  } else  {
    element.classList.add('petal');
    element.innerHTML = '💘';
  }

  element.style.left = Math.random() * 100 + 'vw';
  element.style.animationDuration = (Math.random() * 2 + 3) + 's';
  element.style.fontSize = (Math.random() * 10 + 15) + 'px';
  container.appendChild(element);

  setTimeout(() => {
    element.remove();
  }, 5000);
}

setInterval(createElement, 100);