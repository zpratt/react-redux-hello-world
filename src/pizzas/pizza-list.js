import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadPizzas} from './action-creators';

class PizzaList extends Component {
    componentDidMount() {
        this.props.loadPizzas();
    }

    render() {
        const {pizzas} = this.props;
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
    }
}

const mapStateToProps = (state) => {
    return state.pizzas;
};

const mapDispatch = (dispatch) => {
    return {
        loadPizzas: () => (dispatch(loadPizzas()))
    };
};

export default connect(mapStateToProps, mapDispatch)(PizzaList);