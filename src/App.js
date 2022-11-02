import './App.css';
import Header from './components/Shared/Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { RingLoader } from 'react-spinners';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import AllBlogs from './components/Blogs/AllBlogs';
import ServiceAll from './components/Home/Services/ServiceAll';
import TeamAll from './components/Team/TeamAll';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import NotFound from './components/NotFound/NotFound';

function App() {
  const [loading, setLoading] = useState(false);

  // loading spinner
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])
  return (
    <div>
      {
        loading ?
          <div className='loading-spinner'>
            <RingLoader
            color={'rgba(38, 163, 246, 1)'}
            loading={loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          </div>
          :
          <>
            <Header></Header>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/home' element={<Home></Home>}></Route>
                <Route path='/blogs' element={<AllBlogs></AllBlogs>}></Route>
                <Route path='/services' element={<ServiceAll></ServiceAll>}></Route>
                <Route path='/teams' element={<TeamAll></TeamAll>}></Route>
                <Route path='/about' element={<About></About>}></Route>
                <Route path='/contact' element={<Contact></Contact>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/register' element={<Register></Register>}></Route>
                <Route path='*' element={<NotFound></NotFound>}></Route>
            </Routes>
          </>
      }

      <ToastContainer />
    </div>
  );
}

export default App;
