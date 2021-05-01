const React = require("react");
import {Provider} from 'react-redux';

const {render} = require('@testing-library/react');
const actionCreators = require('../../src/pizzas/action-creators');
import PizzaList from '../../src/pizzas/pizza-list';

jest.mock('../../src/pizzas/action-creators');

function mockStoreWithState(givenPizzas) {
    return {
        dispatch: jest.fn(),
        getState: () => {
            return {
                pizzas: {
                    pizzas: givenPizzas
                }
            };
        },
        subscribe: jest.fn()
    };
}

function renderConnectedComponent(store) {
    return render(<Provider store={store}><PizzaList/></Provider>);
}

describe('<PizzaList>', () => {
    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should render a list of pizzas', () => {
        const givenPizzas = [
            'cheese',
            'sausage'
        ];

        const store = mockStoreWithState(givenPizzas);
        const {container: containerEl} = renderConnectedComponent(store);

        const pizzaLIs = containerEl.querySelectorAll('ul > li');
        expect(pizzaLIs).toHaveLength(givenPizzas.length);
        pizzaLIs.forEach((pizzaEl, index) => {
            expect(pizzaEl.textContent).toEqual(givenPizzas[index]);
        });

    });

    it('should load pizzas from server', () => {
        const store = mockStoreWithState([]);

        renderConnectedComponent(store);

        expect(actionCreators.loadPizzas).toHaveBeenCalledTimes(1);
    });
});
