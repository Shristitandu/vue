<template>
    <div class="auth-container">
      <h2>User Authentication</h2>
  
      <div>
        <h3>Sign Up</h3>
        <form @submit.prevent="signUp">
          <input v-model="signUpForm.firstName" 
          placeholder="First Name" required />
          <input v-model="signUpForm.lastName" 
          placeholder="Last Name" required />
          <input v-model="signUpForm.email" type="email" 
          placeholder="Email" required />
          <input v-model="signUpForm.phone" type="tel" 
          placeholder="Phone Number" required />
          <button type="submit">Sign Up</button>
        </form>
      </div>
  
      <div>
        <h3>Login</h3>
        <form @submit.prevent="login">
          <input v-model="loginForm.email" type="email" 
          placeholder="Email" required />
          <input v-model="loginForm.password" type="password" 
          placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </div>
  
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </template>
  
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        signUpForm: {
          firstName: '',
          lastName: '',
          email: '',
          phone: ''
        },
        loginForm: {
          email: '',
          password: ''
        },
        errorMessage: '',
        protectedData: null 
      };
    },
    methods: {
      async signUp() {
        try {
          const response = await axios.post('http://192.168.1.188:3000/users/Signup', this.signUpForm);
          console.log('Sign Up Successful:', response.data);
        } catch (error) {
          this.errorMessage = error.response?.data?.message || 'Sign Up Failed';
        }
      },
      async login() {
        try {
          const response = await axios.post('http://192.168.1.188:3000/users/login', this.loginForm); 
          console.log('Login Successful:', response.data);
          localStorage.setItem('token', response.data.token);
        } catch (error) {
          this.errorMessage = error.response?.data?.message || 'Login Failed';
        }
      },
      async fetchProtectedData() {
        const token = localStorage.getItem('token');
        if (!token) {
          this.errorMessage = 'You need to be logged in.';
          return;
        }
  
        try {
          const response = await axios.get('http://localhost:3000/protected', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          this.protectedData = response.data; 
        } catch (error) {
          this.errorMessage = error.response?.data?.message || 'Failed to fetch protected data.';
        }
      },
      logout() {
        localStorage.removeItem('token');
        console.log('Logged out successfully.');
      }
    }
  };
  </script>
  
  
  <style scoped>
  .auth-container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 15px; 
    background-color: #f9f9f9;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); 
    background-image: radial-gradient(circle 369px at -2.9% 12.9%, 
     rgba(247,234,163,1) 0%, rgba(236,180,238,0.56) 46.4%, rgba(163,203,247,1) 100.7%);
  }
  
  h2, h3 {
    text-align: center;
    color: #333; 
  }
  
  form {
    display: flex;
    flex-direction: column; 
  }
  
  input {
    margin-bottom: 15px; 
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px; 
    font-size: 16px; 
  }
  
  button {
    padding: 10px;
    border: none;
    border-radius: 8px; 
    background-color: #268cc6; 
    color: white; 
    font-size: 16px; 
    cursor: pointer;
    transition: background-color 0.3s; 
  }
  
  button:hover {
    background-color: #003873; 
  }
  
  .error {
    color: red;
    text-align: center; 
  }
  </style>
  