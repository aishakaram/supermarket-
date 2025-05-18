const products = [
  { name: "Apple", icon: "🍎" },
  { name: "Banana", icon: "🍌" },
  { name: "Milk", icon: "🥛" },
  { name: "Bread", icon: "🍞" },
  { name: "Cheese", icon: "🧀" },
  { name: "Eggs", icon: "🥚" },
  { name: "Orange", icon: "🍊" },
  { name: "Tomato", icon: "🍅" },
  { name: "Carrot", icon: "🥕" },
  { name: "Chicken", icon: "🍗" },
  { name: "Fish", icon: "🐟" },
  { name: "Water Bottle", icon: "💧" },
  { name: "Cereal", icon: "🥣" },
  { name: "Yogurt", icon: "🍶" }
];

const productList = document.getElementById('product-list');
const cartItems = document.getElementById('cart-items');

function addToCart(productName) {
  const item = document.createElement('div');
  item.className = 'cart-item';
  item.innerHTML = `
    <span>${productName}</span>
    <button class="remove-btn" onclick="this.parentElement.remove()">x</button>
  `;
  cartItems.appendChild(item);
}

products.forEach(product => {
  const div = document.createElement('div');
  div.className = 'product';
  div.innerHTML = `
    <div class="icon">${product.icon}</div>
    <h3>${product.name}</h3>
    <button onclick="addToCart('${product.name}')">Add to Cart</button>
  `;
  productList.appendChild(div);
});
