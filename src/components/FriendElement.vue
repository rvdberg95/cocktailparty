<template>
    <div class="fe-container">
        <h4 :class="{ centered: isCentered }">{{ friend }}</h4>
        <svg v-if="type === 'removeable'" @click="onDeleteFriend(this.id)" xmlns="http://www.w3.org/2000/svg" width="24px"
         viewBox="0 0 24 24" fill="none">
            <path
                d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM15.92 12.75H7.92C7.51 12.75 7.17 12.41 7.17 12C7.17 11.59 7.51 11.25 7.92 11.25H15.92C16.1189 11.25 16.3097 11.329 16.4503 11.4697C16.591 11.6103 16.67 11.8011 16.67 12C16.67 12.1989 16.591 12.3897 16.4503 12.5303C16.3097 12.671 16.1189 12.75 15.92 12.75Z"
                fill="#9EDEC6" />
        </svg>
        <Transition name="visualEl">
            <div class="visualEl" :style="`background: var(--friend-${friendNumber})`"></div>
        </Transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
    props: ['friend', 'id', 'type', 'centered'],
    computed: {
        friendNumber() {
            return this.id;
        },
        isCentered() {
            return this.centered;
        },

    },
    methods: {
        onDeleteFriend(id) {
            this.$store.dispatch('deleteFriend', {
                selectedFriend: {
                    id
                }
            });
        },
    },
    mounted() {
        console.log(this.centered);
    },
}

</script>

<style scoped>
* {
    text-transform: lowercase;
}

*::first-letter {
    text-transform: capitalize;
}

.fe-container {
    display: flex;
    position: relative;
    flex-direction: column;
    margin-bottom: 1rem;
    padding: 2rem 4rem 2rem 4rem;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 0.3125rem;
    background: var(--teal-3);
    overflow: hidden;
    width: 32rem;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.centered {
    margin-right: auto;
    margin-left: auto;
    padding: 1rem 0 ;
}

.visualEl {
    position: absolute;
    content: '';
    left: -325px;
    bottom: -325px;
    transform: rotate(45deg);
    width: 40rem;
    height: 40rem;
    background: var(--friend-1);
    transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
</style>