import { Route, Routes } from 'react-router-dom';
import './App.css';
import MatowinPage from './pages';
// import ContactUs from './pages/ContactUs';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MatowinPage />} />
        {/* <Route path='/contact' element={<ContactUs />} /> */}
      </Routes>
    </div>
  );
}

export default App;
