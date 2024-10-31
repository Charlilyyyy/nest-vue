<template>
    <div>
      <h1>User List</h1>
      <ul>
        <li v-for="user in users" :key="user.id">{{ user.name }}</li>
      </ul>
      <button @click="fetchUsers">Fetch Users</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        users: [],
      };
    },
    methods: {
      async fetchUsers() {
        try {
          const response = await axios.get('http://localhost:3000/users');
          this.users = response.data;
          console.log(this.users)
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add styles here if needed */
  </style>
  