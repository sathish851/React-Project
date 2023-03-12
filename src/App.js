import './App.css';
import { Route, Routes } from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import NavigatinBar from './components/NaviagtionBar/NavigatonBar';

import Profile from './pages/Profile/profile';
import Group from './pages/Group/group';

function App() {
  
  return (
      <NavigatinBar>
      <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/profile" element={<Profile />} /> 
            <Route path='/group' element={<Group/>}/>
          </Routes>
        </AnimatePresence>  
      </NavigatinBar>
  );
}

export default App;
