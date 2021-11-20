const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#e91e63', rgb: '233,30,99' },
  { hex: '#9c27b0', rgb: '156,39,176' },
  { hex: '#673ab7', rgb: '103,58,183' },
  { hex: '#3f51b5', rgb: '63,81,181' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#00bcd4', rgb: '0,188,212' },
  { hex: '#009688', rgb: '0,150,136' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
  { hex: '#ff9800', rgb: '255,152,0' },
  { hex: '#795548', rgb: '121,85,72' },
  { hex: '#607d8b', rgb: '96,125,139' },
];
import colorCardTpl from "../templates/color-card.hbs";
import colorCardsTpl from "../templates/color-cards.hbs";


// console.log(colorCardsTpl(colors));
console.log(colorCardTpl(colors));


const paletteContainer = document.querySelector('.js-palette');

paletteContainer.insertAdjacentHTML('beforeend', createColorCardsMarkup(colors));

paletteContainer.addEventListener('click', onPaletteContainerClick);

function createColorCardsMarkup(color) {
  // return color.map(color=>colorCardTpl(color))
  //   .join('');
  return colorCardsTpl(colors);
}

function onPaletteContainerClick(e) {

  if (!e.target.classList.contains('color-swatch')) {
    return;
  }

  const parentColorCard = e.target.closest('.color-card');

  removeActiveCardClass();
  addActiveCardClass(parentColorCard);
  setBodyBgColor(e.target.dataset.hex);
}

function setBodyBgColor(color) {
  document.body.style.backgroundColor = color;
}

function removeActiveCardClass() {
  const currentActiveCard = document.querySelector('.color-card.is-active');

  if (currentActiveCard) {
    currentActiveCard.classList.remove('is-active');
  }
}

function addActiveCardClass(card) {
  card.classList.add('is-active');
}