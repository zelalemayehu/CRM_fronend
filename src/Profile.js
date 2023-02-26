import './App.css';
import {useState} from 'react';
import axios from 'axios';

function Profile() {
    let [_id, setId] = useState();
    let [name, setName] = useState();
    let [password, setpassword] = useState();
    let [phone, setphone] = useState();
    let [dob, setdob] = useState();
    let handleSubmit = (event) => {
      event.preventDefault();
      let URL = 'http://localhost:8181/profile';
      axios.post(URL, {"_id": parseInt(_id) , "name": name, "password": password, "phone": phone, "dob": dob})
      .then((response) => {
        setId(''); setName(''); setpassword('');setphone('');setdob('');
      })
      .catch(err => console.log(err))
    }
    return (<div>
      <h1>Profile Registration Form</h1>
      <form onSubmit = {handleSubmit}>

        <div className = 'form-group'>
        <input type = 'number' name = 'id' value = {_id} placeholder = 'Enter id'
        autoComplete='off' 
        className = 'form-control' onChange = {e => setId(e.target.value)}></input>
        </div>

        <div className = 'form-group'>
        <input type = 'tel' name = 'phone' value = {phone} 
        autoComplete='off' 
        className = 'form-control' onChange = {e => setId(e.target.value)}></input>
        </div>
        
        <div className = 'form-group'>
        <input type = 'password' name = 'password' value = {password} 
        autoComplete='off' 
        className = 'form-control' onChange = {e => setId(e.target.value)}></input>
        </div>

        <div className = 'form-group'>
        <input type = 'tel' name = 'phone' value = {phone} 
        autoComplete='off' 
        className = 'form-control' onChange = {e => setId(e.target.value)}></input>
        </div>

        <div className = 'form-group'>
        <input type = 'date' name = 'dob' value = {dob} placeholder = 'Enter name'
        autoComplete='off'
        className = 'form-control' onChange = {e => setName(e.target.value)}></input>
        </div>
        <div>
          <input type = "submit" className = 'btn btn-primary' value = "Register"></input>
        </div>
      </form>
    </div>)
  }
  export default Profile;