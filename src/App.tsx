import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <NextUIProvider>
      <Router>
        <Routes>

        </Routes>
      </Router>
    </NextUIProvider>
  );
}

export default App;
