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