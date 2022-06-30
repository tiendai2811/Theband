const buyBtns = document.querySelectorAll('.buy-tickets-js')
const modal = document.querySelector('.modal')
const modalContainer = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.js-modal-close')


function showBuyTickets(){
    modal.classList.add('open')
}
function hideBuyTickets(){
    modal.classList.remove('open')
}
for(const buyBtn of buyBtns){
    buyBtn.addEventListener('click', showBuyTickets)
}
modalClose.addEventListener('click',hideBuyTickets)
modal.addEventListener('click',hideBuyTickets)
modalContainer.addEventListener('click',function (event) {
    event.stopPropagation()
})
