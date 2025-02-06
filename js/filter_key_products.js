// function for filtering keyboard products 
let allProducts = document.querySelector('.all-filter');
let opticalProducts = document.querySelector('.optical-filter');
let mechanicalProducts = document.querySelector('.mechanical-filter');
let membraneProducts = document.querySelector('.membrane-filter');
let buttons = [allProducts, opticalProducts, mechanicalProducts, membraneProducts];


const filterKeyProducts = (event) => {
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
    })

    
}

allProducts.addEventListener('click', filterKeyProducts);
opticalProducts.addEventListener('click', filterKeyProducts);
mechanicalProducts.addEventListener('click', filterKeyProducts);
membraneProducts.addEventListener('click', filterKeyProducts);