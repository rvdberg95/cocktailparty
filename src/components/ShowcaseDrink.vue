<template>
    <h2 v-if="!notext">{{ friendName }} is going to make a <br> {{ drinkName.strDrink }}</h2>
    <div class="img-container" :class="{rotate: rotate}">
        <div class="img-img-container"><img :src="getImage()" />
        </div>
        <h3>{{ drinkName.strDrink }}</h3>
    </div>
    <FriendElement v-if="!notext" :friend="friendName" :id="id" :centered="true"></FriendElement>
</template>

<script setup>
import FriendElement from './FriendElement.vue';
</script>

<script>
export default {
    data() {
        return {
            rotate: false,
        };
    },
    props: ['friendName', 'drinkName', 'id', 'notext', 'notag'],
    methods: {
        getImage() {
            console.log(this.drinkName);
            return this.drinkName.strDrinkThumb;
        },
    },
}
</script>

<style scoped>
.rotate {
    animation: rotation 2s;
}

@keyframes rotation {
    0% {
        translate: rotate(0);
    }
    100% {
        translate: rotate(2);
    }
}

h2 {
    text-align: center;
    text-transform: capitalize;
    margin-bottom: 3rem;
    font-weight: 400;
    font-size: 2rem;
}

.img-container {
    margin: auto;
    min-width: 14rem;
    max-width: 36rem;
    aspect-ratio: 1 / 1;
    background-color: var(--teal-2);
    position: relative;
    padding: 1.8rem;
    align-items: center;
    border-radius: 5px;
    border-radius: 5p;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin-bottom: 3rem;
}

.img-img-container {
    border-radius: 5px;
}



#center-text {
    text-align: center;
}

img {
    width: 100%;
}

h3 {
    position: absolute;
    z-index: 10;
    bottom: 1.5rem;
    left: 3rem;
    font-size: 1.6rem;
    font-family: Josefin Sans;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
}
</style>