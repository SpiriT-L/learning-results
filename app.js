const modal = document.querySelector('#modal');
const content = document.querySelector('#content');
const backdrop = document.querySelector('#backdrop');

content.addEventListener('click', openCard);
backdrop.addEventListener('click', closeModal);

function openCard() {
  modal.classList.add('open');
}

function closeModal() {
  modal.classList.remove('open');
}
