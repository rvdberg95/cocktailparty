
<template>
    <div class="ov-container">
        <TheHeader :title="'Whos got what?'"
            :subtitle="'Great choices! Tap on a Cocktail to see how its going to be made and what ingredients are needed. Share the drinks through whatsapp with the share button below.'">
        </TheHeader>
        <div class="overview-container">
            <BaseOverview class="seperate-ov" v-for="friend in friends" :friendName="friend" :id="friends.indexOf(friend) - 1"
                :drinkName="drinks[friends.indexOf(friend)].strDrink" :drinkInfo="drinks[friends.indexOf(friend)]">
            </BaseOverview>
        </div>
        <a href="whatsapp://send?text=TESTING"  >WHATSAPP</a>
        <BaseButton :text="'Share the Party Drinks'" :share="true" @click="copy"></BaseButton>
        <BaseButton :text="'Reset'" @click="reset"></BaseButton>
        <BackgroundSwirl class="bgswirl"></BackgroundSwirl>
    </div>

</template>


<script setup>
import BaseButton from '../components/BaseButton.vue';
import BaseOverview from '../components/BaseOverview.vue';
import TheHeader from '../components/TheHeader.vue';
import BackgroundSwirl from '../components/BackgroundSwirl.vue';

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
        reset(){
            this.$router.push('start');
        }
    }
};

</script>

<style scoped>

.ov-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  margin: 0;
  padding: 4rem 0 10rem 0;
  gap: 1.8rem;
  background: var(--Gradient-Teal-1-Blue-1);
  align-self: baseline;

}


.bgswirl {
  position: fixed;
  right: 0%;
  bottom: -5%;
  margin-left: auto;
  z-index: 1;
  width: 300px;
  height: auto;
}



.overview-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.4rem;
    width: min-content;    
    margin-bottom: 1.8rem;
}


.seperate-ov {
    background-color: var(--teal-3);
}
</style>