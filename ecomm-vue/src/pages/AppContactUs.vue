<template>
  <div class="container">
    <div>
      <h1>Contact Us</h1>
      <p>We would love to hear from you! Please fill out the form below.</p>
    </div>
    <div class="row">
      <div class="maps map-container">
        <iframe
          src="https://mapq.st/3THkGyj"
          style="border:0; width: 100%; height: 100%;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="maps form-container">
        <form class="my-form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="form-name">Name</label>
            <input type="text" class="form-control" id="form-name" v-model="name" placeholder="Name" required />
          </div>
          <div class="form-group">
            <label for="form-email">Email Address</label>
            <input type="email" class="form-control" id="form-email" v-model="email" placeholder="Email Address" required />
          </div>
          <div class="form-group">
            <label for="form-phone">Telephone</label>
            <input type="text" class="form-control" id="form-phone" v-model="phone" placeholder="Telephone" required />
          </div>
          <div class="form-group">
            <label for="form-message">Your Message</label>
            <textarea class="form-control" id="form-message" v-model="message" placeholder="Message" required></textarea>
          </div>
          <button class="btn btn-default" type="submit">Contact Us</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
  },
  methods: {
    handleSubmit() {
      console.log({
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.message
      });

      
      this.name = '';
      this.email = '';
      this.phone = '';
      this.message = '';
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.row {
  display: flex;
  width: 100%; 
  height: 100vh; 
}

.maps {
  flex: 1; 
  display: flex;
  flex-direction: column;
  justify-content: center; 
  padding: 10px; 
}

.map-container {
  flex: 0 0 65%; 
}

.form-container {
  flex: 0 0 35%; 
}

.my-form {
  color: #091735;
  padding: 30px; 
  border: 1px solid #ccc; 
  border-radius: 9px; 
  background-color: #f9f9f9; 
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); 
  height: 100%; 
  display: flex;
  flex-direction: column; 
}

.my-form .btn-default {
  background-color: #BCEBD7;
  color: #fff;
  border-radius: 9px; 
  padding: 10px 20px; 
  font-size: 16px; 
  width: 100%; 
}

.my-form .btn-default:hover {
  background-color: #4498C6;
  color: #fff;
}

.my-form .form-control {
  border-radius: 9px; 
  font-size: 16px;
  padding: 10px; 
  margin-top: 5px;
  
}

.my-form .form-group {
  margin-bottom: 20px; 
}

.my-form label {
  margin-bottom: 5px; 
  display: block; 
  box-shadow: white;
}
</style>
