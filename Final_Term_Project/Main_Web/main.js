let search = document.querySelector('.search-box');
    let menuIcon = document.getElementById('menu-icon');
    let navbar = document.querySelector('ul.navbar');

    document.querySelector('#search-icon').onclick = () => {
        search.classList.toggle('active');
    }

    menuIcon.onclick = () => {
        navbar.classList.toggle('active');
    }

    let header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    })


// Cart functionality
let cart = [];

// Add to cart button click event
document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', function() {
        const product = this.closest('.box');
        const name = product.getAttribute('data-name');
        const price = parseFloat(product.getAttribute('data-price'));

        // Add item to cart
        cart.push({ name, price });

        // Save cart to local storage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Optional: Show a message or update UI to indicate item added
        alert(`${name} added to cart!`);
    });
});
