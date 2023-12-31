import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'

const Login = () => {
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch('/signin', {
            method : "POST",
            headers : {
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,
                password
            })
        });
        const data = res.json();
        if (res.status === 400 || !data){
            window.alert("Inavlid Credentials");
        } else {
            window.alert("Login Successfull");
            history.push("/");
        }
    }


  return (
    <div>
           <form action="POST">

            <div>
                <label htmlFor="email">
                    <i class="zmdi zmdi-account-o"></i>
                </label>
                <input type="email" name='email' id='email' value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Your Email' />
            </div>
            <div>
                <label htmlFor="password">
                    <i class="zmdi zmdi-account-o"></i>
                </label>
                <input type="password" name='password' id='password' value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Your Password' />
            </div>
           
            <div>
                <input type="submit" name='signin' id='signin' className='btn btn-primary btn-lg' value="Log in" onClick={loginUser} />
            </div>
           </form>
            <NavLink to="/registration" className="nav-link">Craete An Account</NavLink>
    </div>
  )
}

export default Login