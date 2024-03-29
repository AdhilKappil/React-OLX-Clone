import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './componets/Firebase/context.jsx';
import PostContextProvider from './componets/Firebase/postContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PostContextProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
    </PostContextProvider>
  </React.StrictMode>
)
