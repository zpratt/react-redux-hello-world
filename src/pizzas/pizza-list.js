import React, {useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import {loadPizzas} from './action-creators';

const PizzaList = (props) => {
    const {pizzas} = props;
    const dispatch = useDispatch();

    const pizzasChildren = pizzas.map((pizza, index) => {
        return (
            <li key={index}>
                {pizza}
            </li>
        );
    });

    useEffect(() => {
        dispatch(loadPizzas());
    }, []);
    return (
        <ul>
            {pizzasChildren}
        </ul>
    );
}

const mapStateToProps = (state) => {
    return state.pizzas;
};

export default connect(mapStateToProps)(PizzaList);