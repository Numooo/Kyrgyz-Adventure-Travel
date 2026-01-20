import React from 'react';

const Rotate = ({children}) => {
    return (
        <p className="bg-[#f15d34] text-white text-xs px-10 py-3 uppercase font-semibold rounded-full -rotate-4 w-fit">
            {children}
        </p>
    );
};

export default Rotate;