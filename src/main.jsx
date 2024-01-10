import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import {AuthProvider} from './context/AuthContext.jsx'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <Router>
      <AuthProvider>
          <App />
          <ToastContainer position="top-center"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            limit={3}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"/>
      </AuthProvider>
      </Router>
    </QueryClientProvider>
  </React.StrictMode>,
)
