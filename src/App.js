import { BrowserRouter, Route, Routes } from "react-router-dom";

import './css/App.css';
import Homepage from './pages/home';

function App() {
  return (
    <div style={{backgroundColor:"black"}}>
      <BrowserRouter>
      <Routes>
        <Route path="/" Component={Homepage} />
      </Routes>
      </BrowserRouter>

      </div>
  );
}

export default App;
