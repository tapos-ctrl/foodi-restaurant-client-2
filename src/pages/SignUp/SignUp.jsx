import { useState } from "react";
import useAuth from "../../hock/useAuth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { FaFacebook, FaGoogle } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";




const SignUp = () => {
    const {createUser,setUsers,googleSignUp,facebookSignUp} = useAuth()
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [image, setImage] = useState('')
    const [errorMassage, setErrorMassage] = useState('')
    
    const storage = getStorage();

    const handleSignUp = async (e) =>{
  
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
       

        createUser(email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;

                    if(user.email){
                        const storageRef = ref(storage, `user/${v4()}`);
                    uploadBytes(storageRef, image).then((data) => {

                        getDownloadURL(data.ref)
                        .then((url) => {
                              updateProfile(auth.currentUser, {
                                displayName: name, photoURL: url
                              })
                             setUsers(user)
                             console.log(url)
                            if(user){
                                Swal.fire({
                                    title: "successfully sign up",
                                    text: "You clicked the button!",
                                    icon: "success"
                                  });
                            }
                        })
                      });
                    }
                    setErrorMassage('')
            })
            .catch((error) => {
                const errorCode = error.code;

                console.log(error.code)

                if(errorCode == 'auth/email-already-in-use'){
                setErrorMassage('email-already-in-use')
                }else{
                    setErrorMassage(errorCode)
                }

            })

    }


    const handleGoogleSignUp = () =>{
        googleSignUp()
        .then((result) => {
            const user = result.user;
            console.log(user)
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
    
    return (
        <div className="hero min-h-screen ">
            <Helmet>
                <title>Foodi Restaurant | Sign Up</title>
            </Helmet>
            <div className="hero-content flex-col  border border-primary-bg rounded-lg">
                <form className="card-body" onSubmit={handleSignUp}>
                <h1 className="text-2xl font-semibold text-center">Sign Up</h1>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="email" className="input input-bordered" onBlur={(e) => setName(e.target.value)} required />
                    </div>
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
                    <div className="form-control pt-3">
                    <input type="file" className="file-input file:border-0 file:bg-primary-bg w-full max-w-xs" onBlur={(e) => setImage(e.target.files[0])} />
                    </div>
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    <label className="label">
                        <span>already have an account<Link to={'/login'} className="text-[blue] underline"> Login now</Link></span>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <input className="btn bg-primary-bg text-neutral-50" type="submit" value="Sign Up" />
                    </div>
                </form>
                <div className="flex gap-8 mb-5 text-3xl text-neutral-950">
                    <FaGoogle onClick={handleGoogleSignUp} className="hover:cursor-pointer"></FaGoogle>
                    <FaFacebook onClick={handleFacebookSignUp} className="hover:cursor-pointer"></FaFacebook>
                    <FiGithub  className="hover:cursor-pointer"/>
                </div>
            </div>
        </div>
    );
};

export default SignUp;