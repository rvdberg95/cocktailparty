
<template>
    <div class="container">
        <TheHeader :title="'Whos got what?'"
            :subtitle="'Great choices! Tap on a Cocktail to see how its going to be made and what ingredients are needed. Share the drinks through whatsapp with the share button below.'">
        </TheHeader>
        <div class="overview-container">
            <BaseOverview v-for="friend in friends" :friendName="friend" :id="friends.indexOf(friend) - 1"
                :drinkName="drinks[friends.indexOf(friend)].strDrink" :drinkInfo="drinks[friends.indexOf(friend)]">
            </BaseOverview>
        </div>
        <BaseButton :text="'Share the Party Drinks'" :share="true" @click="copy"></BaseButton>
        <BaseButton :text="'Reset'"></BaseButton>
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
    methods: {
        copy() {
            let getData = [];
            this.friends.forEach(friend => {
                const id = this.friends.indexOf(friend);
                const finalList = [];
                for (let i = 0; i < 15; i++) {
                    const suffix = `strIngredient${i}`
                    const newItem = this.drinks[id][suffix];
                    if (newItem) {
                        finalList.push(this.drinks[id][suffix]);
                    }
                }
                const output = `${friend} will be making ${this.drinks[id].strDrink} \nIngredients needed: ${finalList} \n${this.drinks[id].strInstructions}`;
                getData.push(output);
            });
            console.log(getData.join('\n\n'));
            navigator.clipboard.writeText(getData.join('\n\n'));
        },
    }
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