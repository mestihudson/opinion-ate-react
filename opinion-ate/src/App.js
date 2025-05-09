import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { green } from '@mui/material/colors'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Provider } from 'react-redux'

import RestaurantScreen from './components/RestaurantScreen'
import store from './store'

const theme = createTheme({
  palette: {
    primary: green,
  },
})

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Opinion Ate</Typography>
          </Toolbar>
        </AppBar>
        <Container>
          <RestaurantScreen />
        </Container>
      </ThemeProvider>
    </Provider>
  )
}
