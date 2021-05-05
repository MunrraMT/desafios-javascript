const sideBar = () => {
  const mainContent = document.querySelector('main.main-content');

  const sideBarContent = document.createElement('section');
  const btn = document.createElement('button');
  const sideBar = document.createElement('aside');
  const h2 = document.createElement('h2');

  sideBarContent.id = 'sidebar';
  sideBarContent.style.minHeight = '10rem';
  sideBarContent.style.border = '1rem solid black';
  sideBarContent.style.display = 'grid';
  sideBarContent.style.placeContent = 'center';
  sideBarContent.style.position = 'relative';

  btn.textContent = 'Abrir SideBar';
  btn.style.cursor = 'pointer';
  btn.style.fontSize = '1.25rem';

  h2.textContent = 'SideBar';
  h2.style.textAlign = 'Center';
  h2.style.fontSize = '1.25rem';
  h2.style.textAlign = 'Center';
  h2.style.width = '7rem';

  sideBar.style.position = 'absolute';
  sideBar.style.top = '0rem';
  sideBar.style.left = '-10rem';
  sideBar.style.width = '0rem';
  sideBar.style.height = '8rem';
  sideBar.style.backgroundColor = '#6dc1d6';
  sideBar.style.transition = 'all 0.3s';
  sideBar.style.display = 'grid';
  sideBar.style.placeContent = 'center';

  btn.addEventListener('click', (e) => {
    e.preventDefault();

    if (sideBar.style.left === '-10rem') {
      sideBar.style.left = '0rem';
      sideBar.style.width = '7rem';
    } else {
      sideBar.style.left = '-10rem';
      sideBar.style.width = '0rem';
    }
  });

  sideBar.appendChild(h2);
  sideBarContent.appendChild(btn);
  sideBarContent.appendChild(sideBar);
  mainContent.appendChild(sideBarContent);
};

export default sideBar();
