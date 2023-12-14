
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
        <!-- <BaseButton :text="'Share the Party Drinks'" :share="true" @click="copy"></BaseButton> -->
        <a id="whatsapp-share"><BaseButton :text="'Share via Whatsapp'" :share="true" @click="copy"></BaseButton></a>
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
            getData: '',
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
        this.getData = [];
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
                const output = `${friend.charAt(0).toUpperCase() + friend.slice(1)} will be making ${this.drinks[id].strDrink} %0a Ingredients needed: ${finalList} %0a${this.drinks[id].strInstructions}%0a%0a`;
                this.getData.push(output);
            });
            console.log(this.getData.join('\n\n'));
            navigator.clipboard.writeText(this.getData.join('\n\n'));

            //Selecting element and giving it href
            console.log(this.getData);
            document.querySelector('#whatsapp-share').href = `https://api.whatsapp.com/send?text=${this.getData}`;
        },
        reset(){
            this.$router.push('start');
        }
    },
    created(){
        console.log(this.friends, this.drinks);
        localStorage.setItem('friends', this.friends);
        localStorage.setItem('drinks', this.drinks);
        console.log(localStorage);
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
  padding: 4rem 0 16rem 0;
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