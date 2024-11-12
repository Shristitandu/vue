<template>
  <div class="home-page">
    <main class="products-section">
      <div class="category" v-for="(category, index) in categories" :key="index">
        <h2>{{ category.title }}</h2>
        <div class="products">
          <div
            v-for="product in category.products"
            :key="product.id"
            class="product-card"
          >
            <img :src="product.image" alt="Product Image" />
            <h3>{{ product.name }}</h3>
            <p>{{ product.price || product.discountedPrice }}</p>
            <button @click.stop="addToCart(product)">Add to Cart</button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import store from './store';

export default {
  name: 'HomePage',
  data() {
    return {
      categories: [
        {
          title: "Featured",
          products: [
            { id: 1, name: "Luffy Fishing", price: "$199", image: "Luffy.webp" },
            { id: 2, name: "Mikasa by the beach", price: "$249", image: "Mikasa.avif" },
            { id: 3, name: "Levi in his element", price: "$999", image: "Levi.avif" },
            { id: 4, name: "Gon and Kilua", price: "$467", image: "Gon n killua.jpg" }
          ]
        },
        {
          title: "Most Selling",
          products: [
            { id: 5, name: "Toji Zenin", price: "$29", image: "toji.webp" },
            { id: 6, name: "Yor Foger", price: "$89", image: "Yor.webp" },
            { id: 7, name: "Shuna in tempest", price: "$598", image: "Shuna.jpg" },
            { id: 8, name: "Gojo being the strongest", price: "$423", image: "Gojo.avif" }
          ]
        },
        {
          title: "Discounted",
          products: [
            { id: 9, name: "Happy the cat", discountedPrice: "$19", image: "Happy.webp" },
            { id: 10, name: "Chopper", discountedPrice: "$79", image: "Chopper.jpeg" },
            { id: 11, name: "Senku being the smartest", discountedPrice: "$99", image: "Senku.avif" },
            { id: 12, name: "Naruto after eating ramen", discountedPrice: "$76", image: "Naruto.webp" }
          ]
        },
        {
          title: "More Products",
          products: [
            { id: 13, name: "Erza being the smartest", price: "$23", image: "Erza.webp" },
            { id: 14, name: "Goku in Super Saiyan", price: "$45", image: "goku.jpg" },
            { id: 15, name: "Zoro trying to beat Mihawk", price: "$58", image: "zoro.jpg" },
            { id: 16, name: "Nezuko with pudding", price: "$23", image: "nezuko.webp" },
            { id: 17, name: "Sagiri the aseasmon", price: "$67", image: "Sagiri.jpeg" }
          ]
        }
      ]
    };
  },
  methods: {
    addToCart(product) {
      store.addToCart(product);
      this.$emit('cart-updated');
    }
  },
};
</script>

<style scoped>
.home-page {
  padding: 20px;
}

.products-section {
  display: flex;
  flex-direction: column;
}

.category {
  margin-bottom: 30px;
}

.products {
  display: flex;
  flex-wrap: wrap;
}

.product-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
  text-align: center;
  width: 200px;
  transition: transform 0.2s;
}

.product-card:hover {
  transform: scale(1.05);
}

.product-card img {
  max-width: 100%;
  height: auto;
}
</style>

