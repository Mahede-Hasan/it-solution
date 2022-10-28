import React from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase_init';
import Loading from '../Shared/Loading/Loading';
import Social from '../Social/Social';
import './Login.css'

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);
    let errorElement;
    if (error || resetError) {
        errorElement = <p className='text-danger'>{error?.message || resetError?.message}</p>
    };

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        navigate('/home')
    }

    const handleLoginSubmit = event => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password)
    }

    const handleReset = event => {
        const email = event.target.email.value;
        sendPasswordResetEmail(email)
        toast('Check your email')
    }

    return (
        <div className='login-container'>
            <form onSubmit={handleLoginSubmit} className='login-form-container mx-auto'>
                <div className="login-form-inner-container">
                    <h2 className=''>LOGIN</h2>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" name='email' className="form-control w-75 " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" name='password' className="form-control w-75" id="exampleInputPassword1" placeholder="Password" required />
                        <p>Forget password? <span className='reset-password' onClick={handleReset}>Reset Password</span></p>
                    </div>
                    <p>{errorElement}</p>
                    <button type="submit" className="form-btn">LOGIN</button>
                    <p className='pt-2 text-white'>Don't have an account? <Link to='/register' className='register-btn'>Register</Link></p>
                    
                </div>
                   
                <div className="divider-line">
                    <hr />
                    <p>Or</p>
                    <hr />
                    </div>
                    <Social></Social>
                
            </form>
        </div>
    );
};

export default Login;