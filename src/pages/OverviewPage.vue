
<template>
    <div class="container">
        <TheHeader :title="'Whos got what?'"
            :subtitle="'Great choices! Tap on a Cocktail to see how its going to be made and what ingredients are needed. Share the drinks through whatsapp with the share button below.'">
        </TheHeader>
        <div class="overview-container">
            <BaseOverview v-for="friend in this.friends" :friendName="friend" :id="friends.indexOf(friend)-1"
                :drinkName="drinks[friends.indexOf(friend)].strDrink"
                :drinkInfo="drinks[friends.indexOf(friend)]"
                ></BaseOverview>
        </div>
        <BaseButton :text="'Share the Party Drinks'" :share="true"></BaseButton>
        <BaseButton :text="'Reset'"></BaseButton>
        <ShareNetwork
    network="whatsapp"
    url="https://news.vuejs.org/issues/180"
    title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
    description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
    quote="The hot reload is so fast it\'s near instant. - Evan You"
    hashtags="vuejs,vite"
  >
    Share on Facebook
</ShareNetwork>
    </div>
</template>


<script setup>

import BaseButton from '../components/BaseButton.vue';
import BaseOverview from '../components/BaseOverview.vue';
import TheHeader from '../components/TheHeader.vue';

</script>

<script>
export default {
    data() {
        return {
        };
    },
    computed: {
        friends() {
            return this.$store.getters.friends;
        },
        drinks() {
            return this.$store.getters.drinks;
        },
    },
};

</script>

<style scoped>

.container {
    margin-bottom: 2rem;
}
.overview-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.4rem;
}
</style>