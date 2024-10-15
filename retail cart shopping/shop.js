// Function to add items to cart
function addToCart(itemDetails) {
    if()
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.push(itemDetails);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    alert("Item added to cart!");
}

// Function to add items to wishlist
function addToWishlist(itemDetails) {
    let wishlistItems = JSON.parse(localStorage.getItem("wishlistItems")) || [];
    wishlistItems.push(itemDetails);
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
    alert("Item added to wishlist!");
    renderWishlist(); // Refresh the wishlist display
}

// Function to remove items from wishlist
function removeFromWishlist(index) {
    let wishlistItems = JSON.parse(localStorage.getItem("wishlistItems")) || [];
    wishlistItems.splice(index, 1); // Remove the item at the provided index
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
    renderWishlist(); // Refresh the wishlist display
}

// Function to render wishlist items in the UI
function renderWishlist() {
    let wishlistItems = JSON.parse(localStorage.getItem("wishlistItems")) || [];
    let wishlistContainer = document.getElementById("wishlistItems");

    // Clear the current items in the list
    wishlistContainer.innerHTML = "";

    if (wishlistItems.length === 0) {
        wishlistContainer.innerHTML = "<p>Your wishlist is empty.</p>";
    } else {
        wishlistItems.forEach((item, index) => {
            let wishlistItem = `
                <li>
                    <img src="${item.image}" alt="item image" width="50" height="50">
                    <p>Price: ${item.price}</p>
                    <p>Size: ${item.size}</p>
                    <p>Color: ${item.color}</p>
                    <p>Availability: ${item.availability}</p>
                    <p>Rating: ${item.stars}</p>
                    <button onclick="removeFromWishlist(${index})">Remove</button>
                </li>
            `;
            wishlistContainer.innerHTML += wishlistItem;
        });
    }
}

// Adding event listeners to "Add to Cart" buttons across pages
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        let item = this.closest('.item');
        
        // Capture item details
        let itemDetails = {
            image: item.querySelector('img').src,
            price: item.querySelector('.price').innerText,
            size: item.querySelector('.size').innerText,
            color: item.querySelector('.color').innerText,
            availability: item.querySelector('.availability').innerText,
            stars: item.querySelector('.stars').innerHTML
        };

        // Call function to add the item to cart
        addToCart(itemDetails);
    });
});

// Adding event listeners to "Add to Wishlist" buttons across pages
document.querySelectorAll('.heart-button').forEach(button => {
    button.addEventListener('click', function() {
        let item = this.closest('.item');
        
        // Capture item details
        let itemDetails = {
            image: item.querySelector('img').src,
            price: item.querySelector('.price').innerText,
            size: item.querySelector('.size').innerText,
            color: item.querySelector('.color').innerText,
            availability: item.querySelector('.availability').innerText,
            stars: item.querySelector('.stars').innerHTML
        };

        // Call function to add the item to wishlist
        addToWishlist(itemDetails);
    });
});

// Render the wishlist on page load
window.onload = function() {
    renderWishlist();
};
