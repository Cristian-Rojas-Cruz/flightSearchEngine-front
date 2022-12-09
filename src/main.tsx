import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './views/App'
import './assets/scss/index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// onst container = document.getElementById('root')!;
// const root = createRoot(container);

// root.render(
//   <App/>
// );
