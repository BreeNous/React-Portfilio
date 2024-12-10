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

                {/* ENVELOPE AT TOP OF LEFT COLOUMN (VIBRAWOOD GUITARS)*/}
                <div className={`h-56 w-96 envelope relative ${activeEnvelope === 0 ? 'active' : ''} 
                ${activeEnvelope !== null && activeEnvelope !== 0 ? 'hover-disabled lower-z' : ''}`} onClick={(e) => handleEnvelopeClick(0, e)}>

                    {/* BACK OF ENVELOPE */}
                    <div className="relative z-10 bg-[#5a7728] w-full h-full items-end shadow-inner"></div>

                    {/* FRONT OF ENVELOPE */}
                    <div className='z-30 absolute w-full h-full bottom-0 shadow-md'>
                        <div className="absolute z-10 bottom-0 bg-green-texture w-full h-48"></div>
                        <div className="absolute left-0 bottom-0 bg-green-texture w-10 h-56 rounded-tr-2xl"></div>
                        <div className="absolute right-0 bottom-0 bg-green-texture w-10 h-56 rounded-tl-2xl"></div>
                    </div>

                    {/* INNER CARD ENVELOP BOUNDARY */}
                    <div className='w-full h-full bottom-4 absolute flex justify-center'>

                        {/* INNER CARD */}
                        <div className= {`inner-card h-56 w-[21rem] bg-white-texture rounded drop-shadow-md z-20 fixed overflow-scroll 
                        ${activeEnvelope === 0 && isClosing ? 'closing' : ''}`}>
                            
                            
                                {/* CONDITIONAL BACK BUTTON */}
                                {activeEnvelope === 0 && animationCompleted && !isClosing && (
                                    <button
                                        onClick={handleCloseClick}
                                        className="back sticky top-[9px] left-[20.5px] z-20 bg-green-texture w-auto h-auto rounded-sm shadow-md flex 
                                        justify-center items-center pt-[2px] px-[4px] gaegu-regular text-[7.5px]">
                                        Back
                                    </button>
                                )}
                           
                            {/* LAYOUT CONTAINER */}
                            <div className='absolute top-[30px] flex px-[10px] pb-[15px] justify-evenly z-10 w-full'>

                                {/* LEFT COLOUMN */}
                                    
                                {/* PROJECT DESCRIPTION AND TITLE */}
                                <p className='bg-brown-texture w-[9rem] h-[22rem] text-[6.5px] p-[10px] gaegu-regular rounded-md shadow-sm shadow-[rgba(0,0,0,0.35)]'>
                                    <span className='text-[12px] font-black'>Vibrawood Guitairs</span>
                                    <br/>
                                    Visit the <a href='https://github.com/Wartech93/Vibrawood_Guitars'><span className='underline hover:text-white'>repository</span>
                                    </a> for more!
                                    <br/><br/>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia esse tenetur beatae aliquid,
                                    obcaecati commodi facilis fuga in dolorum laborum cumque, ut provident, possimus dignissimos
                                    molestias sed. Natus, itaque corporis? 
                                    <br/> <br/>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatibus vitae quasi
                                    dolores totam molestiae obcaecati sint! Harum, ad. Expedita in deleniti quae provident,
                                    odio ad perspiciatis tempora officia! Distinctio!
                                </p>
                                

                                {/* RIGHT COLOUMN */}
                                <div className='flex flex-col justify-between'>

                                    {/* PHOTO PLACEHOLDERS */}
                                    <div className='w-[9rem] h-[5rem] rounded-sm flex justify-center items-center overflow-hidden drop-shadow-sm'>
                                        <img src='./assets/vwg01.png' className='object-cover h-full w-full'></img>
                                    </div>

                                    <div className='w-[9rem] h-[5rem] rounded-sm flex justify-center items-center overflow-hidden drop-shadow-sm'>
                                        <img src='./assets/vwg02.png' className='object-cover h-full w-full'></img>
                                    </div>

                                    <div className='w-[9rem] h-[5rem] rounded-sm flex justify-center items-center overflow-hidden drop-shadow-sm'>
                                        <img src='./assets/vwg03.png' className='object-cover h-full w-full'></img>
                                    </div>

                                    <div className='w-[9rem] h-[5rem] rounded-sm flex justify-center items-center overflow-hidden drop-shadow-sm'>
                                        <img src='./assets/vwg04.png' className='object-cover h-full w-full'></img>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                   
                    {/* PROJECT NAME TAG */}
                    <div>
                        <div className='rounded-2xl gaegu-regular shadow-sm shadow-stone-600 absolute flex flex-col top-[4.5rem] left-[3.5rem] z-30 
                        bg-white-texture h-[7rem] w-[17rem] justify-center items-center'>
                            <p className='text-2xl'>Vibrawood Gutairs</p>
                            <hr className='border-black border-1 w-[14.5rem] my-[.3rem]'/>
                            <p className='text-lg'>commercial website</p>
                        </div>
                    </div>

                    {/* TAPE */}
                    <img src='./assets/small-tape.png' className='absolute z-30 top-24 right-[-4.8rem] w-36 rotate-[-265deg] customShadow'></img>
                    
                    {/* GUITAR STICKER */}
                    <img src='./assets/guitar.png' className='w-[5rem] absolute z-30 top-[2.5rem] left-[-3.5rem] rotate-[-5deg] drop-shadow-md'></img>

                    {/* BROWN ACCENT CARD */}
                    <div className='bg-brown-texture absolute bottom-[-1.7rem] right-[-3rem] w-[24rem] h-[14rem] shadow-md rounded-md'></div>

                </div>

                {/* ENVELOPE AT BOTTOM OF LEFT COLOUMN (WEATHER DASHBOARD) */}
                <div className={`h-56 w-96 envelope relative ${activeEnvelope === 1 ? 'active' : ''} 
                ${activeEnvelope !== null && activeEnvelope !== 1 ? 'hover-disabled lower-z' : ''} `} onClick={(e) => handleEnvelopeClick(1, e)}>
                    
                    {/* BACK OF ENVELOPE */}
                    <div className="relative z-10 bg-[#5a7728] w-full h-full items-end shadow-inner"></div>

                    {/* FRONT OF ENVELOPE */}
                    <div className="z-30 absolute w-full h-full bottom-0 shadow-md">
                        <div className="absolute z-10 bottom-0 bg-green-texture w-full h-48"></div>
                        <div className="absolute left-0 bottom-0 bg-green-texture w-10 h-56 rounded-tr-2xl"></div>
                        <div className="absolute right-0 bottom-0 bg-green-texture w-10 h-56 rounded-tl-2xl"></div>
                    </div>

                    {/* INNER CARD ENVELOPE BOUNDARY */}
                    <div className="w-full h-full bottom-4 absolute flex justify-center">
                        <div className={`inner-card h-56 w-[21rem] bg-white-texture rounded drop-shadow-md z-20 fixed overflow-scroll 
                        ${activeEnvelope === 1 && isClosing ? 'closing' : ''}`}>
                            
                            {/* CONDITIONAL BACK BUTTON */}
                            {activeEnvelope === 1 && animationCompleted && !isClosing && (
                                <button onClick={handleCloseClick} className="back sticky top-[9px] left-[20.5px] z-20 bg-green-texture w-auto h-auto rounded-sm 
                                shadow-md flex justify-center items-center pt-[2px] px-[4px] gaegu-regular text-[7.5px]">
                                    Back
                                </button>
                            )}

                            {/* LAYOUT CONTAINER */}
                            <div className="absolute top-[30px] flex px-[10px] pb-[15px] justify-evenly z-10 w-full">

                                {/* LEFT COLOUMN */}
                                    
                                {/* PROJECT DESCRIPTION AND TITLE */}
                                <p className='bg-brown-texture w-[9rem] h-[22rem] text-[6.5px] p-[10px] gaegu-regular rounded-md'>
                                    <span className='text-[12px] font-black'>Weather Dashboard</span>
                                    <br/>
                                    Visit the <a href='https://github.com/BreeNous/Weather-Dashboard'><span className='underline hover:text-white'>repository</span>
                                    </a> for more!
                                    <br/><br/>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia esse tenetur beatae aliquid,
                                    obcaecati commodi facilis fuga in dolorum laborum cumque, ut provident, possimus dignissimos
                                    molestias sed. Natus, itaque corporis? 
                                    <br/> <br/>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatibus vitae quasi
                                    dolores totam molestiae obcaecati sint! Harum, ad. Expedita in deleniti quae provident,
                                    odio ad perspiciatis tempora officia! Distinctio!
                                </p>
                                

                                {/* RIGHT COLOUMN */}
                                <div className='flex flex-col justify-between'>

                                    {/* PHOTO PLACEHOLDERS */}
                                    <div className='w-[9rem] h-[5rem] rounded-sm flex justify-center items-center overflow-hidden drop-shadow-sm'>
                                        <img src='./assets/vwg01.png' className='object-cover h-full w-full'></img>
                                    </div>

                                    <div className='w-[9rem] h-[5rem] rounded-sm flex justify-center items-center overflow-hidden drop-shadow-sm'>
                                        <img src='./assets/vwg01.png' className='object-cover h-full w-full'></img>
                                    </div>

                                    <div className='w-[9rem] h-[5rem] rounded-sm flex justify-center items-center overflow-hidden drop-shadow-sm'>
                                        <img src='./assets/vwg01.png' className='object-cover h-full w-full'></img>
                                    </div>

                                    <div className='w-[9rem] h-[5rem] rounded-sm flex justify-center items-center overflow-hidden drop-shadow-sm'>
                                        <img src='./assets/vwg01.png' className='object-cover h-full w-full'></img>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* PROJECT NAME TAG */}
                    <div className="rounded-2xl gaegu-regular shadow-sm shadow-stone-600 absolute flex flex-col top-[4.5rem] left-[3.5rem] z-30 bg-white-texture
                    h-[7rem] w-[17rem] justify-center items-center">
                        <p className="text-2xl">Weather Dashboard</p>
                        <hr className="border-black border-1 w-[14.5rem] my-[.3rem]" />
                        <p className="text-lg">personal website</p>
                    </div>

                    {/* TAPE */}
                    <img src="./assets/small-tape.png" className="absolute z-30 top-[7rem] left-[-4.5rem] w-36 rotate-[-90deg] customShadow" alt="Tape"/>
                    
                    {/* WEATHER STICKER */}
                    <img src='./assets/weather.png' className='w-[6.8rem] absolute z-30 top-[4rem] right-[-3.5rem] rotate-[6deg] drop-shadow-md'></img>

                    {/* BROWN ACCENT CARD */}
                    <div className='bg-brown-texture absolute bottom-[-1.7rem] left-[-3rem] w-[24rem] h-[14rem] shadow-md rounded-md'></div>

                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col h-full w-1/2 items-center justify-evenly relative">

                {/* ENVELOPE AT TOP OF RIGHT COLUMN (SOCIAL NETWORK) */}
                <div className={`h-56 w-96 envelope relative ${activeEnvelope === 2 ? 'active' : ''} 
                ${activeEnvelope !== null && activeEnvelope !== 2 ? 'hover-disabled lower-z' : ''} `} onClick={(e) => handleEnvelopeClick(2, e)}>

                    {/* BACK OF ENVELOPE */}
                    <div className="relative z-10 bg-[#5a7728] w-full h-full items-end shadow-inner"></div>

                    {/* FRONT OF ENVELOPE */}
                    <div className="z-30 absolute w-full h-full bottom-0 shadow-md">
                        <div className="absolute z-10 bottom-0 bg-green-texture w-full h-48"></div>
                        <div className="absolute left-0 bottom-0 bg-green-texture w-10 h-56 rounded-tr-2xl"></div>
                        <div className="absolute right-0 bottom-0 bg-green-texture w-10 h-56 rounded-tl-2xl"></div>
                    </div>

                    {/* INNER CARD ENVELOPE BOUNDARY */}
                    <div className="w-full h-full bottom-4 absolute flex justify-center">
                        <div className={`inner-card h-56 w-[21rem] bg-white-texture rounded drop-shadow-md z-20 fixed overflow-scroll 
                        ${activeEnvelope === 2 && isClosing ? 'closing' : ''}`}>
                            
                            {/* CONDITIONAL BACK BUTTON */}
                            {activeEnvelope === 2 && animationCompleted && !isClosing && (
                                <button onClick={handleCloseClick} className="back sticky top-[9px] left-[20.5px] z-20 bg-green-texture w-auto h-auto rounded-sm 
                                shadow-md flex justify-center items-center pt-[2px] px-[4px] gaegu-regular text-[7.5px]">
                                    Back
                                </button>
                            )}

                            {/* LAYOUT CONTAINER */}
                            <div className="absolute top-[30px] flex px-[10px] pb-[15px] justify-evenly z-10 w-full">
                                
                                {/* LEFT COLOUMN */}
                                    
                                {/* PROJECT DESCRIPTION AND TITLE */}
                                <p className='bg-brown-texture w-[9rem] h-[22rem] text-[6.5px] p-[10px] gaegu-regular rounded-md'>
                                    <span className='text-[12px] font-black'>Jeans (rename)</span>
                                    <br/>
                                    Visit the <a href='https://github.com/frenzie24/jeans'><span className='underline hover:text-white'>repository</span>
                                    </a> for more!
                                    <br/><br/>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia esse tenetur beatae aliquid,
                                    obcaecati commodi facilis fuga in dolorum laborum cumque, ut provident, possimus dignissimos
                                    molestias sed. Natus, itaque corporis? 
                                    <br/> <br/>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatibus vitae quasi
                                    dolores totam molestiae obcaecati sint! Harum, ad. Expedita in deleniti quae provident,
                                    odio ad perspiciatis tempora officia! Distinctio!
                                </p>
                                

                                {/* RIGHT COLOUMN */}
                                <div className='flex flex-col justify-between'>

                                    {/* PHOTO PLACEHOLDERS */}
                                    <div className='w-[9rem] h-[5rem] rounded-sm flex justify-center items-center overflow-hidden drop-shadow-sm'>
                                        <img src='./assets/vwg01.png' className='object-cover h-full w-full'></img>
                                    </div>

                                    <div className='w-[9rem] h-[5rem] rounded-sm flex justify-center items-center overflow-hidden drop-shadow-sm'>
                                        <img src='./assets/vwg01.png' className='object-cover h-full w-full'></img>
                                    </div>

                                    <div className='w-[9rem] h-[5rem] rounded-sm flex justify-center items-center overflow-hidden drop-shadow-sm'>
                                        <img src='./assets/vwg01.png' className='object-cover h-full w-full'></img>
                                    </div>

                                    <div className='w-[9rem] h-[5rem] rounded-sm flex justify-center items-center overflow-hidden drop-shadow-sm'>
                                        <img src='./assets/vwg01.png' className='object-cover h-full w-full'></img>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                    {/* PROJECT NAME TAG */}
                    <div className="rounded-2xl gaegu-regular shadow-sm shadow-stone-600 absolute flex flex-col top-[4.5rem] left-[3.5rem] z-30 bg-white-texture 
                    h-[7rem] w-[17rem] justify-center items-center">
                        <p className="text-2xl">Jeans (rename)</p>
                        <hr className="border-black border-1 w-[14.5rem] my-[.3rem]" />
                        <p className="text-lg">resource tool</p>
                    </div>

                    {/* TAPE */}
                    <img src="./assets/small-tape.png" className="absolute z-30 top-[5rem] left-[-4.5rem] w-36 rotate-[-90deg] customShadow" alt="Tape" />

                    {/* WRENCH STICKER */}
                    <img src="./assets/wrench.png" className='w-[5rem] absolute z-30 top-[6rem] right-[-3.5rem] rotate-[15deg] drop-shadow-md'/>

                    {/* BROWN ACCENT CARD */}
                    <div className='bg-brown-texture absolute bottom-[-1.7rem] left-[-3rem] w-[24rem] h-[14rem] shadow-md rounded-md'></div>

                </div>

                {/* ENVELOPE AT BOTTOM OF RIGHT COLUMN (EMPLOYEE TRACKER) */}
                <div className={`h-56 w-96 envelope relative ${activeEnvelope === 3 ? 'active' : ''} 
                ${activeEnvelope !== null && activeEnvelope !== 3 ? 'hover-disabled lower-z' : ''} `} onClick={(e) => handleEnvelopeClick(3, e)}>

                    {/* BACK OF ENVELOPE */}
                    <div className="relative z-10 bg-[#5a7728] w-full h-full items-end shadow-inner"></div>

                    {/* FRONT OF ENVELOPE */}
                    <div className="z-30 absolute w-full h-full bottom-0 shadow-md">
                        <div className="absolute z-10 bottom-0 bg-green-texture w-full h-48"></div>
                        <div className="absolute left-0 bottom-0 bg-green-texture w-10 h-56 rounded-tr-2xl"></div>
                        <div className="absolute right-0 bottom-0 bg-green-texture w-10 h-56 rounded-tl-2xl"></div>
                    </div>

                    {/* INNER CARD ENVELOPE BOUNDARY */}
                    <div className="w-full h-full bottom-4 absolute flex justify-center">
                        <div className={`inner-card h-56 w-[21rem] bg-white-texture rounded drop-shadow-md z-20 fixed overflow-scroll 
                        ${activeEnvelope === 3 && isClosing ? 'closing' : ''}`}>
                            
                            {/* CONDITIONAL BACK BUTTON */}
                            {activeEnvelope === 3 && animationCompleted && !isClosing && (
                                <button onClick={handleCloseClick} className="back sticky top-[9px] left-[20.5px] z-20 bg-green-texture w-auto h-auto rounded-sm 
                                shadow-md flex justify-center items-center pt-[2px] px-[4px] gaegu-regular text-[7.5px]">
                                    Back
                                </button>
                            )}

                            {/* LAYOUT CONTAINER */}
                            <div className="absolute top-[30px] flex px-[10px] pb-[15px] justify-evenly z-10 w-full">
                                
                                {/* LEFT COLOUMN */}
                                    
                                {/* PROJECT DESCRIPTION AND TITLE */}
                                <p className='bg-brown-texture w-[9rem] h-[22rem] text-[6.5px] p-[10px] gaegu-regular rounded-md'>
                                    <span className='text-[12px] font-black'>Employee Tracker</span>
                                    <br/>
                                    Visit the <a href='https://github.com/BreeNous/Employee-Tracker'><span className='underline hover:text-white'>repository</span>
                                    </a> for more!
                                    <br/><br/>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia esse tenetur beatae aliquid,
                                    obcaecati commodi facilis fuga in dolorum laborum cumque, ut provident, possimus dignissimos
                                    molestias sed. Natus, itaque corporis? 
                                    <br/> <br/>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatibus vitae quasi
                                    dolores totam molestiae obcaecati sint! Harum, ad. Expedita in deleniti quae provident,
                                    odio ad perspiciatis tempora officia! Distinctio!
                                </p>
                                

                                {/* RIGHT COLOUMN */}
                                <div className='flex flex-col justify-between'>

                                    {/* PHOTO PLACEHOLDERS */}
                                    <div className='w-[9rem] h-[5rem] rounded-sm flex justify-center items-center overflow-hidden drop-shadow-sm'>
                                        <img src='./assets/vwg01.png' className='object-cover h-full w-full'></img>
                                    </div>

                                    <div className='w-[9rem] h-[5rem] rounded-sm flex justify-center items-center overflow-hidden drop-shadow-sm'>
                                        <img src='./assets/vwg01.png' className='object-cover h-full w-full'></img>
                                    </div>

                                    <div className='w-[9rem] h-[5rem] rounded-sm flex justify-center items-center overflow-hidden drop-shadow-sm'>
                                        <img src='./assets/vwg01.png' className='object-cover h-full w-full'></img>
                                    </div>

                                    <div className='w-[9rem] h-[5rem] rounded-sm flex justify-center items-center overflow-hidden drop-shadow-sm'>
                                        <img src='./assets/vwg01.png' className='object-cover h-full w-full'></img>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                    {/* PROJECT NAME TAG */}
                    <div className="rounded-2xl gaegu-regular shadow-sm shadow-stone-600 absolute flex flex-col top-[4.5rem] left-[3.5rem] z-30 bg-white-texture 
                    h-[7rem] w-[17rem] justify-center items-center">
                        <p className="text-2xl">Employee Tracker</p>
                        <hr className="border-black border-1 w-[14.5rem] my-[.3rem]" />
                        <p className="text-lg">management application</p>
                    </div>

                    {/* TAPE */}
                    <img src="./assets/small-tape.png" className="absolute z-30 top-24 right-[-4.8rem] w-36 rotate-[-265deg] customShadow" alt="Tape" />
                    
                    {/* DOLLAR STICKER */}
                    <img src="./assets/dollar.png" className='w-[5.2rem] absolute z-30 top-[7rem] left-[-3rem] rotate-[-6deg] drop-shadow-md'/>

                    {/* BROWN ACCENT CARD */}
                    <div className='bg-brown-texture absolute bottom-[-1.7rem] right-[-3rem] w-[24rem] h-[14rem] shadow-md rounded-md'></div>

                </div>

            </div>

            {/* SCREEN BLUR OVERLAY */}
            <div className={`w-screen h-screen fixed top-0 left-0 ${isBlurred ? 'blur-active' : ''} ${reFocus ? 'reFocus-active' : ''}`}></div>
            
        </div>
    );
}

export default Portfolio;