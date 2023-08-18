import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { PersistGate } from 'redux-persist/integration/react'

import { persistor, store } from '../app/store'
import Root from './root'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Root />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App
