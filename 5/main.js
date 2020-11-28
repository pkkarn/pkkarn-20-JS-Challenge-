const main = document.getElementById('main');
const addUsrBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMilBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calWealBtn = document.getElementById('calcaulate-wealth');

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();
getRandomUser();
getRandomUser();
getRandomUser();
getRandomUser();
getRandomUser();
getRandomUser();

// fetch random user and add money
async function getRandomUser() {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();

    const user = data.results[0];
    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 2000000)
    };
   
    addData(newUser);
}

// add New object
function addData(obj) {
    data.push(obj);

    updateDOM();

}

// update DOM

function updateDOM(providedData = data) {
    // clear main div

    main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

    
    providedData.forEach(item => {
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;
        main.appendChild(element);
    });
}

console.log(data);
// Formatinng money

function formatMoney(number) {
    return '$'+number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');  // 12,345.67
}

// updat Double money
function doubleMoney(providedData = data) {
    data = data.map((user) => {
      return { ...user, money: user.money * 2 };  // return { ...user, money: user.money * 2 };
    });  // [user.name, money: user.money *2 ]
    updateDOM();
}

// Sort Money:

function sortMoney() {
    data.sort((a, b) => b.money - a.money);
    updateDOM();
}

// showMil 

function showMil() {
    data = data.filter(function(user) {
        return user.money > 1000000;
    });
    updateDOM();
}
// Calcualte wealth
function calWeal() {
    const wealth = data.reduce((acc, user) => (acc += user.money), 0);
    const wealthEl = document.createElement('div');
    wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(wealth)}</strong></h3>`;
    main.appendChild(wealthEl);
}
// addUser

addUsrBtn.addEventListener('click',getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click',sortMoney);
showMilBtn.addEventListener('click', showMil);
calWealBtn.addEventListener('click', calWeal);