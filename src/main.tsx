import * as R from "@/stores/store.ts";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={R.store}>
      <PersistGate loading={null} persistor={R.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>,
)
