import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers'
import PizzaList from './pizzas/pizza-list';

export const AppContainer = () => {
    const store = createStore(reducers, applyMiddleware(thunk));

    return (
        <Provider store={store}>
            <PizzaList />
        </Provider>
    );
};
