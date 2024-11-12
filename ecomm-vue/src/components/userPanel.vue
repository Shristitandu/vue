<template>
    <div id="app">
      <header>
        <h1>User Panel</h1>
        <nav>
          <button @click="showSignup = !showSignup">Signup</button>
          <button @click="showLogin = !showLogin">Login</button>
          <button @click="viewCart">Cart ({{ cart.length }})</button>
        </nav>
      </header>
  
      <div v-if="showSignup">
        <h2>Signup</h2>
        <form @submit.prevent="signup">
          <input v-model="signupData.username" placeholder="Username" required />
          <input v-model="signupData.email" type="email" placeholder="Email" required />
          <input v-model="signupData.password" type="password" placeholder="Password" required />
          <button type="submit">Create Account</button>
        </form>
      </div>
  
      <div v-if="showLogin">
        <h2>Login</h2>
        <form @submit.prevent="login">
          <input v-model="loginData.email" type="email" placeholder="Email" required />
          <input v-model="loginData.password" type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </div>
  
      <div v-if="user">
        <h2>Products</h2>
        <div v-for="product in products" :key="product.id">
          <h3>{{ product.name }}</h3>
          <p>Price: {{ product.price }}</p>
          <button @click="addToCart(product)">Add to Cart</button>
        </div>
  
        <h2>Cart</h2>
        <div v-for="item in cart" :key="item.id">
          <h3>{{ item.name }}</h3>
          <p>Price: {{ item.price }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showSignup: false,
        showLogin: false,
        user: null,
        signupData: {
          username: '',
          email: '',
          password: ''
        },
        loginData: {
          email: '',
          password: ''
        },
        products: [],
        cart: []
      };
    },
    methods: {
      async signup() {
        try {
          const response = await fetch('/users/Signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.signupData)
          });
          const data = await response.json();
          console.log('Signup successful:', data);
        } catch (error) {
          console.error('Signup error:', error);
        }
      },
      async login() {
        try {
          const response = await fetch('/users/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.loginData)
          });
          const data = await response.json();
          this.user = data.user; 
          console.log('Login successful:', data);
        } catch (error) {
          console.error('Login error:', error);
        }
      },
      addToCart(product) {
        this.cart.push(product);
      },
      viewCart() {
        alert('View Cart Clicked!'); 
      }
    },
    mounted() {
      
      this.fetchProducts();
    },
    async fetchProducts() {
      try {
        const response = await fetch('/products'); 
        this.products = await response.json();
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
  };
  </script>
  
  <style scoped>
.app {
  text-align: center;
  margin: 20px;
  position: relative;
}

.cart {
  position: fixed;
  top: 10px;
  right: 10px;
  background: #ff5722;
  color: white;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  z-index: 1000;
}

.cart-overlay {
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  overflow-y: auto;
  z-index: 1001;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cart-content {
  background: #333;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
}

.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding: 10px;
  background: #444;
  border-radius: 8px;
}

.cart-item-image {
  width: 60px;
  height: 60px;
  object-fit: cover;
  margin-right: 15px;
}

.cart-item-details {
  flex-grow: 1;
}

.remove-btn {
  background-color: #ff5722;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.remove-btn:hover {
  background-color: #e64a19;
}

.cart-total {
  margin-top: 20px;
  font-size: 18px;
}

.product-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 40px;
}

.product {
  width: 48%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 10px;
}
.product-image {
  max-width: 100%;
  height: auto;
  transition: opacity 0.3s;
}

.product-image[loading="lazy"] {
  opacity: 0.5; 
  max-width: 100%;
  height: auto;
  transition: opacity 0.3s;
}

.add-to-cart-btn {
  background-color: #ff5722;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-to-cart-btn:hover {
  background-color: #e64a19;
}

.add-to-cart-btn:active {
  background-color: #d84315;
}
</style>