import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { AppRouter } from './router/AppRouter.jsx'
import { RouterProvider } from 'react-router'





createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <RouterProvider router={AppRouter} />
  </Provider>
)
