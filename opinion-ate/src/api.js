import axios from 'axios'

const client = axios.create({
  baseURL: 'https://api.outsidein.dev/ttI7BG39wZRnOBEWikCJTMojpxGy9rup',
})

const api = {
  async loadRestaurants() {
    const response = await client.get('/restaurants')
    return response.data
  },
}

export default api
