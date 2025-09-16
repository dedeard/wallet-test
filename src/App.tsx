import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [wallet, setWallet] = useState<string | null>(null)

  const connectWallet = async () => {
    if (window.solana && window.solana.isPhantom) {
      const response = await window.solana.connect()
      setWallet(response.publicKey.toString())
    } else {
      const deepLink = `https://phantom.app/ul/browse/${encodeURIComponent(window.location.href)}?ref=${encodeURIComponent(window.location.href)}`
      window.open(deepLink, '_blank')
    }
  }

  const disconnectWallet = () => {
    if (window.solana) {
      window.solana.disconnect()
      setWallet(null)
    }
  }

  useEffect(() => {
    if (window.solana && window.solana.isPhantom) {
      window.solana.on('connect', () => {
        setWallet(window.solana?.publicKey.toString() || null)
      })
      window.solana.on('disconnect', () => {
        setWallet(null)
      })
    }
  }, [])

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
          <button onClick={connectWallet}>
            Connect Phantom Wallet
          </button>
        ) : (
          <div>
            <p>Connected: {wallet.slice(0, 8)}...{wallet.slice(-8)}</p>
            <button onClick={disconnectWallet}>Disconnect</button>
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
