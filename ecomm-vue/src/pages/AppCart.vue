<template>
    <div class="cart">
      <h1>Shopping Cart</h1>
      <ul>
        <li v-for="item in cartItems" :key="item.id">
          {{ item.name }} - Rs. {{ item.price }}
          <button @click="removeItem(item.id)">Remove</button>
        </li>
      </ul>
      <div v-if="cartItems.length > 0">
        <p>Total: Rs. {{ total }}</p>
        <button @click="checkout">Checkout</button>
        <button @click="removeAll">Remove All</button>
      </div>
      <div v-else>
        <p>Your cart is empty.</p>
      </div>
    </div>
  </template>
  
  <script>
  import store from './store';
  
  export default {
    setup() {
      const cartItems = store.state.cartItems;
  
      const removeItem = (id) => {
        store.removeItem(id);
      };
  
      const removeAll = () => {
        store.removeAll();
      };
  
      const checkout = () => {
        if (cartItems.length === 0) {
          alert("Your cart is empty!");
          return;
        }
        alert(`Thank you for your purchase of Rs. ${store.total.value}!`);
        removeAll();
      };
  
      return {
        cartItems,
        total: store.total, // Computed property
        removeItem,
        removeAll,
        checkout,
      };
    }
  };
  </script>
  
  <style scoped>
  .cart {
    max-width: 400px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    margin-left: 10px;
  }
  </style>
  