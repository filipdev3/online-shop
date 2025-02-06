let allMousepads = document.querySelector('.all-mousepads-filter');
let camoMousepads = document.querySelector('.camo-filter');
let blackMousepads = document.querySelector('.black-filter');
let gamingMousepads = document.querySelector('.gaming-filter');
let buttons = [allMousepads, camoMousepads, blackMousepads, gamingMousepads];

const filterMousepadsProducts = (event) => {
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

    productItems.forEach((item) => {
        if(category === 'all'){
            item.style.display = 'block';
        }
    });

    productItems.forEach((item) => {
        if(item.getAttribute('data-category').includes(category)){
            item.style.display = 'block';
        }
    });
}

allMousepads.addEventListener('click', filterMousepadsProducts);
camoMousepads.addEventListener('click', filterMousepadsProducts);
blackMousepads.addEventListener('click', filterMousepadsProducts);
gamingMousepads.addEventListener('click', filterMousepadsProducts);