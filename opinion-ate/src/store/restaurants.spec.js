import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

import { loadRestaurants } from './restaurants/actions'
import restaurantsReducer from './restaurants/reducers'

describe('restaurants', () => {
  describe('loadRestaurants action', () => {
    describe('when loading succeeds', () => {
      const records = [
        { id: 1, name: 'Sushi Place' },
        { id: 2, name: 'Pizza Place' },
      ]
      let store

      beforeEach(async () => {
        const api = {
          loadRestaurants: () => Promise.resolve(records),
        }
        const initialState = {
          records: [],
        }
        store = createStore(
          restaurantsReducer,
          initialState,
          applyMiddleware(thunk.withExtraArgument(api)),
        )

        await store.dispatch(loadRestaurants())
      })

      it('stores the restaurants', async () => {
        expect(store.getState().records).toEqual(records)
      })
    })

    describe('while loading', () => {
      it('sets a loading flag', () => {
        const api = {
          loadRestaurants: () => new Promise(() => { }),
        }
        const initialState = {}
        const store = createStore(
          restaurantsReducer,
          initialState,
          applyMiddleware(thunk.withExtraArgument(api)),
        )

        store.dispatch(loadRestaurants())

        expect(store.getState().loading).toEqual(true)
      })
    })
  })
})
