function restaurantMenuPage() {
  const mainContent = document.querySelector('main.main-content');

  const restaurantMenuPageContent = document.createElement('section');
  const title = document.createElement('h2');
  const menuFilter = document.createElement('form');
  const menuItems = document.createElement('ul');

  const filters = ['tudo', 'lanche', 'pizza', 'massas'];
  const items = [
    { tipo: 'lanche', sabor: 'X-Salada' },
    { tipo: 'lanche', sabor: 'X-Egg' },
    { tipo: 'lanche', sabor: 'X-Burguer' },
    { tipo: 'pizza', sabor: '4 Queijos' },
    { tipo: 'pizza', sabor: 'Calabresa' },
    { tipo: 'pizza', sabor: 'Frango' },
    { tipo: 'massas', sabor: 'Pene' },
    { tipo: 'massas', sabor: 'Talharim' },
    { tipo: 'massas', sabor: 'Espaguete' },
  ];

  restaurantMenuPageContent.id = 'faq';
  restaurantMenuPageContent.style.minHeight = '10rem';
  restaurantMenuPageContent.style.border = '1rem solid black';
  restaurantMenuPageContent.style.display = 'grid';
  restaurantMenuPageContent.style.placeContent = 'center';
  restaurantMenuPageContent.style.position = 'relative';
  restaurantMenuPageContent.style.padding = '1rem';

  title.textContent = 'Restaurant Menu Page';
  title.style.paddingBottom = '1rem';
  title.style.textAlign = 'center';

  menuFilter.style.textAlign = 'center';
  menuFilter.style.paddingBottom = '1rem';
  menuFilter.style.display = 'flex';
  menuFilter.style.justifyContent = 'space-between';

  menuItems.style.textAlign = 'center';
  menuItems.style.display = 'grid';
  menuItems.style.gridTemplateColumns = '1fr 1fr';

  for (const filtro of filters) {
    const input = document.createElement('input');
    const label = document.createElement('label');

    input.type = 'radio';
    input.id = filtro;
    input.name = 'filtro';
    input.value = filtro;

    if (filtro === 'tudo') {
      input.checked = true;
    }

    label.htmlFor = filtro;
    label.textContent = filtro;

    menuFilter.appendChild(input);
    menuFilter.appendChild(label);
  }

  for (const menuItem of items) {
    const li = document.createElement('li');

    li.style.listStyle = 'none';
    li.style.padding = '0.25rem';
    li.textContent = menuItem.sabor;

    menuItems.appendChild(li);
  }

  restaurantMenuPageContent.appendChild(title);
  restaurantMenuPageContent.appendChild(menuFilter);
  restaurantMenuPageContent.appendChild(menuItems);
  mainContent.appendChild(restaurantMenuPageContent);

  menuFilter.addEventListener('change', (e) => {
    menuItems.innerHTML = '';

    const novoMenuDeItems = items.filter((item) => {
      return item.tipo === e.target.id || e.target.id === 'tudo';
    });

    for (const menuItem of novoMenuDeItems) {
      const li = document.createElement('li');

      li.style.listStyle = 'none';
      li.style.padding = '0.25rem';
      li.textContent = menuItem.sabor;

      menuItems.appendChild(li);
    }
  });
}

export default restaurantMenuPage();
