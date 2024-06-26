import '../assets/scss/customizeBootstrap.scss';
import "bootstrap-icons/font/bootstrap-icons.css";
import {Route, createBrowserRouter, createRoutesFromElements, Navigate } from 'react-router-dom';
import LayoutVisiter from '../layout/layoutVisiter';
import LayoutUser from '../layout/layoutUser';
import Home from '../page/home';
import Login from '../page/login';
import Signup from '../page/signup';
import ResetPassword from '../page/resetPassword';
import VerifyEmail from '../page/verifyEmail';
import Dashboard from '../page/dashboard';
import Error from '../page/error';
import loaderProfile from './loaders/loaderProfile';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route >
      <Route element={<LayoutVisiter/>}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Route>
      <Route element={<LayoutUser/> }>
        <Route path="/dashboard" 
          loader={loaderProfile}
          element={<Dashboard />} 
          errorElement = {<Navigate to="/*" replace />}
          />
      </Route>

      <Route path="/*" element={<Error />} />
    </Route>
  )
)

export default router

