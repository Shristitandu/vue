<template>
  <div id="app">
    <header>
      <h1>User Panel</h1>
      <nav>
        <button @click="toggleSignup">Signup</button>
        <button @click="toggleLogin">Login</button>
        <button @click="toggleAdminLogin">Admin</button>
        <button v-if="user" @click="viewCart">Cart ({{ cart.length }})</button>
      </nav>
    </header>

    <div v-if="showSignup" class="auth-section">
      <h2>Signup</h2>
      <form @submit.prevent="signup">
        <input v-model="signUpForm.firstName" placeholder="First Name" required />
        <input v-model="signUpForm.lastName" placeholder="Last Name" required />
        <input v-model="signUpForm.email" type="email" placeholder="Email" required />
        <input v-model="signUpForm.phone" type="tel" placeholder="Phone Number" required />
        <input v-model="signUpForm.password" type="password" placeholder="Password" required />
        <button type="submit">Create Account</button>
      </form>
    </div>

    <div v-if="showLogin" class="auth-section">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <input v-model="loginForm.email" type="email" placeholder="Email" required />
        <input v-model="loginForm.password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>

    <div v-if="user" class="user-panel">
      <h2>Welcome, {{ user.firstName }} {{ user.lastName }}</h2>
      <h2>Products</h2>
      <div v-for="product in products" :key="product.id" class="product">
        <h3>{{ product.name }}</h3>
        <p>Price: {{ product.price }}</p>
        <button @click="addToCart(product)">Add to Cart</button>
      </div>

      <h2>Cart</h2>
      <div v-for="item in cart" :key="item.id" class="cart-item">
        <h3>{{ item.name }}</h3>
        <p>Price: {{ item.price }}</p>
        <button @click="removeFromCart(item)">Remove</button>
      </div>

      <button @click="logout" class="logout-btn">Logout</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      showSignup: false,
      showLogin: false,
      user: null,
      signUpForm: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
      },
      loginForm: {
        email: '',
        password: '',
      },
      products: [],
      cart: [],
      errorMessage: '',
      adminCredentials: {
        email: 'admin@gm.com',
        password: 'admin', 
      },
    };
  },
  methods: {
    toggleSignup() {
      this.showSignup = !this.showSignup;
      this.showLogin = false; 
    },
    toggleLogin() {
      this.showLogin = !this.showLogin;
      this.showSignup = false; 
    },
    toggleAdminLogin() {
      this.showLogin = true; 
      this.loginForm.email = this.adminCredentials.email; 
      this.loginForm.password = this.adminCredentials.password; 
    },
    async signup() {
      try {
        const response = await axios.post('http://192.168.1.188:3000/users/Signup', this.signUpForm);
        console.log('Signup successful:', response.data);
        this.showSignup = false;
        alert('Account created successfully. Please log in.');
      } catch (error) {
        this.errorMessage = error.response?.data?.message || 'Sign Up Failed';
        console.error('Signup error:', error);
      }
    },
    async login() {
      if (this.loginForm.email === this.adminCredentials.email && this.loginForm.password === this.adminCredentials.password) {
        this.$router.push('/AdminPanel'); 
        return;
      }

      try {
        const response = await axios.post('http://192.168.1.188:3000/users/login', this.loginForm);
        this.user = response.data.user; 
        localStorage.setItem('token', response.data.token);
        this.showLogin = false;
        console.log('Login successful:', response.data);
      } catch (error) {
        this.errorMessage = error.response?.data?.message || 'Login Failed';
        console.error('Login error:', error);
      }
    },
    logout() {
      this.user = null;
      localStorage.removeItem('token');
      this.cart = [];
      console.log('Logged out successfully.');
    },
    async fetchProducts() {
      try {
        const response = await fetch('/products');
        this.products = await response.json();
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    addToCart(product) {
      this.cart.push(product);
    },
    removeFromCart(item) {
      this.cart = this.cart.filter((product) => product.id !== item.id);
    },
    viewCart() {
      alert('Cart items viewed!');
    },
  },
  mounted() {
    this.fetchProducts();
  },
};
</script>

<style scoped>
#app {
  text-align: center;
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

nav {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

button {
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background-color: #268cc6;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #003873;
}

.auth-section {
  margin: 20px 0;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f0f8ff;
}

.auth-section input {
  display: block;
  margin: 10px auto;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 80%;
}

.user-panel {
  margin-top: 20px;
}

.product, .cart-item {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  margin: 10px 0;
}

.error {
  color: red;
}
</style>
