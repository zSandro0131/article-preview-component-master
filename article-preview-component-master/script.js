const shareIcon = document.querySelector('.shareIcon')
const modal = document.querySelector('.modal')
const triangle = document.querySelector('.modal-triangle')

function Modal() {
   if(modal.classList.contains('active')) {
    modal.classList.remove('active')
    triangle.classList.remove('active')
   } else {
    modal.classList.add('active')
    triangle.classList.add('active')
   }
}

shareIcon.addEventListener('click' , Modal)