import React, { useState } from "react";

import axios from "axios";


interface IProps {
//   onAddUser: (user: IBaseUser) => void;
isopen:any;
refresh:any
}
const initUser = {Full_Name:"",Email:"",Age:"",Country:""};
const AddUserForm: React.FunctionComponent<IProps> = props => {
  const [formValue, setFormValue] = useState(initUser);

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post('http://localhost:3000/employee/create', formValue
      
      )
      .then(function (response) {
        if(response.status===200){
            props.isopen()
            props.refresh()
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    
  
  };
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  return (
    <div className="user-form">
    <div className="titleContainer">
      <h1 >add new employee</h1>
      <button onClick={()=>{props.isopen()}}> close</button>
      </div>
      <form className="form-edit" onSubmit={onFormSubmit}>
        <div className="form-row">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="please input name"
            name="Full_Name"
            value={formValue.Full_Name}
            onChange={onInputChange}
          />
       
        </div>
        <div className="form-row">
          <label>Email</label>
          <input
            type="text"
            placeholder="please input your Email"
            name="Email"
            
            onChange={onInputChange}
          />
        
        </div>
        <div className="form-row">
          <label>Age</label>
          <input
            type="number"
            placeholder="please input age"
            name="Age"
            
            onChange={onInputChange}
          />
      
        </div>
        <div className="form-row">
          <label>Country</label>
          <input
            type="text"
            placeholder="please input your Country"
            name="Country"
            
            
            onChange={onInputChange}
          />
      
        </div>
        <div className="form-row">
          <button type="submit">Add new employee</button>
        </div>
      </form>
    </div>
  );
};
export default AddUserForm;
