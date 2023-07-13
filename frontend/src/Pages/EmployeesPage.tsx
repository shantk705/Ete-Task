import React from 'react'
import UserTable from '../Components/userTable'
import { useState,useEffect,useReducer } from 'react';

import axios from 'axios';
import AddUserForm from '../Components/addUserForm';





const EmployeesPage = () => {
    const [employees, setEmployees] = useState<any>("");
    const [isopen, setisopen] = useState(false)
    
    const [refresh, setRefresh] = useReducer((x) => x + 1, 0);
 
   
    
  
    useEffect(() => {
        axios.get(`http://localhost:3000/employee/list`).then((res)=>{
            console.log(res)
          
          setEmployees(res.data)
        })
    
  
    }, [refresh])
    
function toggle (){setisopen(!isopen)}

    




  return (
    <>
    
    {isopen?<AddUserForm  isopen={toggle} refresh={setRefresh}/>:""}
    <div className='employeePage'>
    <UserTable 
           users={employees}
           isopen={toggle}
           
           refresh={setRefresh}
       
       />
       </div>
    
    </>
  )
}

export default EmployeesPage