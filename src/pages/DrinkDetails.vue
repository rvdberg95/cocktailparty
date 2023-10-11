<template>
  <div class="container">
      <BackButton></BackButton>
      <TheHeader
      :title="drinkName"
      ></TheHeader>
    <h3>Party Drink made by</h3>
    <FriendElement
    :friend="this.friendName"
    :id="this.getId"
    :centered="true"
    ></FriendElement>
    <ShowcaseDrink  
        :id="this.getId" :friend-name="this.friendName"
          :drink-name="this.drinks[getId]"
          :notext="true"
          :notag="true"
          >
    </ShowcaseDrink>
    <BaseInfo
    :title="`How to make a ${this.drinkName}`"
    :info="this.drinks[this.getId].strInstructions"
    :type="'instructions'"

    ></BaseInfo>
    <BaseInfo
    :title="'Ingredient List'"
    :info="listOfIngredients"
    :type="'list'"
    ></BaseInfo>
    
</div>
</template>

<script setup>
import BackButton from '../components/BackButton.vue';
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
        }
    },
};
</script>

