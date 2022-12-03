import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Lists from './components/lists';
import Register from './components/register';
import EditUser from './components/editUser';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/lis' element={<Lists/>}/>
        <Route path='/reg' element={<Register/>}/>
        <Route path='/edt/:id' element={<EditUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
