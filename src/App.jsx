import './App.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import CreateReviewPage from './pages/CreateReviewPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";
import PrivateRoute  from './utils/privateRoute'
import LoginRoute from './utils/loginRoute'
import ReviewPage from './pages/ReviewPage'

function App() {
  return (
    <div className='container min-h-screen mx-auto px-10 lg:px-16'>
      <Navbar/>

        <Routes>
          <Route element={<PrivateRoute/>}>
            <Route path='/' element={<HomePage/>} exact />
            <Route path="/create" element={<CreateReviewPage />} />
          </Route>
          <Route element={<LoginRoute/>}>
            <Route path="/login" element={<LoginPage />} />
          </Route>
         
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/review/:id" element={<ReviewPage />} />
        </Routes>

    </div>
  )
}

export default App
