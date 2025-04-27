import { render, screen } from '@testing-library/react'
import { RestaurantList } from './RestaurantList'

describe('RestaurantList', () => {
  const restaurants = [
    { id: 1, name: 'Sushi Place' },
    { id: 2, name: 'Pizza Place' },
  ]

  let loadRestaurants

  function renderComponent(propsOverrides = {}) {
    const props = {
      loadRestaurants: jest.fn().mockName('loadRestaurants'),
      restaurants,
      loading: false,
      ...propsOverrides,
    }
    loadRestaurants = props.loadRestaurants

    render(<RestaurantList {...props} />)
  }

  describe('when loading succeeds', () => {
    it('displays the restaurants', () => {
      renderComponent()

      expect(screen.getByText('Sushi Place')).toBeInTheDocument()
      expect(screen.getByText('Pizza Place')).toBeInTheDocument()
    })

    it('does not display the loading indicator while not loading', () => {
      renderComponent()

      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument()
    })

    it('does not display the error message', () => {
      renderComponent()
      expect(
        screen.queryByText('Restaurants could not be loaded.'),
      ).not.toBeInTheDocument()
    })
  })

  describe('when loading fails', () => {
    it('displays the error message', () => {
      renderComponent({ loadError: true })
      expect(
        screen.getByText('Restaurants could not be loaded.'),
      ).toBeInTheDocument()
    })
  })

  it('loads restaurants on first render', () => {
    renderComponent()

    expect(loadRestaurants).toHaveBeenCalled()
  })

  it('displays the loading indicator while loading', () => {
    renderComponent({ loading: true })

    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })
})
