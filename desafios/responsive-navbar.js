const responsiveNavbar = () => {
  const mainContent = document.querySelector('main.main-content');

  const responsiveNavbarContent = document.createElement('section');
  const btn = document.createElement('button');
  const h2 = document.createElement('h2');

  responsiveNavbarContent.id = 'responsive-navbar';
  responsiveNavbarContent.style.minHeight = '10rem';
  responsiveNavbarContent.style.border = '1rem solid black';
  responsiveNavbarContent.style.display = 'grid';
  responsiveNavbarContent.style.placeContent = 'center';

  btn.textContent = 'Abrir Título';
  btn.style.display = 'block';

  h2.textContent = 'Responsive Navbar';
  h2.style.fontSize = '1.25rem';
  h2.style.display = 'none';

  btn.addEventListener('click', (e) => {
    e.preventDefault();

    if (h2.style.display === 'none') {
      h2.style.display = 'block';
    } else {
      h2.style.display = 'none';
    }
  });

  if (matchMedia) {
    const mediaQueryTrigger = window.matchMedia('(min-width: 500px)');

    mediaQueryTrigger.addEventListener('change', (e) => {
      if (e.matches === true) {
        btn.style.display = 'none';
        h2.style.display = 'block';
      } else {
        btn.style.display = 'block';
        h2.style.display = 'none';
      }
    });
  }

  responsiveNavbarContent.appendChild(btn);
  responsiveNavbarContent.appendChild(h2);
  mainContent.appendChild(responsiveNavbarContent);
};

export default responsiveNavbar();
