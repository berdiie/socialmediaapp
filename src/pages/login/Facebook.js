import React,{useState} from 'react'
import {Link} from  'react-router-dom';
import  './Facebook.css';
export default function Fblogin() {
    const[inputs,setInputs]=useState({});
//   console.log("value==>",inputs);

  const setLogin=(event)=>{
      const name=event.target.name;
      const value=event.target.value;
      setInputs({...inputs,[name]:value})
    //   console.log(inputs);
  }

  const pageSubmit=(event)=>{
    event.preventDefault();
    console.log(inputs)
  }
    return (
        <React.Fragment>
          <center><div class="head"><b>facebook</b></div></center>
           <form><center>
             <div class="container">
                <hr></hr>
            <div class="title">Log in to Facebook</div><br/>
        <label>
        <input  type="text" placeholder="Email address or phone number"  name="id" size="40" onChange={setLogin}/><br/><br/>
        <input type="password" placeholder="Password"  size="40" name="password" onChange={setLogin}/><br/><br/>
        <button type="submit" class="button" onClick={pageSubmit}>Login</button>
        </label> 
        <div class="log">
        <Link to="./">Forgotten account?</Link>
        <hr></hr>
        <Link to="/register"><button type="submit" class="button2">Create New Account</button></Link>
           <hr></hr>
        </div>
    </div>
    </center>
    </form> 
        </React.Fragment>
    )}