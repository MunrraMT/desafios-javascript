const reviewCarousel = () => {
  const mainContent = document.querySelector('main.main-content');

  const reviewCarouselContent = document.createElement('section');
  const section = document.createElement('section');
  const footer = document.createElement('footer');
  const previous = document.createElement('button');
  const next = document.createElement('button');

  const reviews = [
    { id: 0, titulo: 'Título 01', conteudo: 'texto corrido 01' },
    { id: 1, titulo: 'Título 02', conteudo: 'texto corrido 02' },
    { id: 2, titulo: 'Título 03', conteudo: 'texto corrido 03' },
    { id: 3, titulo: 'Título 04', conteudo: 'texto corrido 04' },
    { id: 4, titulo: 'Título 05', conteudo: 'texto corrido 05' },
  ];

  let count = 0;

  reviewCarouselContent.id = 'review-carousel';
  reviewCarouselContent.style.minHeight = '10rem';
  reviewCarouselContent.style.padding = '1rem';
  reviewCarouselContent.style.border = '1rem solid black';
  reviewCarouselContent.style.display = 'grid';
  reviewCarouselContent.style.placeContent = 'center';

  section.id = 'review-content';
  section.style.display = 'grid';
  section.style.placeContent = 'center';

  footer.style.width = '80vw';
  footer.style.padding = '1rem';
  footer.style.display = 'grid';
  footer.style.gridTemplateColumns = '1fr 1fr';
  footer.style.placeSelf = 'center';

  previous.textContent = 'Previous';
  previous.style.fontSize = '1.2rem';

  next.textContent = 'Next';
  next.style.fontSize = '1.2rem';

  function article() {
    const article = document.createElement('article');

    article.id = `review-${reviews[count].id}`;
    article.innerHTML = `
      <h2>${reviews[count].titulo}</h2>
      <p>${reviews[count].conteudo}</p>
    `;

    return article;
  }

  function slider(direction) {
    if (direction === 'previous') {
      count--;
      if (count < 0) count = reviews.length - 1;
    }

    if (direction === 'next') {
      count++;
      if (count > reviews.length - 1) count = 0;
    }
  }

  previous.addEventListener('click', () => {
    slider('previous');

    section.innerHTML = '';
    section.appendChild(article());
  });

  next.addEventListener('click', () => {
    slider('next');

    section.innerHTML = '';
    section.appendChild(article());
  });

  footer.appendChild(previous);
  footer.appendChild(next);
  section.appendChild(article(0));
  reviewCarouselContent.appendChild(section);
  reviewCarouselContent.appendChild(footer);
  mainContent.appendChild(reviewCarouselContent);
};

export default reviewCarousel();
