<template>
    <div class="about-container">
      <div class="about-header">
        <h1>ABOUT US</h1>
      </div>
  
      <div class="about-content">
        <div class="who-we-are">
          <h2>Who are we</h2>
          <p>
           We are an e-commerce website selling clothes. 
          </p>
        </div>
  
        <div class="difference">
          <h2>What are we</h2>
          <p>
            An e-commerce website unique on its own. 
          </p>
          <p>
            Do shop with us.
          </p>
        </div>
  
        <div class="buttons">
          <button @click="goToContact" class="btn">Contact Us</button>
          <button @click="goHome" class="btn">Home</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      goToContact() {
        this.$router.push("/AppContactUs");
      },
      goHome() {
        this.$router.push("/");
      },
    },
  };
  </script>
  
  <style scoped>
  .about-container {
    text-align: center;
    padding: 20px;
    background-color: #f5f5f5;
  }
  
  .about-header {
    background-color: #DEF8DB;
    color: white;
    padding: 50px 0;
  }
  
  .about-header h1 {
    font-size: 48px;
    margin: 0;
  }
  
  .about-content {
    background-color: white;
    padding: 40px;
    margin-top: -30px;
  }
  
  h2 {
    color: #002a5c;
  }
  
  p {
    font-size: 18px;
    line-height: 1.6;
    color: #333;
  }
  
  .buttons {
    margin-top: 30px;
  }
  
  .btn {
    background-color: #A9DDB1;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    margin: 10px;
    cursor: pointer;
    border-radius: 5px;
  }
  
  .btn:hover {
    background-color: #90D27B;
  }
  </style>
  