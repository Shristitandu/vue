import { reactive, computed } from 'vue';

const state = reactive({
  cartItems: [],
});

const addToCart = (product) => {
  state.cartItems.push(product);
};

const removeItem = (id) => {
  state.cartItems = state.cartItems.filter(item => item.id !== id);
};

const removeAll = () => {
  state.cartItems = [];
};

const total = computed(() => {
  return state.cartItems.reduce((acc, item) => acc + parseFloat(item.price), 0).toFixed(2);
});

export default {
  state,
  addToCart,
  removeItem,
  removeAll,
  total,
};
