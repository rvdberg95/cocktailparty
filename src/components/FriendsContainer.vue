<template>
    <h3>Friends</h3>
    <TransitionGroup name="list" tag="div" moveClass="good-slide">
        <FriendElement v-for="friend in friends" :friend="friend" :id="friends.indexOf(friend)" :key="friend" :type="'removeable'">
        </FriendElement>
        <FriendInput :key="'input'"></FriendInput>
        <BaseButton :key="'startbutton'" :text="'Start the Party'" 
        @click="startGeneration('generateddrinks')"></BaseButton>
    </TransitionGroup>
</template>

<script setup>
import App from '../App.vue';
import BaseButton from './BaseButton.vue';
import FriendElement from './FriendElement.vue';
import FriendInput from './FriendInput.vue';
</script>

<script >
export default {
    data() {
        return {};
    },
    components: { FriendElement },
    computed: {
        friends() {
            return this.$store.getters.friends;
        }
    },
    methods: {
        startGeneration(target) {
            if (this.friends.length === 0) return;
            this.$router.push(target);
        }
    },
};
</script>

<style scoped>
h3 {
    text-align: center;
    font-size: 1.6rem;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    margin-bottom: 0.8rem;
}

.list-move,
.list-enter-active,
.list-leave-active,
.inputEl-enter-active,
.inputEl-leave-active {
    transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
}

.list-enter-from {
    opacity: 0;
    transform: translateY(1rem);
}

.list-leave-to {
    opacity: 0;

}

.list-leave-active,
.inputEl-move,
.list-move {
    position: absolute;
}

.list-move,
.inputEl-move,
.good-slide {
    transition: transform 3s cubic-bezier(0.19, 1, 0.22, 1);
}
</style>