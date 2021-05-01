import axios from 'axios';

export const loadPizzas = () => {
    return async (dispatch) => {
        const mockPizzasApi = 'http://www.mocky.io/v2/5e8175c43000002d006f9772';

        const pizzas = await axios.get(mockPizzasApi);

        dispatch({
            pizzas: pizzas.data,
            type: 'LOAD_PIZZAS'
        });
    }
};
