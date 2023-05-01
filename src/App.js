import './App.css';

import {BrowserRouter, Routes, Route} from "react-router-dom";

import ToolBar from "./components/ToolBar"
import RegisterPage from "./Pages/Register.Page";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <ToolBar/>
          <Routes>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  );

}
export default App;
