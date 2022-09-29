import React,{useState} from 'react'
import {Link} from  'react-router-dom';
import  './Facebookreg.css';
export default function Fbsignup() {
  const[inputs,setInputs]=useState({firstname:"",surname:"",mailorphone:"",password:"",day:"",month:"",year:"",gender:""});
  // console.log("value==>",inputs);

  const setSignin=(event)=>{
      const name=event.target.name;
      const value=event.target.value;
      setInputs({...inputs,[name]:value})
  }

  const regSubmit=(event)=>{
    event.preventDefault();
    console.log(inputs)
  }
    return (
        <React.Fragment>
            <center><div class="head"><b>facebook</b></div></center>
            <center> <form>
                <div class="reg">
                  <hr></hr>
                <div class="title1">Create a new account</div>
                <div class="title2">It's quick and easy.</div>
                <hr></hr>
  <div class="form-row">
    <div class="form-group col-md-6">
      <input type="text" class="fheight"  placeholder="First Name" id="inputEmail4" name='firstname' onChange={setSignin} ></input>
    </div>
    <div class="form-group col-md-6">
      <input type="text" class="sheight" placeholder="Surname"  id="inputPassword4" name='surname' onChange={setSignin} ></input>
    </div>
  </div>
  <div class="form-group">
    <input type="text" class="mailheight" id="inputAddress" placeholder="Email address or phone number"  name='num' onChange={setSignin}></input>
  </div>
    <div class="form-group">
      <input type="password" class="mailheight" placeholder="New Password" id="inputEmail4" name='password' onChange={setSignin} ></input>
    </div>
  <div class="row">
  <div class="col">
      <label for="inputState" class="dob">Date of birth:</label></div>
      <div class="col">
      <select id="inputState" class="date" name="day" onChange={setSignin}>
        <option>24</option>
        <option>23</option>
        <option>22</option>
        <option>21</option>
        <option>20</option>
        <option>19</option>
        <option>18</option>
        <option>17</option>
        <option>16</option>
        <option>15</option>
      </select>
    </div>
    <div class="col">
    <select id="inputState" class="date" name="month" onChange={setSignin}>
        <option>January</option>
        <option>February</option>
        <option>March</option>
        <option>April</option>
        <option>May</option>
        <option>June</option>
        <option>July</option>
        <option>August</option>
        <option>September</option>
        <option>November</option>
        <option>December</option>
      </select>
        </div>
        <div class="col">
        <select id="inputState" class="date" name="year" onChange={setSignin}>
        <option>2014</option>
        <option>2013</option>
        <option>2012</option>
        <option>2011</option>
        <option>2010</option>
        <option>2009</option>
        <option>2008</option>
        <option>2007</option>
        <option>2006</option>
        <option>2005</option>
        <option>2004</option>
      </select>
            </div>
        </div><br/>
  <fieldset class="row">
    <div class="col">
    <legend class="col-form-label col-sm-2 float-sm-left pt-0">Gender:</legend></div>
    <div class="col">
      <div class="form-check">
        <input class="form-check-input" type="radio" name="gender" id="gridRadios1" value="female" onChange={setSignin}></input>
        <label class="form-check-label" for="gridRadios1">
          Female
        </label>
      </div></div>
      <div class="col">
      <div class="form-check">
        <input class="form-check-input" type="radio" name="gender" id="gridRadios2" value="male" onChange={setSignin}></input>
        <label class="form-check-label" for="gridRadios2">
          Male
        </label>
      </div></div>
      <div class="col">
      <div class="form-check disabled">
        <input class="form-check-input" type="radio" name="gender" id="gridRadios3" value="other" onChange={setSignin}></input>
        <label class="form-check-label" for="gridRadios3">
         Other
        </label>
      </div>
    </div>
  </fieldset><br/>
  <div class="form-group">
 <p class="p1"> People who use our service may have uploaded your contact information to Facebook.
  <font color="blue">Learn more.</font></p>
  <p class="p2">
By clicking Sign Up, you agree to our  <font color="blue"> Terms, Privacy Policy and Cookies Policy</font>.<br/> You may receive SMS
 notifications from us and can opt out at any time.
 </p>
  </div>
  <button type="submit" class="button3" onClick={regSubmit}>Sign Up</button>
  <br></br>
  <div class="log">
            <Link to='/'>Already have an account?</Link>
 </div>
 <hr></hr>
 </div>
</form>
</center>
            </React.Fragment>
    )}