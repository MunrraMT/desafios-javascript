const counter = () => {
  const mainContent = document.querySelector('main.main-content');

  const counterContent = document.createElement('section');
  const btn = document.createElement('button');
  const h2 = document.createElement('h2');

  counterContent.id = 'counter';
  counterContent.style.minHeight = '10rem';
  counterContent.style.border = '1rem solid black';
  counterContent.style.display = 'grid';
  counterContent.style.placeContent = 'center';

  btn.textContent = 'Counter';
  btn.style.fontSize = '1.25rem';

  h2.textContent = 0;
  h2.style.textAlign = 'center';

  btn.addEventListener('click', (e) => {
    e.preventDefault();

    h2.textContent++;
  });

  counterContent.appendChild(h2);
  counterContent.appendChild(btn);
  mainContent.appendChild(counterContent);
};

export default counter();
