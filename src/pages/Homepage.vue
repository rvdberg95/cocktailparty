
<template>
    <div class="container">
    <TheHeader
    :title="'Cocktail Party'"
    :subtitle="'Have a cocktail party with your friends and determine who is gonna make which cocktail!'"
    ></TheHeader>
    <FriendsContainer></FriendsContainer>
      <BackgroundSwirl></BackgroundSwirl>

</div>
</template>

<script setup>
// import "../assets/main.css";
import FriendsContainer from "../components/FriendsContainer.vue";
import TheHeader from '../components/TheHeader.vue';
import BaseButton from "../components/BaseButton.vue";
import BackgroundSwirl from "../components/BackgroundSwirl.vue";
</script>
