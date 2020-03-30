export const pizzas = (state = {pizzas: []}, action) => {
    const reducers = {
        'LOAD_PIZZAS': {
            ...state,
            pizzas: action.pizzas
        }
    };

    const reducerForAction = reducers[action.type];

    return reducerForAction || state;
};