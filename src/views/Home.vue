<template>
  <div class="home">
    <h1>Welcome eto the app!</h1>
    <div v-if="!loggedIn">
      To use this app you'll need to
      <router-link to="/login">
        Login
      </router-link>
      or
      <router-link to="/register">
        Register
      </router-link>
    </div>
  </div>
</template>

<script>
import { authComputed } from '../store/helpers';

export default {
  name: 'Home',
  computed: {
    ...authComputed,
  },
};
</script>
