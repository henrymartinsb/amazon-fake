export const initialState = {
    basket: [
        /*{
            id: "10101012",
            title: "Apple iPhone 11 Pro, US Version, 512GB, Space Gray - Unlocked",
            price: 547.00,
            rating: 5,
            image: "https://amazon.com/images/I/81x9I9qXbmL._AC_SL1500_.jpg"
        },*/
    ],
    user: null,
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            // lógica para adicionar item a cesta
            return { 
                ...state,
                basket: [...state.basket, action.item]
                };
        case "REMOVE_FROM_BASKET":
            // lógica para remover item da cesta
            let newBasket = [...state.basket];

            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
                );

            if (index >= 0) {
                // item existe na cesta, remover
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as its not`
                );
            }

            return { 
                ...state, 
                basket: newBasket };
        default:
            return state;    
    }
}

export default reducer;

/* */