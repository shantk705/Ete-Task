import React from "react";

import axios from "axios";
import EditUserForm from "./editUserForm";
import { useState } from "react";

interface IProps {
  users: any;
  isopen:any;
  refresh:any
  


}

const UserTable: React.FunctionComponent<IProps> = props => {
    
    const [iseditopen, setiseditopen] = useState(false)
    const [selecteduser, setselecteduser] = useState({id:"",Full_Name:'',Email:'',Age:'',Country:''})
    async function deleteEmployee(id:number){
axios.delete(`http://localhost:3000/employee/delete/${id}`,{}).then(function (response) {
  
       if(response.status===200){
        props.refresh()
       }
        
    
  })
  .catch(function (error) {
    console.log(error);
  });
    }
    function toggleEdit(){
        setiseditopen(!iseditopen)
    }
    
    
  return (
    <div className="user-table">
        {iseditopen?<EditUserForm isopen={toggleEdit} user={selecteduser} refresh={props.refresh}/>:""}
        <div className="titleContainer">
      <h1>View users</h1>
      <button onClick={()=>props.isopen()} className="addBtn">Add Emplyee</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Country</th>
            <th>Action</th>

          </tr>
        </thead>
        <tbody>
          {props.users.length > 0 ? (
            props.users.map((i:any,index:number) => (
              <tr key={i.id}>
                <td>{i["Full_Name"]}</td>
                <td>{i["Email"]}</td>
                <td>{i["Age"]}</td>
                <td>{i["Country"]}</td>
                <td>
                  <button className="editbtn" onClick={() => {setiseditopen(!iseditopen); setselecteduser(props.users[index])}}>edit</button>
                  <button className="delbtn" onClick={() =>{deleteEmployee(i.id)}}>delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>no users</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default UserTable;
