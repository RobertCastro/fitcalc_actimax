import './App.css';
import IMC from './components/IMC';
import { Route, Routes } from 'react-router-dom';

const Home = () => <h1>FitCalc</h1>
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home />}  />
      <Route path='/imc' element={<IMC />}  />
      </Routes>
    </div>
  );
}

export default App;
