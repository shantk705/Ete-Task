
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { UserLayout } from "./Layouts/userLayout";
import EmployeesPage from "./Pages/EmployeesPage";

import "./App.css";
import HomePage from "./Pages/HomePage";



 export default function App() {
  
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserLayout/>}>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/employees" element={<EmployeesPage/>}/>

      </Route>

    </Routes>
    </BrowserRouter>

    </>
    
  );
}



