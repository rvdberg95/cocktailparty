export default {
    deleteFriend(state, payload){
        const id = payload.id; 
        const newList = state.friends.filter(friend => state.friends.indexOf(friend) !== id);
        state.friends = newList;
    },
    addFriend(state, payload){
        state.friends.push(payload);
    },
    addDrink(state, payload){
        state.drinks.push(payload[0]);
        console.log(state.drinks);
    }
};