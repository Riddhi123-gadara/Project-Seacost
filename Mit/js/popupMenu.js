let openModalPopup = document.querySelectorAll('[data-modal-target]');
let closeModalPopup = document.querySelectorAll('[data-close-button]');

openModalPopup.forEach(button => {
  button.addEventListener('click', () => {
    var modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  })
})

closeModalPopup.forEach(button => {
  button.addEventListener('click', () => {
    var modal = button.closest('.modal');
    closeModal(modal);
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active');
}