import React from 'react';

const Line = () => {
    return (
        <div data-aos="fade-right" className="relative w-full h-[15px]">
            <svg
                viewBox="0 0 540 15"
                className="absolute inset-0 w-full h-full"
                fill="none"
                preserveAspectRatio="none"
            >
                <path
                    d="M2 2C135.382 2 329.654 2 463.037 2C485.654 2 508.272 2 530.889 2C533.211 2 527.175 3.63046 526.534 3.85598C514 6 511 6.5 494.5 8C487 9.5 489.182 13 507 13"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                />
            </svg>
        </div>

    );
};

export default Line;