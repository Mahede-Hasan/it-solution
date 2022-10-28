import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase_init';
import Loading from '../Shared/Loading/Loading';
import { toast } from 'react-toastify';
import Social from '../Social/Social';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()
    const [passwordError, setPasswordError] = useState('')
    const [updateProfile, updating, errorUpdate] = useUpdateProfile(auth);
    const [sendEmailVerification, sending, verifyError] = useSendEmailVerification(auth);
    const [agree, setAgree] = useState(false)

    let errorElement;
    if (error || errorUpdate || verifyError) {
        errorElement = <p className='text-danger'>{error?.message || errorUpdate?.message || verifyError?.message}</p>
    };

    if (loading || updating || sending) {
        return <Loading></Loading>
    }

    if (user) {
        navigate('/home')
    }

    const handleRegisterSubmit = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;


        if (password !== confirmPassword) {
            setPasswordError("Your password didn't match")
            return;
        }
        if (password.length > 6) {
            setPasswordError('Password must be 6 character or longer')
            return;
        }
        else {
            createUserWithEmailAndPassword(email, password)
            updateProfile({ displayName: name })
            sendEmailVerification(email)
            toast('Successfully Register')
        }

    }
    return (
        <div className='register-container'>
            <form onSubmit={handleRegisterSubmit} className='form-container mx-auto'>
                <div className="form-inner-container">
                    <h2 className=''>Register</h2>
                    <div className="form-group">
                        <label for="exampleInputName">Name</label>
                        <input type="text" name='name' className="form-control w-75 " id="exampleInputName" aria-describedby="NameHelp" placeholder="Enter Name" required />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" name='email' className="form-control w-75 " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" name='password' className="form-control w-75" id="exampleInputPassword1" placeholder="Password" required />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Confirm Password</label>
                        <input type="password" name='confirmPassword' className="form-control w-75" id="exampleInputPassword1" placeholder="Confirm Password" required />
                    </div>
                    <p className='text-danger'>{passwordError}</p>
                    <div className="form-check">
                        <input onClick={() => setAgree(!agree)} type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className={agree ? 'text-white' : 'text-danger'} for="exampleCheck1">Terms and Conditions</label>
                    </div>
                    <p>{errorElement}</p>
                    <button disabled={!agree} type="submit" className="form-btn">REGISTER</button>
                    <p className='pt-2 text-white'>Already have an account? <Link to='/login' className='register-btn'>Login</Link></p>
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

export default Register;