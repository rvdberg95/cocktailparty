export default {
    deleteFriend(context, payload){
        console.log(payload.selectedFriend.id);
        context.commit('deleteFriend', { id : payload.selectedFriend.id});
    },
    addFriend(context, payload){
        context.commit('addFriend', payload);
    },
    async generateDrink(context, payload){
        const generateRandomDrink = async function(){
            const allData = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
            const jsonData = await allData.json();
            return jsonData.drinks;
        }
       const randomDrink = await generateRandomDrink().then(function(data) {
        context.commit('addDrink', data);
       });
    }
};