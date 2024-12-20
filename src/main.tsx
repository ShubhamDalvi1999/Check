import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

// Mount the app when the DOM is ready
const mount = () => {
  const root = document.getElementById('root')
  if (root) {
    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )
  }
}

// Ensure DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mount)
} else {
  mount()
} 