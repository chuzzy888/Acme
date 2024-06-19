import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Categories from "./pages/Categories";
import SinglePost from "./components/SinglePost";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import CreateBlog from "./pages/CreateBlog";
import Account from "./pages/Account";
import BlogDetail from "./components/BlogDetail";
import BlogList from "./pages/BlogList";
import Register from "./components/Register";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import logo from "./assets/images/logo.jpeg";

const PrivateRoute = ({ children }) => {
  const [user] = useAuthState(auth);
  return user ? children : <Navigate to="/Account" />;
};

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen animate__animated animate__flash">
        <img src={logo} alt="" className="w-36" />
      </div>
    );
  }

  return (
    <Router>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="/categories" element={<Categories />} />
          <Route path="/singlepost" element={<SinglePost />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/create"
            element={user ? <CreateBlog /> : <Navigate to="/Account" />}
          />
          <Route path="/Account" element={<Account />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/posts/:id" element={<BlogDetail />} />
          <Route path="/blogs/:category" element={<BlogList />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
