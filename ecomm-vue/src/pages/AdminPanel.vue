<template>
    <div class="app">
      <div class="cart" @click="toggleCart">
        <span>Cart 🛒 ({{ cartItems.length }})</span>
      </div>
  
      <div v-if="showCart" class="cart-overlay" @click="closeCart">
        <div class="cart-content" @click.stop>
          <h2>Shopping Cart</h2>
          <div v-if="cartItems.length === 0">Your cart is empty.</div>
          <div v-else>
            <div v-for="(item, index) in cartItems" :key="index" class="cart-item">
              <img :src="item.product.imageUrl" class="cart-item-image" loading="lazy" />
              <div class="cart-item-details">
                <p>{{ item.product.name }}</p>
                <p>Price: Rs. {{ item.product.price }}</p>
                <p>
                  Quantity:
                  <button @click="updateQuantity(item, -1)">-</button>
                  {{ item.quantity }}
                  <button @click="updateQuantity(item, 1)">+</button>
                </p>
              </div>
              <button @click="removeFromCart(item)" class="remove-btn">Remove</button>
            </div>
            <div class="cart-total">
              <strong>Total: Rs. {{ cartTotal }}</strong>
            </div>
          </div>
        </div>
      </div>
  
      <h1>Product Page</h1>
  
      <div v-for="(pair, index) in displayedProductPairs" :key="index" class="product-row">
        <div v-for="(product, idx) in pair" :key="idx" class="product">
          <h1>{{ product.name }}</h1>
          <img 
            :src="shouldLoadEagerly(idx) ? product.imageUrl : placeholderImage" 
            class="product-image" 
            :loading="shouldLoadEagerly(idx) ? 'eager' : 'lazy'"
            @load="onImageLoad(product, idx)"
          />
          <p>{{ product.description }}</p>
          <p>Price: Rs. {{ product.price }}</p>
          <button @click="addToCart(product)" class="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
  
    
      <AdminPanel />
      <userpanelAuth />
    </div>
  </template>
  
  <script>
  import AdminPanel from './AdminPanel.vue';
  import userpanelAuth from './userpanelAuth.vue';
  
  export default {
    components: {
      AdminPanel,
      userpanelAuth
    },
    
    data() {
      return {
        products: [
          { name: 'Luffy in his element', description: 'Luffy ready for action.', price: 5000, imageUrl: 'Luffy.webp' },
          { name: 'Mikasa on the beach', description: 'Mikasa enjoying the beach.', price: 5500, imageUrl: 'Mikasa.avif' },
          { name: 'Naruto Uzumaki', description: 'Naruto happy.', price: 6000, imageUrl: 'Naruto.webp' },
          { name: 'Erza Scarlet', description: 'Erza Scarlet.', price: 6500, imageUrl: 'Erza.webp' },
          { name: 'Goku Super Saiyan', description: 'Goku in his Super Saiyan form.', price: 7000, imageUrl: 'goku.jpg' },
          { name: 'Zoro Ready to Fight', description: 'Zoro with his swords.', price: 7500, imageUrl: 'Zoro.jpg' },
          { name: 'Toji', description: 'Toji with Megumi.', price: 8000, imageUrl: 'toji.webp' },
          { name: 'Nezuko', description: 'Nezuko with pudding.', price: 8500, imageUrl: 'nezuko.webp' },
          { name: 'Dazai', description: 'Dazai Osamu.', price: 9000, imageUrl: 'Dazai.webp' },
          { name: 'Sagiri', description: 'Sagiri.', price: 9500, imageUrl: 'Sagiri.jpeg' },
          { name: 'Happy', description: 'Happy the cat.', price: 5000, imageUrl: 'Happy.webp' },
          { name: 'Senku', description: 'Dr. Stone.', price: 9900, imageUrl: 'senku.avif' },
          { name: 'Gojo', description: 'Gojo ready to fight.', price: 9000, imageUrl: 'Gojo.avif' },
          { name: 'Chopper', description: 'Tony Tony Chopper.', price: 500, imageUrl: 'Chopper.jpeg' },
          { name: 'Gon and Killua', description: 'Gon and Killua being a menace.', price: 19000, imageUrl: 'Gon n killua.jpg' },
          { name: 'Shuna', description: 'Shuna chilling.', price: 3500, imageUrl: 'shuna.jpg' },
          { name: 'Levi', description: 'Levi Ackerman.', price: 40000, imageUrl: 'Levi.avif' },
          { name: 'Yor', description: 'Yor chilling.', price: 9500, imageUrl: 'Yor.webp' },
        ],
        cartItems: [],
        showCart: false,
        lazyLoadedImages: new Set(),
        placeholderImage: 'placeholder.jpg',
      };
    },
  
    computed: {
      displayedProductPairs() {
        const pairs = [];
        for (let i = 0; i < this.products.length; i += 2) {
          pairs.push(this.products.slice(i, i + 2));
        }
        return pairs;
      },
      cartTotal() {
        return this.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
      },
    },
  
    methods: {
      addToCart(product) {
        const existingItem = this.cartItems.find((item) => item.product === product);
        if (existingItem) {
          existingItem.quantity++;
        } else {
          this.cartItems.push({ product, quantity: 1 });
        }
      },
      removeFromCart(item) {
        this.cartItems = this.cartItems.filter((cartItem) => cartItem !== item);
      },
      updateQuantity(item, amount) {
        if (item.quantity + amount <= 0) {
          this.removeFromCart(item);
        } else {
          item.quantity += amount;
        }
      },
      toggleCart() {
        this.showCart = !this.showCart;
      },
      closeCart() {
        this.showCart = false;
      },
      shouldLoadEagerly(index) {
        return index < 2;
      },
      onImageLoad(product, index) {
        if (index >= 2) {
          this.lazyLoadedImages.add(product.imageUrl);
        }
      },
    },
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
  }
  
  .product-image {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
  
  .add-to-cart-btn {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .add-to-cart-btn:hover {
    background-color: #43a047;
  }
  </style>
  