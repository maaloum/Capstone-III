import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Details from './Components/Details/Details';

function App() {
  return (
    <div className="App" data-testid="app-container">

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>

    </div>
  );
}

export default App;
