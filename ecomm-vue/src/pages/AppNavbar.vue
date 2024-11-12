<template>
  <nav class="AppNavbar">
    <div class="nav-items">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/AppProducts" class="nav-link">Products</router-link>
      <router-link to="/AppContactUs" class="nav-link">Contact Us</router-link>
    </div>
    <div class="search-cart">
      <input type="text" placeholder="Search" />
      <router-link to="/userpanelAuth" class="login-button">👤</router-link> 
      <router-link to="/AppCart" class="cart-button">🛒</router-link>
      <span v-if="cartCount > 0" class="cart-count">{{ cartCount }}</span>
    </div>
  </nav>
</template>

<script>
import store from './store';

export default {
  name: 'AppNavbar',
  computed: {
    cartCount() {
      return store.state.cartItems.length;
    },
  },
};
</script>

<style scoped>
.AppNavbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: hwb(114 73% 11%);
  padding: 20px;
  padding-inline: 100px;
  padding-right: 20px;
  font-size: xx-large;
}

.nav-items {
  display: flex;
  gap: 50px; 
}

.nav-link {
  text-decoration: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding: 10px 20px; 
  border-radius: 4px; 
  transition: background 0.3s;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.2);
}

.search-cart {
  display: flex;
  align-items: center;
}

.search-cart input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.login-button {
  font-size: 1.5rem;
  margin-left: 1rem;
  color: white;
  text-decoration: none; 
}

.login-button:hover {
  color: rgba(255, 255, 255, 0.8); 
}

.cart-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  margin-left: 1rem;
  position: relative; 
  cursor: pointer; 
}

.cart-count {
  background-color: red;
  border-radius: 50%;
  padding: 2px 6px;
  color: white;
  font-size: 14px;
  position: absolute; 
  top: -5px;
  right: -10px; 
}
</style>
