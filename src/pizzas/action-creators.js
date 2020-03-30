export const loadPizzas = () => {
    return (dispatch) => {
        dispatch({
            type: 'LOAD_PIZZAS',
            pizzas: ['cheese', 'sausage']
        });
    }
};
