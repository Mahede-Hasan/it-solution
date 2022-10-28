import React from 'react';
import { SpinnerInfinity } from 'spinners-react';
import './Loading.css'

const Loading = () => {
    return (
        <div>
            <SpinnerInfinity className='loading' size={50} thickness={100} speed={100} color="#7DE5ED" secondaryColor="rgba(0, 0, 0, 0.44)" />
        </div>
    );
};

export default Loading;