import './App.css';
import './styles/bootstrap.min.css';
import './styles/main.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NextUIProvider } from "@nextui-org/react";
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <NextUIProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />

        </Routes>
      </Router>
    </NextUIProvider>
  );
}

export default App;
