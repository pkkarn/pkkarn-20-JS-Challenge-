const toggle = document.getElementById('toggle')
const closeBtn = document.getElementById('close')
const openBtn = document.getElementById('open')
const modal = document.getElementById('modal')


toggle.addEventListener('click', () => document.body.classList.toggle('show-nav'));

//show modal

openBtn.addEventListener('click', () => modal.classList.add('show-modal'));

closeBtn.addEventListener('click', ()=> modal.classList.remove('show-modal'));

// Hide modal form on outside click
// e.target == modal ? modal.classList.remove('show-modal'): false
window.addEventListener('click',function(e) {
    if (e.target == modal) {
        modal.classList.remove('show-modal')
    }
})