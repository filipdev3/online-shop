// function for filtering mouse products

let allMiceBtn = document.querySelector('.all-mouse-filter');
let wirelessBtn = document.querySelector('.wireless-filter');
let cableBtn = document.querySelector('.cable-filter');
let opticalBtn = document.querySelector('.optical-filter');
let buttons = [allMiceBtn, wirelessBtn, cableBtn, opticalBtn];

const filterMouseProducts = (event) => {
    let button = event.target;
    let category = button.getAttribute('data-category');
    let productItems = document.querySelectorAll('.item');

    buttons.forEach((btn) => {
        btn.classList.remove('active');
    });

    button.classList.add('active');

    productItems.forEach((item) => {
        item.style.display = 'none';
    });

    if(category === 'all'){
        productItems.forEach((item) => {
            item.style.display = 'block';
        });
    }

    productItems.forEach((item) => {
        if(item.getAttribute('data-category').includes(category)){
            item.style.display = 'block';
        }
    });
}

allMiceBtn.addEventListener('click', filterMouseProducts);
wirelessBtn.addEventListener('click', filterMouseProducts);
cableBtn.addEventListener('click', filterMouseProducts);
opticalBtn.addEventListener('click', filterMouseProducts);