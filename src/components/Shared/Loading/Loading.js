import React from 'react';
import { SpinnerInfinity } from 'spinners-react';
import './Loading.css'

const Loading = () => {
    return (
        <div  className='loading mx-auto'>
            <SpinnerInfinity size={80} thickness={100} speed={100} color="#0bd1ff" secondaryColor="rgba(0, 0, 0, 0.44)" />
        </div>
    );
};

export default Loading;