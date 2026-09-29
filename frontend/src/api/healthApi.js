const healthApi = {
    food: async function() {
        const responce = await fetch("http://127.0.0.1:3000/api/v1/food/");
        const data = await responce.json();
        console.log(data);
    }
}

export default healthApi;
