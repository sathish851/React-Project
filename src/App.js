import './App.css';
import { Route, Routes } from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import NavigatinBar from './components/NaviagtionBar/NavigatonBar';

import Profile from './pages/Profile/profile';
import Group from './pages/Group/group';
import Notification from './pages/Notification/notification';
import Task from './pages/Tasks/task';

function App() {
  
  return (
      <NavigatinBar>
      <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/profile" element={<Profile />} /> 
            <Route path='/group' element={<Group/>}/>
            <Route path='/notification' element={<Notification />}/>
            <Route path='/tasks' element={<Task />}/>
          </Routes>
        </AnimatePresence>  
      </NavigatinBar>
  );
}

export default App;
