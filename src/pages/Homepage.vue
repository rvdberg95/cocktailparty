
<template>
    <div class="container">
    <TheHeader
    :title="'Cocktail Party'"
    :subtitle="'Have a cocktail party with your friends and determine who is gonna make which cocktail!'"
    ></TheHeader>
    <FriendsContainer></FriendsContainer>
      <BackgroundSwirl class="bgswirl"></BackgroundSwirl>

</div>
</template>

<script setup>
// import "../assets/main.css";
import FriendsContainer from "../components/FriendsContainer.vue";
import TheHeader from '../components/TheHeader.vue';
import BaseButton from "../components/BaseButton.vue";
import BackgroundSwirl from "../components/BackgroundSwirl.vue";
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
  align-items: center;
  justify-content: start;
  margin: 0;
  background: var(--Gradient-Teal-1-Blue-1);
}


.bgswirl {
  position: fixed;
  right: 0%;
  bottom: -5%;
  margin-left: auto;
  z-index: -1;
  width: 300px;
  height: auto;
}




</style>