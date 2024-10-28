//TASK TWO
const priceElement = document.getElementById("product-price");
const sizeSelector = document.getElementById("size-selector");

sizeSelector.addEventListener("change", (event) => {
    const selectedPrice = event.target.value;
    priceElement.textContent = `$${selectedPrice}`;
});
const placeOrder = document.getElementById("place-order");
const orderStatus = document.getElementById("order-status");

placeOrder.addEventListener("click", () => {
    orderStatus.textContent = "Item added to order";
});

// TASK THREE
const quantityInput = document.getElementById('quantity');
const orderSummary = document.getElementById('order-summary');

function updateTotalPrice() {
    const productPrice = parseFloat(sizeSelector.value);
    const quantity = parseInt(quantityInput.value);
    const totalPrice = productPrice * quantity;
    
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

sizeSelector.addEventListener('change', updateTotalPrice);
quantityInput.addEventListener('input', updateTotalPrice);