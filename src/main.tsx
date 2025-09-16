import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { WalletContextProvider } from './WalletContextProvider'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WalletContextProvider>
      <App />
    </WalletContextProvider>
  </StrictMode>,
)