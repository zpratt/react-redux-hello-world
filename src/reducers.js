import {combineReducers} from 'redux';
import {pizzas} from './pizzas/reducer';

const reducers = combineReducers({
    pizzas
});

export default reducers;