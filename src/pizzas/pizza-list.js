import React from 'react';
import {connect} from 'react-redux';

const PizzaList = ({pizzas}) => {
    const pizzasChildren = pizzas.map((pizza, index) => {
        return (
            <li key={index}>
                {pizza}
            </li>
        );
    });

    return (
        <ul>
            {pizzasChildren}
        </ul>
    );
};

const mapStateToProps = (state) => {
    return state.pizzas;
};

export default connect(mapStateToProps)(PizzaList);