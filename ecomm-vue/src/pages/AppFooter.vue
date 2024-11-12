<template>
    <footer class="footer">
      <div class="footer-links">
        <router-link to="/AppAboutus" class="footer-link">About Us</router-link>
        <router-link to="/AppContactus" class="footer-link">Contact Us</router-link>
        <!-- <router-link to="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.183949017282!2d-73.98811752553846!3d40.75797873480201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2snp!4v1727423372233!5m2!1sen!2snp" class="footer-link">Site Map</router-link>-->
        <router-link to="/AppProducts" class="footer-link">Products</router-link>
        <router-link to="/" class="footer-link">Home</router-link>
      </div>
      <div class="footer-copy">
        &copy; {{ currentYear }} Anime merch.inc . All rights reserved.
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'AppFooter',
    data() {
      return {
        currentYear: new Date().getFullYear(),
      };
    },
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #f8f8f8;
    padding: 1rem;
    text-align: center;
    border-top: 1px solid #e0e0e0;
  }
  
  .footer-links {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .footer-link {
    text-decoration: none;
    color: #305896;
    transition: color 0.3s;
  }
  
  .footer-link:hover {
    color: #4498C6;
  }
  
  .footer-copy {
    font-size: 0.9rem;
    color: #888;
  }
  </style>
  