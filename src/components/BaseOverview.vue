<template>
    <div class="bo-container" @click="goToDetails">

        <div class="img-img-container"><img :src="getImage()" />

        </div>
        <div class="drink-img-info" >
            <h5>{{ drinkName }}</h5>
            <div  class="info-icon">
                <p>i</p>
            </div>
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
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            }
            );            this.$router.push({ name: 'details', params: { drinkInfo: this.drinkInfo.strDrink, id: this.id + 1 } });
        }
    },

};
</script>

<style scoped>
.bo-container {
    width: 17rem;
    height: 100%;
    height: fit-content;
    aspect-ratio: 1 / 1.4;
    position: relative;
    padding: 0.8rem 1.2rem;
    align-items: center;
    justify-content: start;
    border-radius: 5px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    z-index: 2;
}

.img-img-container {
    border-radius: 5px;
    margin: -1.4rem;
    overflow: hidden;
    box-shadow: inset 0px 0px 15px 15px hsl(0, 0%, 0%, 0.5);
}

img {
    width: 100%;
    border-radius: 5px;
    opacity: 0.7;
    filter: blur(2px) grayscale(0.2);
    transform: scale(1);
    transition: all 1s ease;
}

img:hover{
    opacity: 0.9;
    filter: blur(0px);
    transform: scale(1.5);
}


.drink-img-info {
    display: grid;
    grid-template-columns: 6fr 1fr;
    height: fit-content;
    width: 100%;
    justify-content: start;
    -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;   
   word-break: break-word;
    margin-top: -3.2rem;
}


.info-icon {
    z-index: 99;
    background: linear-gradient(var(--yellow-1), var(--yellow-3));
    height: 2.2rem;
    grid-column: -1;
    aspect-ratio: 1 / 1;
    border-radius: 999px;
    padding: auto;
    text-align: center;
    justify-content: center;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 1), 0px 0px 5px rgba(0, 0, 0, 1);
}

p {
    font-size: 1.6rem;
}

h4 {
    margin: auto 0 2.2rem 0;
    font-size: 1.8rem;
    text-align: center;
    text-transform: capitalize;
    color: var(--teal-2);
}

h5 {
    font-size: 2rem;
    margin: 0 auto 0 0 ;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 1), 0px 0px 5px rgba(0, 0, 0, 1);
    z-index: 10;
    text-align: start;
}

.visualEl {
    position: absolute;
    content: '';
    left: -225%;
    bottom: -85%;
    transform: rotate(45deg);
    width: 40rem;
    height: 40rem;
    background: var(--friend-1);
    transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
</style>