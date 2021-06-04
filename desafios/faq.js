const faq = () => {
  const mainContent = document.querySelector('main.main-content');

  const faqContent = document.createElement('section');
  const title = document.createElement('h2');
  const faqsSection = document.createElement('section');

  const faqs = [
    { quest: 'Qual seu nome?', answer: 'André' },
    { quest: 'Qual sua idade?', answer: '30 anos' },
    { quest: 'Qual seu país?', answer: 'Brasil' },
  ];

  faqContent.id = 'faq';
  faqContent.style.minHeight = '10rem';
  faqContent.style.border = '1rem solid black';
  faqContent.style.display = 'grid';
  faqContent.style.placeContent = 'center';
  faqContent.style.position = 'relative';
  faqContent.style.padding = '1rem';

  title.textContent = 'Sistema de FAQ';
  title.style.paddingBottom = '1rem';

  for (let count = 0; count < faqs.length; count++) {
    const article = document.createElement('article');
    const section = document.createElement('section');
    const h3 = document.createElement('h3');
    const button = document.createElement('button');
    const p = document.createElement('p');

    h3.textContent = faqs[count].quest;
    p.textContent = faqs[count].answer;
    button.textContent = '+';

    article.style.textAlign = 'center';
    article.style.overflow = 'hidden';

    section.style.backgroundColor = '#b3b3b3';
    section.style.display = 'flex';
    section.style.justifyContent = 'space-between';
    section.style.alignItems = 'center';

    h3.style.paddingLeft = '0.5rem';

    button.dataset.faqnumber = count;
    button.style.backgroundColor = 'transparent';
    button.style.border = 'none';
    button.style.padding = '0 0.5rem';
    button.style.fontSize = '1.5rem';
    button.style.cursor = 'pointer';

    p.dataset.faqnumber = count;
    p.dataset.faqshow = 'close';
    p.style.height = 0;
    p.style.transition = 'all 0.3s';

    section.appendChild(h3);
    section.appendChild(button);
    article.appendChild(section);
    article.appendChild(p);
    faqsSection.appendChild(article);
  }

  faqContent.appendChild(title);
  faqContent.appendChild(faqsSection);
  mainContent.appendChild(faqContent);

  faqContent.querySelectorAll('button').forEach((faqBtn) => {
    faqBtn.addEventListener('click', (e) => {
      e.preventDefault();

      const resposta = faqContent.querySelector(
        `p[data-faqnumber="${faqBtn.getAttribute('data-faqnumber')}"]`,
      );

      if (resposta.getAttribute('data-faqshow') === 'close') {
        resposta.style.height = 'auto';
        resposta.dataset.faqshow = 'open';
        return;
      }

      if (resposta.getAttribute('data-faqshow') === 'open') {
        resposta.style.height = '0';
        resposta.dataset.faqshow = 'close';
      }
    });
  });
};

export default faq();
