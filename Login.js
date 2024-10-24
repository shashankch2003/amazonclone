import React, { useState } from "react";
import './Login.css';
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
        .catch(error => alert(error.message))

        
    }

    const register = e =>{
        e.preventDefault();

        auth.createUserWthEmailAndPassword(email, password)
            .then((auth) =>{
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
        .catch(error => alert(error.message))


        }
    return (
    
      <div className='login'>
           <Link to='/'>
          <img
              className='login__logo'
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiTcDMpiVe0pSutnR0YWOXy3rIIBVpJzuHRA&usqp=CAU" alt="" />
             </Link>
          <div className='login__container'>
              <h1>Sign-in</h1>
              <form>
                  <h5>E-Mail</h5>
                  <input type='text' value={email} onChange=
                      {e => setEmail(e.target.value)} />
                  <h5>Password</h5>
                    <input type='password' value={password}
                    onChange={e => setPassword(e.target.value)}/>
                  
                    <button type='submit' onClick={signIn}
                        className='login__SignInButton'>sign in</button>
                      
                  
              </form>
              <p>by signing in you agree to amazon's clones conditions of use & sale .please see our privacy Notice, our cookie Notice and internet based ads notice. </p>
            <button onClick={register}
                className='login__registerbutton'>Create your own Account </button>
          </div> 
      </div>
  )
}

export default Login
