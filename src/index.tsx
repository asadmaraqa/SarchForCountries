import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import * as serviceWorker from './serviceWorker'
import makeStore from './redux/store'
import { ThemeProvider } from './context/theme/themeContext'

const store = makeStore()
console.log(process.env.NODE_ENV)

const WithProvider = () => (
  <Provider store={store}>
    <Router>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Router>
  </Provider>
)

ReactDOM.render(<WithProvider />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
