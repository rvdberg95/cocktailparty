<template>
  <div class="container master-container">
      <BackButton></BackButton>
      <TheHeader
      :title="drinkName"
      ></TheHeader>
    <p>Party Drink made by</p>
    <FriendElement
    :friend="friendName"
    :id="getId"
    :centered="true"
    ></FriendElement>
    <ShowcaseDrink  
        :id="getId" :friend-name="friendName"
          :drink-name="drinks[getId]"
          :notext="true"
          :notag="true"
          >
    </ShowcaseDrink>
    <BaseInfo
    :title="`How to make a ${drinkName}`"
    :info="drinks[getId].strInstructions"
    :type="'instructions'"

    ></BaseInfo>
    <BaseInfo
    :title="'Ingredient List'"
    :info="listOfIngredients"
    :type="'list'"
    ></BaseInfo>
    
    <BackgroundSwirl class="bgswirl"></BackgroundSwirl>
</div>
</template>

<script setup>
import BackButton from '../components/BackButton.vue';
import BackgroundSwirl from '../components/BackgroundSwirl.vue';
import BaseInfo from '../components/BaseInfo.vue';
import FriendElement from '../components/FriendElement.vue';
import ShowcaseDrink from '../components/ShowcaseDrink.vue';
import TheHeader from '../components/TheHeader.vue';
</script>

<script>
export default {
  data() {
    return {

    };
  },
  props: ['drinkInfo', 'id'],
  created(){
    // this.$route.path //details/1
    console.log(this.$route);
    console.log(this.drinks[this.getId]);
  },
  computed: {
        friends() {
            return this.$store.getters.friends;
        },
        drinks() {
            return this.$store.getters.drinks;
        },
        drinkName(){
          return this.drinks[this.getId].strDrink;
        },
        friendName(){
          return this.friends[this.getId];
        },
        getId(){
          return this.$route.params.id;
        },
        listOfIngredients(){
          const finalList = [];
          for(let i = 0; i < 15; i++){
            const suffix = `strIngredient${i}`
            // const prefix = `strIngredient${i}`;
            const newItem = this.drinks[this.getId][suffix];
            if(newItem){
              finalList.push(this.drinks[this.getId][suffix]);
            }
            // finalList = 'TEST';
          }

          return finalList;
        },
    },
    
};
</script>

<style scoped>

/* .container {
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
} */
.container {
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  margin: 0;
  gap: 1.8rem;
  background: var(--Gradient-Teal-1-Blue-1);
}

.master-container {
  padding-bottom: 28rem;
}


.bgswirl {
  position: fixed;
  right: 0%;
  bottom: -5%;
  margin-left: auto;
  z-index: 0;
  width: 300px;
  height: auto;
}

</style>

