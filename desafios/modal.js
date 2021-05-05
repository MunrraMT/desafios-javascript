const modal = () => {
  const mainContent = document.querySelector('main.main-content');

  const modalContent = document.createElement('section');
  const btn = document.createElement('button');
  const sideBar = document.createElement('aside');
  const modalBtn = document.createElement('button');
  const h2 = document.createElement('h2');

  modalContent.id = 'modal';
  modalContent.style.minHeight = '10rem';
  modalContent.style.border = '1rem solid black';
  modalContent.style.display = 'grid';
  modalContent.style.placeContent = 'center';
  modalContent.style.position = 'relative';

  btn.textContent = 'abrir modal';
  btn.style.textTransform = 'capitalize';
  btn.style.cursor = 'pointer';
  btn.style.fontSize = '1.25rem';

  sideBar.style.position = 'absolute';
  sideBar.style.top = '50%';
  sideBar.style.left = '50%';
  sideBar.style.transform = 'translate(-50%,-50%)';
  sideBar.style.opacity = '0';
  sideBar.style.width = '0';
  sideBar.style.height = '0';
  sideBar.style.backgroundColor = '#6dc1d6';
  sideBar.style.transition = 'all 0.2s';
  sideBar.style.display = 'grid';
  sideBar.style.placeContent = 'center';

  h2.textContent = 'modal';
  h2.style.textAlign = 'Center';
  h2.style.textTransform = 'uppercase';
  h2.style.fontSize = '0rem';
  h2.style.textAlign = 'Center';
  h2.style.width = '7rem';

  modalBtn.textContent = 'X';
  modalBtn.style.position = 'absolute';
  modalBtn.style.top = '0';
  modalBtn.style.right = '0';
  modalBtn.style.opacity = '0';
  modalBtn.style.cursor = 'pointer';
  modalBtn.style.width = '0';
  modalBtn.style.height = '0';
  modalBtn.style.display = 'grid';
  modalBtn.style.placeContent = 'center';

  btn.addEventListener('click', (e) => {
    e.preventDefault();

    sideBar.style.opacity = '1';
    sideBar.style.width = '80%';
    sideBar.style.height = '80%';

    modalBtn.style.opacity = '1';
    modalBtn.style.width = '2rem';
    modalBtn.style.height = '2rem';

    h2.style.fontSize = '1.25rem';
  });

  modalBtn.addEventListener('click', (e) => {
    e.preventDefault();

    sideBar.style.opacity = '0';
    sideBar.style.width = '0%';
    sideBar.style.height = '0%';

    modalBtn.style.opacity = '0';
    modalBtn.style.width = '0rem';
    modalBtn.style.height = '0rem';

    h2.style.fontSize = '0rem';
  });

  sideBar.appendChild(h2);
  sideBar.appendChild(modalBtn);
  modalContent.appendChild(btn);
  modalContent.appendChild(sideBar);
  mainContent.appendChild(modalContent);
};

export default modal();
