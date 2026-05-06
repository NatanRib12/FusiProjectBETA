<script setup lang="ts">
import calculate from './views/calculate.vue';
import home from './views/home.vue';
import type router from './router';
import login from './views/login.vue';
import register from './views/register.vue'
</script>

<template>
  <header>
    <div>
      <router-view />
      <!-- <home/> -->
       <!-- <calculate></calculate> -->
    </div>
  </header>

  <main>
  </main>
</template>

<style scoped>
</style>
