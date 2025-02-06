// function for filtering headset products

let allHeadBtn = document.querySelector('.all-head-filter');
let wirelessBtn = document.querySelector('.wireless-filter');
let cableBtn = document.querySelector('.cable-filter');
let surroundBtn = document.querySelector('.surround-filter');
let headButtons = [allHeadBtn, wirelessBtn, cableBtn, surroundBtn];


const filterHeadProducts = (event) => {
    let button = event.target;
    let category = button.getAttribute('data-category');
    let productItems = document.querySelectorAll('.item');

    headButtons.forEach((btn) => {
        btn.classList.remove('active');
    });

    button.classList.add('active');

    productItems.forEach((item) => {
        item.style.display = 'none';
    });

    if (category === 'all') {
        productItems.forEach((item) => {
            item.style.display = 'block';
        });
    }

    productItems.forEach((item) => {
        if(item.getAttribute('data-category').includes(category)) {
            item.style.display = 'block';
        }
    });
}

allHeadBtn.addEventListener('click', filterHeadProducts);
wirelessBtn.addEventListener('click', filterHeadProducts);
cableBtn.addEventListener('click', filterHeadProducts);
surroundBtn.addEventListener('click', filterHeadProducts);