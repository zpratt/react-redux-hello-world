import * as actionCreators from '../../src/pizzas/action-creators';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('Pizza Action Creators', () => {
    let mockAdapter;

    beforeEach(() => {
        mockAdapter = new MockAdapter(axios);
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should load pizzas from the server', async () => {
        const mockDispatch = jest.fn().mockName('dispatch');
        const someCollectionOfPizzas = ['bar', 'baz'];
        const mockUrl = 'http://www.mocky.io/v2/5e8175c43000002d006f9772';
        mockAdapter.onAny().reply(() => [200, someCollectionOfPizzas]);

        await actionCreators.loadPizzas()(mockDispatch);

        expect(mockAdapter.history.get).toHaveLength(1);
        expect(mockAdapter.history.get[0].url).toEqual(mockUrl);

        expect(mockDispatch).toHaveBeenCalledWith({
            type: 'LOAD_PIZZAS',
            pizzas: someCollectionOfPizzas
        });
    });
});