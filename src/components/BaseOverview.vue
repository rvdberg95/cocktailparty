<template>
    <div class="container">

        <div class="img-img-container"><img :src="getImage()" />

        </div>
        <div class="drink-img-info">
            <h5>{{ drinkName }}</h5>
            <div @click="goToDetails" class="info-icon"><p>i</p></div>
        </div>
        <h4>{{ friendName }}</h4>
        <Transition name="visualEl">
            <div class="visualEl" :style="`background: var(--friend-${id + 1})`">
            </div>
        </Transition>


    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    props: ['friendName', 'id', 'drinkName', 'drinkInfo'],
    methods: {
        getImage() {
            console.log(this.drinkName);
            return this.drinkInfo.strDrinkThumb;
        },
        goToDetails() {
            this.$router.push({ name: 'details', params: { drinkInfo: this.drinkInfo.strDrink, id: this.id + 1 } });
        }
    },

};
</script>

<style scoped>
.container {
    width: auto;
    background-color: var(--teal-3);
    margin: auto;
    position: relative;
    padding: 1.8rem;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    overflow: hidden;
}

.img-img-container {
    border-radius: 5px;
}

img {
    width: 100%;
    border-radius: 5px;

}

.drink-img-info {
    display: flex;
    position: absolute;
    left: 2.5rem;
    bottom: 5rem;
    height: fit-content;
    width: 70%;
    align-items: center;
    justify-content: center;
}

.info-icon {
    z-index: 99;
    background: linear-gradient(var(--yellow-1), var(--yellow-3));
    height: 2.2rem;
    aspect-ratio: 1 / 1;
    border-radius: 999px;
    padding: auto;
    text-align: center;
    justify-content: center;
}

p {
    font-size: 1.6rem;
}

h4 {
    margin: 1.6rem 1.5rem 0.6rem 1.5rem;
    font-size: 1.8rem;
    text-align: center;
    text-transform: capitalize;
}

h5 {
    font-size: 1.2rem;
    margin: auto;
    text-shadow: 1px 2px 2px rgba(0, 0, 0, 1);
}

.visualEl {
    position: absolute;
    content: '';
    left: -125%;
    bottom: -225%;
    transform: rotate(45deg);
    width: 40rem;
    height: 40rem;
    background: var(--friend-1);
    transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
</style>