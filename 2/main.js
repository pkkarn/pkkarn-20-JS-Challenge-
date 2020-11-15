const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let titcketPrice = +movieSelect.value;

// Update Select Count

function updateSelectedCount() {
    const seatSelected = document.querySelectorAll('.row .seat.selected');
    const SelectedSeatCount = seatSelected.length;
    count.innerText = SelectedSeatCount;
    total.innerText = SelectedSeatCount * titcketPrice;
}

// Movie Change Event 

movieSelect.addEventListener('change', (e) => {
    
    titcketPrice = +e.target.value;
    updateSelectedCount();
})


container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
    
})