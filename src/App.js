import React, {useEffect} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import {auth} from "./firebase";
import {useDispatch, useSelector} from "react-redux";
import {logout, login, selectUser} from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //Logged In
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        //Logged Out
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path="/profile" element={<ProfileScreen />} />
            <Route exact path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
