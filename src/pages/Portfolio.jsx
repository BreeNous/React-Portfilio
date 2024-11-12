import React, { useState } from 'react';

function Portfolio() {

    const [activeEnvelope, setActiveEnvelope] = useState(null);
    const [animationCompleted, setAnimationCompleted] = useState(false);
    const [isClosing, setIsClosing] = useState(false); // New state to track closing animation
    const [positionSet, setPositionSet] = useState(false); // Track if position has been set
    const [isBlurred, setIsBlurred] = useState(false);
    const [reFocus, setReFocus] = useState(false);

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
        setTimeout(() => {
            setIsBlurred(true); 
        }, 350); 

        // Listen for when the opening animation ends
        card.addEventListener('animationend', () => {
            setAnimationCompleted(true); // Animation has completed
        }, { once: true }); // The listener will run once and then be removed
    };

    const handleCloseClick = (event) => {
        event.stopPropagation(); // Prevent event from bubbling up to the envelope click
    
        setIsClosing(true);
        setIsBlurred(false)
        setReFocus(true)

        const card = event.currentTarget.closest('.inner-card'); // Get the parent inner-card
    
        // Add closing class
        card.classList.add('closing');
    
        // Listen for when the closing animation ends
        card.addEventListener('animationend', () => {
            setActiveEnvelope(null); // Reset the active envelope
            setAnimationCompleted(false); // Reset animation state
            setIsClosing(false); // Reset closing state
            setReFocus(false)
            card.classList.remove('closing'); // Clean up the class after animation ends
            setPositionSet(false); // Reset position state for future clicks
        }, { once: true }); // Listener will be removed after the closing animation ends
    };

    return (

        // FULL PORTFOLIO PAGE
        <div className="flex h-full w-full">

            {/* LEFT SIDE */}
            <div className="flex flex-col h-full w-1/2 items-center justify-evenly">

                {/* ENVELOPE AT TOP OF LEFT COLOUMN */}
                <div className={`h-56 w-96 envelope ${activeEnvelope === 0 ? 'active' : ''} ${activeEnvelope !== null && activeEnvelope !== 0 ? 'hover-disabled lower-z' : ''} shadow-md shadow-stone-500 relative `} onClick={(e) => handleEnvelopeClick(0, e)}>

                    {/* BACK OF ENVELOPE */}
                    <div className="relative z-10 bg-[#5a7728] w-full h-full items-end shadow-inner"></div>

                    {/* FRONT OF ENVELOPE */}
                    <div className='z-30 absolute w-full h-full bottom-0'>
                        <div className="absolute z-10 bottom-0 bg-green-texture w-full h-48"></div>
                        <div className="absolute left-0 bottom-0 bg-green-texture w-10 h-56 rounded-tr-2xl"></div>
                        <div className="absolute right-0 bottom-0 bg-green-texture w-10 h-56 rounded-tl-2xl"></div>
                    </div>

                    {/* INNER CARD ENVELOP BOUNDARY */}
                    <div className='w-full h-full bottom-4 absolute flex justify-center'>

                        {/* INNER CARD */}
                        <div className= {`inner-card h-56 w-[21rem] bg-white-texture rounded drop-shadow-md z-20 fixed overflow-scroll ${activeEnvelope === 0 && isClosing ? 'closing' : ''}`}>
                            
                            
                                {/* CONDITIONAL BACK BUTTON */}
                                {activeEnvelope === 0 && animationCompleted && !isClosing && (
                                    <button
                                        onClick={handleCloseClick}
                                        className="back sticky top-[9px] left-[20.5px] z-20 bg-brown-texture w-auto h-auto rounded-sm shadow-md flex justify-center items-center pt-[2px] px-[4px] special-elite-regular text-[7.5px]">
                                        Back
                                    </button>
                                )}
                           
                            {/* LAYOUT CONTAINER */}
                            <div className='absolute top-[30px] flex px-[10px] pb-[15px] justify-evenly z-10 w-full'>

                                {/* LEFT COLOUMN */}
                                <div className='flex flex-col justify-between'>
                                    
                                    {/* PROJECT DESCRIPTION AND TITLE */}
                                    <p className='bg-white w-[9rem] h-auto text-[6.5px] p-[10px]'>
                                        <span className='text-[12px]'>Vibrawood Guitairs</span>
                                        <br/><br/>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia esse tenetur beatae aliquid,
                                        obcaecati commodi facilis fuga in dolorum laborum cumque, ut provident, possimus dignissimos
                                        molestias sed. Natus, itaque corporis? 
                                        <br/> <br/>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatibus vitae quasi
                                        dolores totam molestiae obcaecati sint! Harum, ad. Expedita in deleniti quae provident,
                                        odio ad perspiciatis tempora officia! Distinctio!
                                    </p>

                                    {/* PHOTO PLACEHOLDER */}
                                    <div className=' bg-white w-[9rem] h-[6rem] mt-[10px]'></div>

                                </div>

                                {/* RIGHT COLOUMN */}
                                <div className='flex flex-col justify-between'>

                                    {/* PHOTO PLACEHOLDERS */}
                                    <div className=' bg-white w-[9rem] h-[6rem]'></div>
                                    <div className=' bg-white w-[9rem] h-[6rem]'></div>
                                    <div className=' bg-white w-[9rem] h-[6rem]'></div>

                                </div>

                            </div>

                        </div>
                    </div>
                   
                    {/* PROJECT NAME TAG */}
                    <div>
                        <div className='rounded-2xl special-elite-regular shadow-sm shadow-stone-600 absolute flex flex-col top-[4.5rem] left-[3.5rem] z-30 bg-brown-texture h-[7rem] w-[17rem] justify-center items-center'>
                            <p className='text-2xl'>Vibrawood Gutairs</p>
                            <hr className='border-black border-1 w-[14.5rem]'/>
                            <p className='text-md pt-[.5rem]'>commercial website</p>
                        </div>
                    </div>

                    {/* TAPE */}
                    <img src='./assets/small-tape.png' className='absolute z-30 top-20 left-[-4.5rem] w-36 rotate-[-87deg] customShadow'></img>
                    <img src='./assets/small-tape.png' className='absolute z-30 top-24 right-[-4.8rem] w-36 rotate-[-265deg] customShadow'></img>
                    
                </div>

                {/* ENVELOPE AT BOTTOM OF LEFT COLOUMN */}
                <div className={`h-56 w-96 envelope ${activeEnvelope === 1 ? 'active' : ''} ${activeEnvelope !== null && activeEnvelope !== 1 ? 'hover-disabled lower-z' : ''} shadow-md shadow-stone-500 relative`} onClick={(e) => handleEnvelopeClick(1, e)}>
                    
                    {/* BACK OF ENVELOPE */}
                    <div className="relative z-10 bg-[#5a7728] w-full h-full items-end shadow-inner"></div>

                    {/* FRONT OF ENVELOPE */}
                    <div className="z-30 absolute w-full h-full bottom-0">
                        <div className="absolute z-10 bottom-0 bg-green-texture w-full h-48"></div>
                        <div className="absolute left-0 bottom-0 bg-green-texture w-10 h-56 rounded-tr-2xl"></div>
                        <div className="absolute right-0 bottom-0 bg-green-texture w-10 h-56 rounded-tl-2xl"></div>
                    </div>

                    {/* INNER CARD ENVELOPE BOUNDARY */}
                    <div className="w-full h-full bottom-4 absolute flex justify-center">
                        <div className={`inner-card h-56 w-[21rem] bg-white-texture rounded drop-shadow-md z-20 fixed overflow-scroll ${activeEnvelope === 1 && isClosing ? 'closing' : ''}`}>
                            
                            {/* CONDITIONAL BACK BUTTON */}
                            {activeEnvelope === 1 && animationCompleted && !isClosing && (
                                <button onClick={handleCloseClick} className="back sticky top-[9px] left-[20.5px] z-20 bg-brown-texture w-auto h-auto rounded-sm shadow-md flex justify-center items-center pt-[2px] px-[4px] special-elite-regular text-[7.5px]">
                                    Back
                                </button>
                            )}

                            {/* LAYOUT CONTAINER */}
                            <div className="absolute top-[30px] flex px-[10px] pb-[15px] justify-evenly z-10 w-full">

                                {/* LEFT COLOUMN */}
                                <div className="flex flex-col justify-between">

                                    {/* PROJECT DESCRIPTION AND TITLE */}
                                    <p className="bg-white w-[9rem] h-auto text-[6.5px] p-[10px]">
                                        <span className="text-[12px]">Weather Dashboard</span>
                                        <br /><br />
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia esse tenetur beatae aliquid,
                                        obcaecati commodi facilis fuga in dolorum laborum cumque, ut provident, possimus dignissimos
                                        molestias sed. Natus, itaque corporis?
                                        <br /> <br />
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatibus vitae quasi
                                        dolores totam molestiae obcaecati sint! Harum, ad. Expedita in deleniti quae provident,
                                        odio ad perspiciatis tempora officia! Distinctio!
                                    </p>

                                    {/* PHOTO PLACEHOLDER */}
                                    <div className="bg-white w-[9rem] h-[6rem] mt-[10px]"></div>

                                </div>

                                {/* RIGHT COLOUMN */}
                                <div className="flex flex-col justify-between">

                                    {/* PHOTO PLACEHOLDERS */}
                                    <div className="bg-white w-[9rem] h-[6rem]"></div>
                                    <div className="bg-white w-[9rem] h-[6rem]"></div>
                                    <div className="bg-white w-[9rem] h-[6rem]"></div>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* PROJECT NAME TAG */}
                    <div className="rounded-2xl special-elite-regular shadow-sm shadow-stone-600 absolute flex flex-col top-[4.5rem] left-[3.5rem] z-30 bg-brown-texture h-[7rem] w-[17rem] justify-center items-center">
                        <p className="text-2xl">Weather Dashboard</p>
                        <hr className="border-black border-1 w-[14.5rem]" />
                        <p className="text-md pt-[.5rem]">personal website</p>
                    </div>

                    {/* TAPE */}
                    <img src="./assets/small-tape.png" className="absolute z-30 top-[12rem] left-[-3rem] w-36 rotate-[-160deg] customShadow" alt="Tape"/>
                    <img src="./assets/small-tape.png" className="absolute z-30 top-20 right-[-5rem] w-36 rotate-[-275deg] customShadow" alt="Tape"/>

                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col h-full w-1/2 items-center justify-evenly relative">

                {/* ENVELOPE AT TOP OF RIGHT COLUMN (Social Network) */}
                <div className={`h-56 w-96 envelope ${activeEnvelope === 2 ? 'active' : ''} ${activeEnvelope !== null && activeEnvelope !== 2 ? 'hover-disabled lower-z' : ''} shadow-md shadow-stone-500 relative`} onClick={(e) => handleEnvelopeClick(2, e)}>

                    {/* BACK OF ENVELOPE */}
                    <div className="relative z-10 bg-[#5a7728] w-full h-full items-end shadow-inner"></div>

                    {/* FRONT OF ENVELOPE */}
                    <div className="z-30 absolute w-full h-full bottom-0">
                        <div className="absolute z-10 bottom-0 bg-green-texture w-full h-48"></div>
                        <div className="absolute left-0 bottom-0 bg-green-texture w-10 h-56 rounded-tr-2xl"></div>
                        <div className="absolute right-0 bottom-0 bg-green-texture w-10 h-56 rounded-tl-2xl"></div>
                    </div>

                    {/* INNER CARD ENVELOPE BOUNDARY */}
                    <div className="w-full h-full bottom-4 absolute flex justify-center">
                        <div className={`inner-card h-56 w-[21rem] bg-white-texture rounded drop-shadow-md z-20 fixed overflow-scroll ${activeEnvelope === 2 && isClosing ? 'closing' : ''}`}>
                            
                            {/* CONDITIONAL BACK BUTTON */}
                            {activeEnvelope === 2 && animationCompleted && !isClosing && (
                                <button onClick={handleCloseClick} className="back sticky top-[9px] left-[20.5px] z-20 bg-brown-texture w-auto h-auto rounded-sm shadow-md flex justify-center items-center pt-[2px] px-[4px] special-elite-regular text-[7.5px]">
                                    Back
                                </button>
                            )}

                            {/* LAYOUT CONTAINER */}
                            <div className="absolute top-[30px] flex px-[10px] pb-[15px] justify-evenly z-10 w-full">
                                
                                {/* LEFT COLUMN */}
                                <div className="flex flex-col justify-between">
                                    
                                    {/* PROJECT DESCRIPTION AND TITLE */}
                                    <p className="bg-white w-[9rem] h-auto text-[6.5px] p-[10px]">
                                        <span className="text-[12px]">Social Network</span>
                                        <br /><br />
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia esse tenetur beatae aliquid,
                                        obcaecati commodi facilis fuga in dolorum laborum cumque, ut provident, possimus dignissimos
                                        molestias sed. Natus, itaque corporis?
                                        <br /> <br />
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatibus vitae quasi
                                        dolores totam molestiae obcaecati sint! Harum, ad. Expedita in deleniti quae provident,
                                        odio ad perspiciatis tempora officia! Distinctio!
                                    </p>

                                    {/* PHOTO PLACEHOLDER */}
                                    <div className="bg-white w-[9rem] h-[6rem] mt-[10px]"></div>

                                </div>

                                {/* RIGHT COLUMN */}
                                <div className="flex flex-col justify-between">

                                    {/* PHOTO PLACEHOLDERS */}
                                    <div className="bg-white w-[9rem] h-[6rem]"></div>
                                    <div className="bg-white w-[9rem] h-[6rem]"></div>
                                    <div className="bg-white w-[9rem] h-[6rem]"></div>

                                </div>

                            </div>
                        </div>
                    </div>

                    {/* PROJECT NAME TAG */}
                    <div className="rounded-2xl special-elite-regular shadow-sm shadow-stone-600 absolute flex flex-col top-[4.5rem] left-[3.5rem] z-30 bg-brown-texture h-[7rem] w-[17rem] justify-center items-center">
                        <p className="text-2xl">Social Network</p>
                        <hr className="border-black border-1 w-[14.5rem]" />
                        <p className="text-md pt-[.5rem]">social application</p>
                    </div>

                    {/* TAPE */}
                    <img src="./assets/small-tape.png" className="absolute z-30 top-[1rem] left-[-4.5rem] w-36 rotate-[-90deg] customShadow" alt="Tape" />
                    <img src="./assets/small-tape.png" className="absolute z-30 top-[10rem] right-[-4rem] w-36 rotate-[-60deg] customShadow" alt="Tape" />

                </div>

                {/* ENVELOPE AT BOTTOM OF RIGHT COLUMN (Employee Tracker) */}
                <div className={`h-56 w-96 envelope ${activeEnvelope === 3 ? 'active' : ''} ${activeEnvelope !== null && activeEnvelope !== 3 ? 'hover-disabled lower-z' : ''} shadow-md shadow-stone-500 relative`} onClick={(e) => handleEnvelopeClick(3, e)}>

                    {/* BACK OF ENVELOPE */}
                    <div className="relative z-10 bg-[#5a7728] w-full h-full items-end shadow-inner"></div>

                    {/* FRONT OF ENVELOPE */}
                    <div className="z-30 absolute w-full h-full bottom-0">
                        <div className="absolute z-10 bottom-0 bg-green-texture w-full h-48"></div>
                        <div className="absolute left-0 bottom-0 bg-green-texture w-10 h-56 rounded-tr-2xl"></div>
                        <div className="absolute right-0 bottom-0 bg-green-texture w-10 h-56 rounded-tl-2xl"></div>
                    </div>

                    {/* INNER CARD ENVELOPE BOUNDARY */}
                    <div className="w-full h-full bottom-4 absolute flex justify-center">
                        <div className={`inner-card h-56 w-[21rem] bg-white-texture rounded drop-shadow-md z-20 fixed overflow-scroll ${activeEnvelope === 3 && isClosing ? 'closing' : ''}`}>
                            
                            {/* CONDITIONAL BACK BUTTON */}
                            {activeEnvelope === 3 && animationCompleted && !isClosing && (
                                <button onClick={handleCloseClick} className="back sticky top-[9px] left-[20.5px] z-20 bg-brown-texture w-auto h-auto rounded-sm shadow-md flex justify-center items-center pt-[2px] px-[4px] special-elite-regular text-[7.5px]">
                                    Back
                                </button>
                            )}

                            {/* LAYOUT CONTAINER */}
                            <div className="absolute top-[30px] flex px-[10px] pb-[15px] justify-evenly z-10 w-full">
                                
                                {/* LEFT COLUMN */}
                                <div className="flex flex-col justify-between">
                                    
                                    {/* PROJECT DESCRIPTION AND TITLE */}
                                    <p className="bg-white w-[9rem] h-auto text-[6.5px] p-[10px]">
                                        <span className="text-[12px]">Employee Tracker</span>
                                        <br /><br />
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia esse tenetur beatae aliquid,
                                        obcaecati commodi facilis fuga in dolorum laborum cumque, ut provident, possimus dignissimos
                                        molestias sed. Natus, itaque corporis?
                                        <br /> <br />
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatibus vitae quasi
                                        dolores totam molestiae obcaecati sint! Harum, ad. Expedita in deleniti quae provident,
                                        odio ad perspiciatis tempora officia! Distinctio!
                                    </p>

                                    {/* PHOTO PLACEHOLDER */}
                                    <div className="bg-white w-[9rem] h-[6rem] mt-[10px]"></div>

                                </div>

                                {/* RIGHT COLUMN */}
                                <div className="flex flex-col justify-between">

                                    {/* PHOTO PLACEHOLDERS */}
                                    <div className="bg-white w-[9rem] h-[6rem]"></div>
                                    <div className="bg-white w-[9rem] h-[6rem]"></div>
                                    <div className="bg-white w-[9rem] h-[6rem]"></div>

                                </div>

                            </div>
                        </div>
                    </div>

                    {/* PROJECT NAME TAG */}
                    <div className="rounded-2xl special-elite-regular shadow-sm shadow-stone-600 absolute flex flex-col top-[4.5rem] left-[3.5rem] z-30 bg-brown-texture h-[7rem] w-[17rem] justify-center items-center">
                        <p className="text-2xl">Employee Tracker</p>
                        <hr className="border-black border-1 w-[14.5rem]" />
                        <p className="text-md pt-[.5rem]">management application</p>
                    </div>

                    {/* TAPE */}
                    <img src="./assets/small-tape.png" className="absolute z-30 top-20 left-[-4.5rem] w-36 rotate-[-87deg] customShadow" alt="Tape" />
                    <img src="./assets/small-tape.png" className="absolute z-30 top-24 right-[-4.8rem] w-36 rotate-[-265deg] customShadow" alt="Tape" />
                    
                </div>
            </div>

            {/* SCREEN BLUR OVERLAY */}
            <div className={`w-screen h-screen fixed top-0 left-0 ${isBlurred ? 'blur-active' : ''} ${reFocus ? 'reFocus-active' : ''}`}></div>
            
        </div>
    );
}

export default Portfolio;