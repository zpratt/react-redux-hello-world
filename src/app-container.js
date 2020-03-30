import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers'
import PizzaList from './pizzas/pizza-list';

export const AppContainer = () => {
    const store = createStore(reducers);

    return (
        <Provider store={store}>
            <PizzaList />
        </Provider>
    );
};