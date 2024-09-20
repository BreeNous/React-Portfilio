import React, { useState } from 'react';

function Portfolio() {
    // State to track which envelope is clicked
    const [activeEnvelope, setActiveEnvelope] = useState(null);

    const handleEnvelopeClick = (index) => {
        setActiveEnvelope(index); // Set the active envelope index
    };

    const handleCloseClick = () => {
        setActiveEnvelope(null); // Reset the active envelope when closing
    };

    return (
        <div className="flex h-full w-full relative">
            {/* LEFT SIDE */}
            <div className="flex flex-col h-full w-1/2 items-center justify-evenly relative">
                {/* whole envelope unit top position of left column */}
                <div
                    className={`envelope ${activeEnvelope === 0 ? 'active' : ''} `}
                    onClick={() => handleEnvelopeClick(0)}
                >
                    {/* inside / back of envelope */}
                    <div className="relative z-10 bg-stone-200 w-96 h-56 items-end shadow-inner">
                        <div className="absolute z-30 left-0 bg-white-texture w-10 h-56 rounded-tr-2xl"></div>
                        <div className="absolute z-30 bottom-0 bg-white-texture w-full h-48 front"></div>
                        <div className="absolute z-30 right-0 bg-white-texture w-10 h-56 rounded-tl-2xl"></div>
                        {/* inner card */}
                        <div className="flex justify-center">
                            <div className="inner-card absolute z-20 bottom-4 h-full w-72 bg-green-texture rounded drop-shadow-md">
                                {/* Close Button */}
                                {activeEnvelope !== null && (
                                    <button onClick={handleCloseClick} className="close-button relative scale-50 bg-brown-texture w-[4rem] h-[1.6rem] rounded-sm shadow-md">
                                        Back
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* whole envelope unit bottom position of left column */}
                <div
                    className={`envelope ${activeEnvelope === 1 ? 'active' : ''} `}
                    onClick={() => handleEnvelopeClick(1)}
                >
                    <div className="relative z-10 bg-stone-200 w-96 h-56 items-end shadow-inner">
                        <div className="absolute z-30 left-0 bg-white-texture w-10 h-56 rounded-tr-2xl"></div>
                        <div className="absolute z-30 bottom-0 bg-white-texture w-full h-48"></div>
                        <div className="absolute z-30 right-0 bg-white-texture w-10 h-56 rounded-tl-2xl"></div>
                        <div className="flex justify-center">
                            <div className="inner-card absolute z-20 bottom-4 h-full w-72 bg-green-texture rounded drop-shadow-md"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col h-full w-1/2 items-center justify-evenly relative">
                {/* whole envelope unit top position of right column */}
                <div
                    className={`envelope ${activeEnvelope === 2 ? 'active' : ''} `}
                    onClick={() => handleEnvelopeClick(2)}
                >
                    <div className="relative z-10 bg-stone-200 w-96 h-56 items-end shadow-inner">
                        <div className="absolute z-30 left-0 bg-white-texture w-10 h-56 rounded-tr-2xl"></div>
                        <div className="absolute z-30 bottom-0 bg-white-texture w-full h-48"></div>
                        <div className="absolute z-30 right-0 bg-white-texture w-10 h-56 rounded-tl-2xl"></div>
                        <div className="flex justify-center">
                            <div className="inner-card absolute z-20 bottom-4 h-full w-72 bg-green-texture rounded drop-shadow-md"></div>
                        </div>
                    </div>
                </div>

                {/* whole envelope unit bottom position of right column */}
                <div
                    className={`envelope ${activeEnvelope === 3 ? 'active' : ''} `}
                    onClick={() => handleEnvelopeClick(3)}
                >
                    <div className="relative z-10 bg-stone-200 w-96 h-56 items-end shadow-inner">
                        <div className="absolute z-30 left-0 bg-white-texture w-10 h-56 rounded-tr-2xl"></div>
                        <div className="absolute z-30 bottom-0 bg-white-texture w-full h-48"></div>
                        <div className="absolute z-30 right-0 bg-white-texture w-10 h-56 rounded-tl-2xl"></div>
                        <div className="flex justify-center">
                            <div className="inner-card absolute z-20 bottom-4 h-full w-72 bg-green-texture rounded drop-shadow-md"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Portfolio;
