export const initAccordeon = () => {
  const accordeons = document.querySelectorAll('.accordeon');

  if (!accordeons) {
    return;
  }

  accordeons.forEach((accordeon) => accordeon.classList.remove('accordeon--no-js'));

  accordeons.forEach((accordeon) => {
    const accordeonTitle = accordeon.querySelector('.accordeon__title');
    accordeonTitle.addEventListener('click', () => {
      const accordeonIsOpen = accordeon.classList.contains('accordeon--active')
        ? true
        : false;

      const accordeonPanel = accordeon.querySelector('.accordeon__content');

      accordeons.forEach((accordeonItem) => {
        accordeonItem.classList.remove('accordeon--active');
        accordeonItem.querySelector('.accordeon__content').style.maxHeight = null;
      });

      if (!accordeonIsOpen) {
        accordeon.classList.add('accordeon--active');
        accordeonPanel.style.maxHeight = `${accordeonPanel.scrollHeight}px`;
      }
    });
  });
};
