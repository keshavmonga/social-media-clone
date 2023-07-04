import { createBrowserRouter, RouterProvider, Navigate, useNavigate } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage'
import NotFound from "./pages/NotFoundPage/NotFound";
import LoginPage from './pages/LoginPage/Login'
import RegisterPage from './pages/RegisterPage/Register'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import ContactUs from './pages/ContactUs/ContactUs'
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { loadUser } from "./Actions/User";
import './App.css'

const App = () => {

  const { isAuthenticated } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  const ProtectedRoute = ({ children }) => {
    if (isAuthenticated) { return children }
    return <Navigate to="/" />
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: isAuthenticated ? <HomePage /> : <LoginPage />,
    },
    {
      path: "/register",
      element: isAuthenticated ? <HomePage /> : <RegisterPage />,
    },
    {
      path: "/home",
      element: <ProtectedRoute><HomePage /></ProtectedRoute>,
    },
    {
      path: "/profile/me",
      element: <ProtectedRoute><ProfilePage mine={true} /></ProtectedRoute>,
    },
    {
      path: "/profile/:id",
      element: <ProtectedRoute><ProfilePage mine={false} /></ProtectedRoute>,
    },
    {
      path: "/contact",
      element: <ProtectedRoute><ContactUs mine={false} /></ProtectedRoute>,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ]);

  return (
    <>
      <header><h1>My Social Media App</h1></header>
      <RouterProvider router={router} />
      <footer>&copy; 2023 My Social Media. All rights reserved.</footer>
    </>
  )
}

export default App
