<script setup lang="ts">
import type router from '@/router';

defineProps({
  variant: {
    type: String,
    default: 'light'
  }
})
</script>

<template>
  <header :class="['navbar', variant]">
    <div class="logo">
        <router-link class="logo-text" to="home">RunFlow</router-link> 
    </div>

    <nav>
            <router-link class="nav-link" to="calculate">Calcular corrida</router-link>
            <router-link class="nav-link" to="registration">Histórico de registros</router-link>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  height: 74px;
  background: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 60px;
}

.navbar.light {
  background: #f4f4f4;
  color: #000000;
}

.navbar.blue {
  background: linear-gradient(to right, #18a8f8, #0b4fd0);
  color: #ffffff;
}

.navbar.blue a{
    color: #ffffff;
}

.logo {
  font-size: 1.2rem;
  font-weight: 500;
}

.logo-text{
    text-decoration: none;
}

nav {
  display: flex;
  gap: 55px;
}

.nav-link {
  text-decoration: none;
  color: #000000;
  font-size: 1rem;
}
</style>