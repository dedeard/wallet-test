import { useState } from 'react'
import init from '@web3-onboard/core'
import { useConnectWallet } from '@web3-onboard/react'
import phantomModule from '@web3-onboard/phantom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const phantom = phantomModule()

init({
  wallets: [phantom],
  chains: [
    {
      id: '0x65',
      token: 'SOL',
      label: 'Solana Mainnet',
      rpcUrl: 'https://api.mainnet-beta.solana.com'
    }
  ]
})

function App() {
  const [count, setCount] = useState(0)
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()

  return (
    <>
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        preload="auto"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '300px',
          objectFit: 'cover',
          zIndex: -1
        }}
      >
        <source src="/cooking_video.mp4" type="video/mp4" />
      </video>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {!wallet ? (
          <button onClick={() => connect()} disabled={connecting}>
            {connecting ? 'Connecting...' : 'Connect Wallet'}
          </button>
        ) : (
          <div>
            <p>Connected: {wallet.accounts[0].address.slice(0, 8)}...{wallet.accounts[0].address.slice(-8)}</p>
            <button onClick={() => disconnect(wallet)}>Disconnect</button>
          </div>
        )}
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App