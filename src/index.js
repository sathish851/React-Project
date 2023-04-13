import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/Register/register';
import { Provider } from 'react-redux';
import store from './Store/store';
import Loading from './components/Loading/loading';
import { persistStore } from 'redux-persist/lib';
import { PersistGate } from 'redux-persist/es/integration/react'
import CreateGroup from './pages/CreateGroup/createGroup';
import JoinGroup from './pages/JoinGroup/joinGroup';
import ProfileDetails from './pages/Profile_Details/ProfileDetails';
import CreateTask from './pages/CreateTask/createTask';
import { ToastContainer, toast } from 'react-toastify';
import Home from './pages/Home/home';
const root = ReactDOM.createRoot(document.getElementById('root'));
let persistor =persistStore(store);
root.render(
  <Provider store={store}>
    <React.StrictMode>
    
      <PersistGate persistor={persistor}>

          <BrowserRouter>
          <ToastContainer 
          position="bottom-right"
          reverseOrder={false}
          
          />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user/*" element={<App />} />    
              <Route path="/login" element={ <Login /> } />
              <Route path="/register" element={<Register />} />
              <Route path="/creategroup" element={<CreateGroup />} />
              <Route path="/joingroup" element={<JoinGroup />} />
              <Route path="/profiledetails" element={<ProfileDetails />} />
              <Route path="/createtask" element={<CreateTask />} />
              
            </Routes>
          
          </BrowserRouter>
        </PersistGate>
      </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
