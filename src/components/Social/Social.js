import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase_init';
import Loading from '../Shared/Loading/Loading';
import './Social.css'

const Social = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const navigate = useNavigate()

    if(user){
        navigate('/home')
    }

    const handleSignInWithGoogle = ()=>{
        signInWithGoogle()
    }
    return (
        <div>
            <button onClick={handleSignInWithGoogle} className='google-btn'>LOGIN WITH GOOGLE</button>
        </div>
    );
};

export default Social;