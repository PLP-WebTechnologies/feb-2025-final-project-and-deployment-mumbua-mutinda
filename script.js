let cart = [];

function addToCart(product) {
  cart.push(product);
  alert(`${product.name} has been added to your cart!`);
}


function updateCart() {
  const cartContainer = document.getElementById("cartItems");
  cartContainer.innerHTML = ""; // Clear previous items
  cart.forEach(item => {
    const itemElement = document.createElement("div");
    itemElement.textContent = `${item.name} - $${item.price}`;
    cartContainer.appendChild(itemElement);
  });
}


function checkout() {
  alert("Proceeding to checkout...");
}


document.querySelectorAll(".add-to-cart-button").forEach(button => {
  button.addEventListener("click", (e) => {
    const product = { name: e.target.dataset.productName, price: e.target.dataset.productPrice };
    addToCart(product);
  });
});
