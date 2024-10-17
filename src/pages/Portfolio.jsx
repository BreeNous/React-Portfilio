import React, { useState } from 'react';

function Portfolio() {

    const [activeEnvelope, setActiveEnvelope] = useState(null);
    const [animationCompleted, setAnimationCompleted] = useState(false);
    const [isClosing, setIsClosing] = useState(false); // New state to track closing animation
    const [positionSet, setPositionSet] = useState(false); // Track if position has been set

    const handleEnvelopeClick = (index, event) => {
        if (activeEnvelope !== null && activeEnvelope !== index) {
            return; // Ignore clicks on other envelopes if one is active
        }
        
        const card = event.currentTarget.querySelector('.inner-card');

        if (!positionSet) {
            // Set position variables only if they haven't been set yet
            const rect = card.getBoundingClientRect();
            const startTop = `${rect.top}px`;
            const startRight = `${window.innerWidth - rect.right}px`;

            // Apply the positions as CSS variables
            card.style.setProperty('--start-top', startTop);
            card.style.setProperty('--start-right', startRight);

            setPositionSet(true); // Mark position as set
        }

        setActiveEnvelope(index); // Set the active envelope index

        // Listen for when the opening animation ends
        card.addEventListener('animationend', () => {
            setAnimationCompleted(true); // Animation has completed
        }, { once: true }); // The listener will run once and then be removed
    };

    const handleCloseClick = (event) => {
        event.stopPropagation(); // Prevent event from bubbling up to the envelope click
    
        setIsClosing(true); // Start closing animation
        console.log('Back button clicked, starting close animation');
    
        const card = event.currentTarget.closest('.inner-card'); // Get the parent inner-card
    
        if (!card) {
            console.log('Inner card not found');
            return;
        }
    
        // Add closing class
        card.classList.add('closing');
    
        // Listen for when the closing animation ends
        card.addEventListener('animationend', () => {
            console.log('Closing animation completed, resetting state');
            setActiveEnvelope(null); // Reset the active envelope
            setAnimationCompleted(false); // Reset animation state
            setIsClosing(false); // Reset closing state
            card.classList.remove('closing'); // Clean up the class after animation ends
            setPositionSet(false); // Reset position state for future clicks
        }, { once: true }); // Listener will be removed after the closing animation ends
    };

    return (
        <div className="flex h-full w-full relative">
            {/* LEFT SIDE */}
            <div className="flex flex-col h-full w-1/2 items-center justify-evenly relative">
                {/* whole envelope unit top position of left column */}
                <div
                    className={`envelope ${activeEnvelope === 0 ? 'active' : ''} ${activeEnvelope !== null && activeEnvelope !== 0 ? 'hover-disabled' : ''} `}
                    onClick={(e) => handleEnvelopeClick(0, e)}>

                    {/* inside / back of envelope */}
                    <div className="relative z-10 bg-stone-200 w-96 h-56 items-end shadow-inner">
                        <div className="absolute z-30 left-0 bg-white-texture w-10 h-56 rounded-tr-2xl"></div>
                        <div className="absolute z-30 bottom-0 bg-white-texture w-full h-48 front"></div>
                        <div className="absolute z-30 right-0 bg-white-texture w-10 h-56 rounded-tl-2xl"></div>
                        {/* inner card */}
                        <div className="flex justify-center relative bottom-4 h-full w-full">
                            <div className= {`inner-card fixed z-20 h-56 w-72 bg-green-texture rounded drop-shadow-md ${activeEnvelope === 0 && isClosing ? 'closing' : ''}`}>
                            {activeEnvelope === 0 && animationCompleted && !isClosing && (
                                    <button
                                        onClick={handleCloseClick}
                                        className="back absolute top-2 left-2 bg-brown-texture w-8 h-3.5 rounded-sm shadow-md flex justify-center items-center pt-[2px] special-elite-regular text-[9px]">
                                        Back
                                    </button>
                                )}
                            </div>
                        </div>
                        {/* NAME TAG AND TAPE */}
                        <div>
                            <div className='shadow-md absolute flex top-[5.5rem] left-[3.5rem] z-40 text-3xl bg-brown-texture h-[5rem] w-[17rem] text-center justify-center items-center'>Name Tag</div>
                            <img src='./assets/small-tape.png' className='absolute z-50 top-20 left-[-4.5rem] w-36 rotate-[-87deg] drop-shadow-sm'></img>
                            <img src='./assets/small-tape.png' className='absolute z-50 top-24 right-[-4.8rem] w-36 rotate-[-265deg] drop-shadow-sm'></img>
                        </div>
                    </div>
                </div>

                {/* whole envelope unit bottom position of left column */}
                <div
                    className={`envelope ${activeEnvelope === 1 ? 'active' : ''} ${activeEnvelope !== null && activeEnvelope !== 1 ? 'hover-disabled' : ''} `}
                    onClick={(e) => handleEnvelopeClick(1, e)}
                >
                    <div className="relative z-10 bg-stone-200 w-96 h-56 items-end shadow-inner">
                        <div className="absolute z-30 left-0 bg-green-texture w-10 h-56 rounded-tr-2xl"></div>
                        <div className="absolute z-30 bottom-0 bg-green-texture w-full h-48"></div>
                        <div className="absolute z-30 right-0 bg-green-texture w-10 h-56 rounded-tl-2xl"></div>
                        {/* inner card */}
                        <div className="flex justify-center relative bottom-4 h-full w-full">
                            <div className={`inner-card fixed z-20 h-56 w-72 bg-white-texture rounded drop-shadow-md ${activeEnvelope === 1 && isClosing ? 'closing' : ''}`}>
                            {activeEnvelope === 1 && animationCompleted && !isClosing && (
                                    <button
                                        onClick={handleCloseClick}
                                        className="back absolute top-2 left-2 bg-brown-texture w-8 h-3.5 rounded-sm shadow-md flex justify-center items-center pt-[2px] special-elite-regular text-[9px]">
                                        Back
                                    </button>
                                )}
                            </div>
                        </div>
                        <div className='absolute shadow-md flex top-[5.5rem] left-[3.5rem] z-40 text-3xl bg-brown-texture h-[5rem] w-[17rem] text-center justify-center items-center'>Name Tag</div>
                        <img src='./assets/small-tape.png' className='absolute z-50 top-[12rem] left-[-3rem] w-36 rotate-[-160deg] drop-shadow-sm'></img>
                        <img src='./assets/small-tape.png' className='absolute z-50 top-20 right-[-5rem] w-36 rotate-[-275deg] drop-shadow-sm'></img>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col h-full w-1/2 items-center justify-evenly relative">
                {/* whole envelope unit top position of right column */}
                <div
                    className={`envelope ${activeEnvelope === 2 ? 'active' : ''} ${activeEnvelope !== null && activeEnvelope !== 2 ? 'hover-disabled' : ''} `}
                    onClick={(e) => handleEnvelopeClick(2, e)}
                >
                    <div className="relative z-10 bg-stone-200 w-96 h-56 items-end shadow-inner">
                        <div className="absolute z-30 left-0 bg-white-texture w-10 h-56 rounded-tr-2xl"></div>
                        <div className="absolute z-30 bottom-0 bg-white-texture w-full h-48"></div>
                        <div className="absolute z-30 right-0 bg-white-texture w-10 h-56 rounded-tl-2xl"></div>
                        {/* inner card */}
                        <div className="flex justify-center relative bottom-4 h-full w-full">
                            <div className={`inner-card fixed z-20 h-56 w-72 bg-green-texture rounded drop-shadow-md ${activeEnvelope === 2 && isClosing ? 'closing' : ''}`}>
                            {activeEnvelope === 2 && animationCompleted && !isClosing && (
                                    <button
                                        onClick={handleCloseClick}
                                        className="back absolute top-2 left-2 bg-brown-texture w-8 h-3.5 rounded-sm shadow-md flex justify-center items-center pt-[2px] special-elite-regular text-[9px]">
                                        Back
                                    </button>
                                )}
                            </div>
                        </div>
                        <div className='absolute flex top-[5.5rem] left-[3.5rem] z-40 text-3xl bg-brown-texture h-[5rem] w-[17rem] text-center justify-center items-center'>Name Tag</div>
                    </div>
                </div>

                {/* whole envelope unit bottom position of right column */}
                <div
                    className={`envelope ${activeEnvelope === 3 ? 'active' : ''} ${activeEnvelope !== null && activeEnvelope !== 3 ? 'hover-disabled' : ''} `}
                    onClick={(e) => handleEnvelopeClick(3, e)}
                >
                    <div className="relative z-10 bg-stone-200 w-96 h-56 items-end shadow-inner">
                        <div className="absolute z-30 left-0 bg-white-texture w-10 h-56 rounded-tr-2xl"></div>
                        <div className="absolute z-30 bottom-0 bg-white-texture w-full h-48"></div>
                        <div className="absolute z-30 right-0 bg-white-texture w-10 h-56 rounded-tl-2xl"></div>
                        {/* inner card */}
                        <div className="flex justify-center relative bottom-4 h-full w-full">
                            <div className={`inner-card fixed z-20 h-56 w-72 bg-green-texture rounded drop-shadow-md ${activeEnvelope === 3 && isClosing ? 'closing' : ''}`}>
                            {activeEnvelope === 3 && animationCompleted && !isClosing && (
                                    <button
                                        onClick={handleCloseClick}
                                        className="back absolute top-2 left-2 bg-brown-texture w-8 h-3.5 rounded-sm shadow-md flex justify-center items-center pt-[2px] special-elite-regular text-[9px]">
                                        Back
                                    </button>
                                )}
                            </div>
                        </div>
                        <div className='absolute flex top-[5.5rem] left-[3.5rem] z-40 text-3xl bg-brown-texture h-[5rem] w-[17rem] text-center justify-center items-center'>Name Tag</div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Portfolio;