<template>
    <div class="container">
        <input placeholder="Add a Friend" type="text" :v-model="input">
<svg @click="addFriend" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 0C5.388 0 0 5.388 0 12C0 18.612 5.388 24 12 24C18.612 24 24 18.612 24 12C24 5.388 18.612 0 12 0ZM16.8 12.9H12.9V16.8C12.9 17.292 12.492 17.7 12 17.7C11.508 17.7 11.1 17.292 11.1 16.8V12.9H7.2C6.708 12.9 6.3 12.492 6.3 12C6.3 11.508 6.708 11.1 7.2 11.1H11.1V7.2C11.1 6.708 11.508 6.3 12 6.3C12.492 6.3 12.9 6.708 12.9 7.2V11.1H16.8C17.292 11.1 17.7 11.508 17.7 12C17.7 12.492 17.292 12.9 16.8 12.9Z" fill="var(--teal-3)"/>
</svg>
</div>

</template>

<script>
export default {
    data() {
        return {
            // input: 'Add a Friend',
            friendNumber: 0,
        };
    },
    mounted(){
        console.log(this.input);
        this.friendNumber = this.id + 1; 
    },
    computed: {
        input(){
            return this.$store.getters.input;
        }
    },
    methods: {
        addFriend(){
            let inputField = document.querySelector('input');
            const newInput = document.querySelector('input').value.toLowerCase();
            //Check if input is valid
            //Check if friend doesn't already exist
            if (!newInput || this.$store.getters.friends.includes(newInput)){
                inputField.value = '';
                return;
            } 
            this.$store.dispatch('addFriend', newInput);
            inputField.value = '';
        }
    }
}

</script>

<style scoped>
.container {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    padding: 0.25rem 2rem 0.25rem 3rem;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 0.3125rem;
    overflow: hidden;
}

input {
  font-family: Roboto Slab;
  color: var(--teal-3);
text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  font-size: 2rem;
  font-weight: 500;
  line-height: 0;
  letter-spacing: 0.75px;
  background-color: transparent;
  border: none;
  margin: 1rem 0;
}

input::placeholder{
    color: var(--teal-3);
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
}
</style>