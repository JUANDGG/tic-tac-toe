import React from 'react'
import ReactDOM from 'react-dom/client'


//Components
import App from '@components/App.jsx'

//style sheets


import '@styleSheets/global.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
