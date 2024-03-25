import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import { Register } from './pages/signup/Register';
import  { Toaster } from 'react-hot-toast';


function App() {
  return (
    <>
    <Toaster position="top-center" reverseOrder={false}/>
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
     </Routes>
    </>
  );
}

export default App;
