const currency_oneEL = document.getElementById('currency-one');
const amount_oneEL = document.getElementById('amount-one');
const currency_twoEL = document.getElementById('currency-two');
const amount_twoEL = document.getElementById('amount-two');
const ratee = document.getElementById('rate');
const swap = document.getElementById('swap');


function calculate() {
    const currency_one = currency_oneEL.value;
    const currency_two = currency_twoEL.value;
    
    fetch(`https://v6.exchangerate-api.com/v6/758b834b4d4e2e01837a0fab/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
        const rate = data.conversion_rates[currency_two];
        // console.log(rates);
        ratee.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
        amount_twoEL.value = (amount_oneEL.value * rate).toFixed(2);

    });
}

// Event listner
currency_oneEL.addEventListener('change', calculate);
amount_oneEL.addEventListener('input',calculate);
currency_twoEL.addEventListener('change', calculate);
amount_twoEL.addEventListener('input',calculate);

swap.addEventListener('click', () => {
    const temp = currency_oneEL.value;
    currency_oneEL.value = currency_twoEL.value;
    currency_twoEL.value = temp;
    calculate();
});