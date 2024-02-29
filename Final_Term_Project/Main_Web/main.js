const text = "Trends, your ultimate destination for cutting-edge technology accessories! Dive into a world where innovation meets style, and discover a curated collection of top-notch tech accessories that seamlessly blend functionality with flair. From state-of-the-art phone cases to ergonomic laptop stands, we've handpicked the latest trends to elevate your tech experience. Explore our diverse range of products designed to complement your gadgets while reflecting your unique personality.";

let i = 0;
function type() {
    if (i < text.length) {
        document.getElementById('typing-text').textContent += text.charAt(i);
        i++;
        setTimeout(type, 20); 
    }
}
type();


let cartItemsCount = localStorage.getItem('cartItemsCount') ? parseInt(localStorage.getItem('cartItemsCount')) : 0;

// Function to update cart items count
function updateCartItemsCount() {
    document.getElementById("cart-items-count").innerText = cartItemsCount.toString();
}

// Update cart items count on page load
updateCartItemsCount();

// Example: Increment cart items count
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        cartItemsCount++;
        localStorage.setItem('cartItemsCount', cartItemsCount.toString());
        updateCartItemsCount();
    });
});

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

// Search functionality
document.querySelector('.search-box input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const searchTerm = this.value.trim().toLowerCase(); // Convert search term to lowercase

        // Find the box with matching data-name
        const box = Array.from(document.querySelectorAll('.box')).find(box => {
            return box.getAttribute('data-name').toLowerCase().includes(searchTerm);
        });

        if (box) {
            // Scroll to the box
            box.scrollIntoView({ behavior: 'smooth' });
        } else {
            alert('Item not found!');
        }

        // Clear the search input
        this.value = '';
    }
});



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
