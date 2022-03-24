import { Route, Routes } from "react-router-dom";
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<div>home</div>} />
        <Route path="page1" element={<div>page1</div>} />

      </Routes>
    </div>
  );
}

export default App;
