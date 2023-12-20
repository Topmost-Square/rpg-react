import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Game } from './pages/Game';
import { Main } from './pages/Main';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
