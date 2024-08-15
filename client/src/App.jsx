import {lazy, Suspense } from 'react';
import './App.css'
import {Routes,Route} from 'react-router-dom'
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Home = lazy(() => import('./components/Home'))
export const Navbar = lazy(() => import('./components/Navbar'))
export const About = lazy(() => import('./components/About'))
export const Contact = lazy(() => import('./components/Contact'))
export const Donate = lazy(() => import('./components/Donate'))
export const NotFound = lazy(() => import('./components/NotFound'))
export const Footer = lazy(() => import('./components/Footer'))
import LOader from './components/Loader';
import PaymentSuccess from './components/PaymentSuccess';


function App() { 
 

  return (
    <>
      <Suspense fallback={<LOader/>}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/donate' element={<Donate/>} />
        <Route path='/paymentsuccess' element={<PaymentSuccess/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer/>
      <ToastContainer position='bottom-left' transition={Bounce} autoClose={5000}/>
      </Suspense>
    </> 
  )}




export default App
