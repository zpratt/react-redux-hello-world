export const loadPizzas = () => {
    return (dispatch) => {
        const mockPizzasApi = 'http://www.mocky.io/v2/5e8175c43000002d006f9772';

        return fetch(mockPizzasApi)
            .then((responseStream) => {
                return responseStream.json()
            })
            .then((pizzas) => {
                return dispatch({
                    type: 'LOAD_PIZZAS',
                    pizzas: pizzas
                });
            });
    }
};
