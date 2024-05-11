import React from 'react';

const Heading = ({heading,subHeading}) => {
    return (
        <div className='py-10'>
            <h2 className='text-center lg:text-5xl font-Poppins font-semibold tracking-tight'>{heading}</h2>
            <h4 className='text-center lg:text-xl font-Poppins font-medium py-2 capitalize tracking-tight'>{subHeading}</h4>
        </div>
    );
};

export default Heading;