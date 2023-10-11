
<template>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@100;200;300;400;500;600;700;800;900&family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <div class="background">
    <router-view></router-view>
  </div>
</template>

<script setup>
import "./assets/main.css";
import Homepage from "./pages/Homepage.vue";
import BaseButton from "./components/BaseButton.vue";
import { ref, provide } from 'vue';

</script>



<style scoped>
.container {
  margin: auto;
  background: var(--Gradient-Teal-1-Blue-1);
  width: 360px;
  height: 800px;
  padding: 32px;
}
</style>


