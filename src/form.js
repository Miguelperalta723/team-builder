import React, { useState } from 'react';
import './App.css';

function Form(props) {

  const [member, setMember] = useState({});

  const submitHandler = (event) => {
     event.preventDefault()

    props.formStateName = member.name
     
  }

  const changeHandler = (event) => {
      console.log(member)
      setMember( {...member, [event.target.name] : event.target.value })
  }





  return (
    <div className="Form">
      <form onSubmit={submitHandler}>
        <label>Name: 
          <input
            name='name'
            type='text'
            placeholder='enter your name'
            value={member.name}
            onChange={changeHandler}

           />
        </label>

        <label>Email: 
          <input 
            name='email'
            type='text'
            placeholder='enter your email'
            value={member.email}
            onChange={changeHandler}

          />
        </label>

        <label>Role: 
          <input 
            name='role'
            type='text'
            placeholder='enter your role'
            value={member.role}
            onChange={changeHandler}

          />
        </label>
        <button>Submit</button>
      </form>
     
    </div>
  );
}

export default Form;