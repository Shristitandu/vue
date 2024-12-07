
<template>
  <div class="app">
    <h1>Product Pages</h1>
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
  </div>
</template>

<script>
import store from './store';

export default {
  data() {
    return {
      products: [
        { id: 1, name: 'Luffy in his element', description: 'Luffy ready for action.', price: '5000', imageUrl: 'Luffy.webp' },
        { id: 2, name: 'Mikasa on the beach', description: 'Mikasa enjoying the beach.', price: '5500', imageUrl: 'Mikasa.avif' },
        { id: 3, name: 'Naruto Uzumaki', description: 'Naruto happy.', price: '6000', imageUrl: 'Naruto.webp' },
        { id: 4, name: 'Erza Scarlet', description: 'Erza Scarlet.', price: '6500', imageUrl: 'Erza.webp' },
        { id: 5, name: 'Goku Super Saiyan', description: 'Goku in his Super Saiyan form.', price: '7000', imageUrl: 'goku.jpg' },
        { id: 6, name: 'Zoro Ready to Fight', description: 'Zoro with his swords.', price: '7500', imageUrl: 'Zoro.jpg' },
        { id: 7, name: 'Toji', description: 'Toji with Megumi.', price: '8000', imageUrl: 'toji.webp' },
        { id: 8, name: 'Nezuko', description: 'Nezuko with pudding.', price: '8500', imageUrl: 'nezuko.webp' },
        { id: 9, name: 'Dazai', description: 'Dazai Osamu.', price: '9000', imageUrl: 'Dazai.webp' },
        { id: 10, name: 'Sagiri', description: 'Sagiri.', price: '9500', imageUrl: 'Sagiri.jpeg' },
        { id: 11, name: 'Happy', description: 'Happy the cat.', price: '5000', imageUrl: 'Happy.webp' },
        { id: 12, name: 'Senku', description: 'Dr. Stone.', price: '9900', imageUrl: 'senku.avif' },
        { id: 13, name: 'Gojo', description: 'Gojo ready to fight.', price: '9000', imageUrl: 'Gojo.avif' },
        { id: 14, name: 'Chopper', description: 'Tony Tony Chopper.', price: '500', imageUrl: 'Chopper.jpeg' },
        { id: 15, name: 'Gon and Killua', description: 'Gon and Killua being a menace.', price: '19000', imageUrl: 'Gon n killua.jpg' },
        { id: 16, name: 'Shuna', description: 'Shuna chilling.', price: '3500', imageUrl: 'shuna.jpg' },
        { id: 17, name: 'Levi', description: 'Levi Ackerman.', price: '40000', imageUrl: 'Levi.avif' },
        { id: 18, name: 'Yor', description: 'Yor chilling.', price: '9500', imageUrl: 'Yor.webp' },
      ],
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
  },
  methods: {
    addToCart(product) {
      store.addToCart(product);
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
  max-width: 300px;
  margin-bottom: 10px;
  border-radius: 8px;
}

.add-to-cart-btn {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.add-to-cart-btn:hover {
  background-color: #388e3c;
}
</style>
