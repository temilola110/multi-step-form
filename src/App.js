import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createContext, useState } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Complete from './components/Complete';

export const AppContext = createContext();


const App = () => {
  const [userData, setUserData] = useState({
    userInfo: {
      name: '',
      email: '',
      phone: ''
    },
    plan: {
      planTitle: 'Arcade',
      paymentPlan: 'monthly',
      price: 9
    },
    addOns: []
  });


  return (
    <BrowserRouter>
      <AppContext.Provider value={{ userData, setUserData }}>
        <Routes>
          <Route path='/' element={<Step1 />} />
          <Route path='/step2' element={<Step2 />} />
          <Route path='/step3' element={<Step3 />} />
          <Route path='/step4' element={<Step4 />} />
          <Route path='/complete' element={<Complete />} />
        </Routes>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;