<template>
    <div class="info-container">
        <h2>{{ title }}</h2>
        <div v-if="type === 'instructions'">
        <p>{{ info }}</p>
        </div>
        <div v-if="type === 'list'" v-for="listItem in info">
        <li>{{ listItem }}</li>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{};
    },
    props: ['title', 'info', 'type']
};

</script>

<style scoped>
* {
    text-transform: capitalize;
    
}

.info-container {
    background-color: var(--teal-3);
    padding: 3.2rem;
    border-radius: 5px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    width: 33.1rem;
    text-align: start;
    z-index: 2;
}


h2 {
    font-size: 1.8rem;
    margin: 0.75rem  0 ;
}

li {
    line-height: 1.8;
}
</style>