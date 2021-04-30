const colorFlipper = () => {
  const mainContent = document.querySelector('main.main-content');

  const colorFlipperContent = document.createElement('section');
  const btn = document.createElement('button');

  colorFlipperContent.id = 'color-flipper';
  colorFlipperContent.style.minHeight = '10rem';
  colorFlipperContent.style.border = '1rem solid black';
  colorFlipperContent.style.display = 'grid';
  colorFlipperContent.style.placeContent = 'center';

  btn.textContent = 'Color Flipper';
  btn.style.fontSize = '1.25rem';

  const randomNumber = () => {
    return Math.floor(Math.random() * (255 - 0)) + 0;
  };

  const randomRGB = () => {
    return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
  };

  btn.addEventListener('click', (e) => {
    e.preventDefault();

    colorFlipperContent.style.backgroundColor = randomRGB();
  });

  colorFlipperContent.appendChild(btn);
  mainContent.appendChild(colorFlipperContent);
};

export default colorFlipper();
