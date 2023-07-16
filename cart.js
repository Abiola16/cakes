// Display Cart Items
function displayCartItems() {
    var cartItems = getCartItems();
    var cartItemsContainer = document.querySelector("#cart-items tbody");
    var cartTotalElement = document.getElementById("cart-total");
  
    // Clear the existing cart items
    cartItemsContainer.innerHTML = "";
  
    // Loop through each product in the cart and create cart item rows
    cartItems.forEach(function(product, index) {
      var row = document.createElement("tr");
      var subtotal = product.price * product.quantity;
  
      row.innerHTML = `
        <td><img src="${product.image}" alt="${product.name}"></td>
        <td>${product.name}</td>
        <td>#${product.price}</td>
        <td>
          <div class="quantity-container">
            <span class="quantity-action" onclick="decrementQuantity(${index})">&minus;</span>
            <input type="number" min="1" value="${product.quantity}" class="quantity-input" onchange="changeQuantity(${index}, this.value)">
            <span class="quantity-action" onclick="incrementQuantity(${index})">+</span>
          </div>
        </td>
        <td>#${subtotal}</td>
        <td><button onclick="deleteFromCart(${index})">Delete</button></td>
      `;
  
      cartItemsContainer.appendChild(row);
    });
  
    // Update the total price
    var totalPrice = calculateTotalPrice(cartItems);
    cartTotalElement.textContent = "#" + totalPrice;
  }
  
  // Decrease Quantity
  function decrementQuantity(index) {
    var cartItems = getCartItems();
    if (cartItems[index].quantity > 1) {
      cartItems[index].quantity--;
      saveCartItems(cartItems);
      displayCartItems();
    }
  }
  
  // Increase Quantity
  function incrementQuantity(index) {
    var cartItems = getCartItems();
    cartItems[index].quantity++;
    saveCartItems(cartItems);
    displayCartItems();
  }
  
  // Change Quantity
  function changeQuantity(index, newQuantity) {
    var cartItems = getCartItems();
    newQuantity = parseInt(newQuantity);
    if (newQuantity > 0) {
      cartItems[index].quantity = newQuantity;
      saveCartItems(cartItems);
      displayCartItems();
    }
  }
  
  // Delete from Cart
  function deleteFromCart(index) {
    var cartItems = getCartItems();
    cartItems.splice(index, 1);
    saveCartItems(cartItems);
    displayCartItems();
  }
  
  // Initial display of cart items
  displayCartItems();
  

  // Common function to retrieve cart items from local storage
function getCartItems() {
    return JSON.parse(localStorage.getItem("cartItems")) || [];
  }
  
  // Common function to save cart items to local storage
  function saveCartItems(cartItems) {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
  
  // Common function to calculate the total price
  function calculateTotalPrice(cartItems) {
    var totalPrice = 0;
    cartItems.forEach(function(product) {
      totalPrice += product.price * product.quantity;
    });
    return totalPrice;
  }
  

  // Add to Cart
function addToCart(image, name, price, quantityId) {
    var quantityInput = document.getElementById(quantityId);
    var quantity = parseInt(quantityInput.value);
    if (quantity > 0) {
      var product = {
        image: image,
        name: name,
        price: price,
        quantity: quantity
      };
  
      // Get existing cart items from local storage or initialize an empty array
      var cartItems = getCartItems();
  
      // Check if the item is already in the cart
      var existingItem = cartItems.find(function(item) {
        return item.name === product.name;
      });
  
      if (existingItem) {
        // Display an alert if the item is already in the cart
        alert("Item has already been selected");
      } else {
        // Add the current product to the cart
        cartItems.push(product);
  
        // Save the updated cart items back to local storage
        saveCartItems(cartItems);
  
        // Reset quantity input to 1
        quantityInput.value = 1;
      }
    }
  }
  