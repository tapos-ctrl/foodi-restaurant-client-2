// import useAuth from "../../hock/useAuth";

import { FaFacebook, FaGoogle } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import useAuth from "../../hock/useAuth";
import { useState } from "react";


import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";

const Login = () => {

    const {facebookSignUp,googleLogIn,logInUser,users} = useAuth()


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMassage, setErrorMassage] = useState('')


    const location = useLocation()

    const navigate = useNavigate();




    const handleLogIn = (e) =>{
        e.preventDefault()

        if(password.length < 6 ){
            setErrorMassage("Your password must be 6 characters")
            
            return
       }else if(!/[a-z]/.test(password)){
        setErrorMassage("Your password must one letter")
        return
        
       }else if(!/[0-9]/.test(password)){
        setErrorMassage("Your password must one digit.")
        return
        }

        logInUser(email, password)
        .then((userCredential) => {

            const user = userCredential.user;
            const User = user.email
  

            if(location.state){
                navigate(location.state)
             }else{
                 navigate('/')
             }
            
          })
          .catch((error) => {
            const errorCode = error.code;
            setErrorMassage(errorCode)

          })
    }

    const handleGoogleLogin = () =>{

        googleLogIn()
        .then((result) => {
            const user = result.user;
            console.log(user)
            console.log(result)

            
          }).catch(() => {

          });

        
    }

    const handleFacebookSignUp = () =>{
        facebookSignUp()
        .then(() => {
 
        
          })
          .catch(() => {

          });

    }


    if(users){
        navigate('/')
    }



    return (
        <div className="hero min-h-screen ">
            <Helmet>
                <title>Foodi Restaurant | Log In</title>
            </Helmet>
            <div className="hero-content flex-col  border border-primary-bg rounded-lg">
                <form className="card-body" onSubmit={handleLogIn}>
                <h1 className="text-2xl font-semibold text-center">Login</h1>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" onBlur={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" onBlur={(e) => setPassword(e.target.value)} required />
                    <div className="form-control">
                    {
                        errorMassage && <div className="toast toast-center toast-middle">
                        <div className="alert bg-primary-bg font-semibold text-[red]">
                            <span>{errorMassage}</span>
                        </div>
                        </div>
                    }
                    </div>

                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <input className="btn bg-primary-bg text-neutral-50" type="submit" value="Sign Up" />
                    </div>
                    <div className="form-control mt-6">
                    <span>create a new account<Link to={'/signup'} className="underline text-primary"> sign up</Link></span>
                    </div>
                </form>
                <div className="flex gap-8 mb-5 text-3xl text-neutral-950">
                    <FaGoogle onClick={handleGoogleLogin} className="hover:cursor-pointer"></FaGoogle>
                    <FaFacebook onClick={handleFacebookSignUp} className="hover:cursor-pointer"></FaFacebook>
                    <FiGithub  className="hover:cursor-pointer"/>
                </div>
            </div>
        </div>
    );
};

export default Login;