
import './App.css';
import Dashboard from './components/pages/Dashboard.js';
import ClienteListar from './components/cliente/ClienteListar';

   


// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
   <div className="App">
    <Dashboard />
    <ClienteListar />
   </div>
  
  );
}

export default App;
