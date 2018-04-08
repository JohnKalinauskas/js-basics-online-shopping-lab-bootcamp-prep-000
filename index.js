function addToCart(item) {
  cart.push({ itemName : item , itemPrice : Math.floor((Math.random() * 100) + 1)});

  return `${item} has been added to your cart.`;
}