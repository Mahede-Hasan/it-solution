import logo from './logo.svg';
import './App.css';
import Header from './components/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Shared/Footer/Footer';
import Login from './components/Login/Login';
import AllBlogs from './components/Blogs/AllBlogs';
import Register from './components/Register/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TeamAll from './components/Team/TeamAll';
import ServiceAll from './components/Home/Services/ServiceAll';
import About from './components/About/About';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<AllBlogs></AllBlogs>}></Route>
        <Route path='/services' element={<ServiceAll></ServiceAll>}></Route>
        <Route path='/teams' element={<TeamAll></TeamAll>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
