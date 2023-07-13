import React, { useState, useEffect } from "react";
import axios from "axios";



interface IProps {
  user: any;
  isopen:any;
refresh:any;
 
  
}

export default function EditUserForm(props: IProps) {
  const [user, setUser] = useState(props.user);
  useEffect(() => setUser(props.user), [props]);
  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/employee/update/${user.id}`,user).then((response)=>{if(response.status===200){props.refresh() ;props.isopen()}}).catch(err=>console.log(err))
  
    
  };
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <div className="user-form">
        <div className="titleContainer">
      <h1>edit Employee</h1>
      </div>
      <form className="form-edit" onSubmit={onFormSubmit}>
        <div className="form-row">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="please input Name"
            name="Full_Name"
            value={user.Full_Name}
            onChange={onInputChange}
          />
          
        </div>
        <div className="form-row">
          <label>Email</label>
          <input
            type="text"
            placeholder="please input your Email"
            name="Email"
            value={user.Email}
            onChange={onInputChange}
          />
        </div>
        <div className="form-row">
          <label>Age</label>
          <input
            type="number"
            placeholder="please input age"
            name="age"
            value={user.Age}
            onChange={onInputChange}
          />
        </div>
        <div className="form-row">
          <label>Age</label>
          <input
            type="text"
            placeholder="please input Country"
            name="Country"
            value={user.Country}
            onChange={onInputChange}
          />
        </div>
        <div className="form-row">
          <button>Update</button>
          <button onClick={() => props.isopen()}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
