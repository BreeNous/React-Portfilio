import React, { useState } from 'react';

function Portfolio() {

    const [activeEnvelope, setActiveEnvelope] = useState(null);
    const [animationCompleted, setAnimationCompleted] = useState(false);
    const [isClosing, setIsClosing] = useState(false); // New state to track closing animation
    const [isBlurred, setIsBlurred] = useState(false);
    const [reFocus, setReFocus] = useState(false);

    const handleEnvelopeClick = (index, event) => {
        if (activeEnvelope !== null && activeEnvelope !== index) return;
    
        const card = event.currentTarget.querySelector('.inner-card');
    
        requestAnimationFrame(() => {
            const rect = card.getBoundingClientRect();
    
            if (rect.width > 0 && rect.height > 0) {
                card.style.setProperty('--start-top', `${rect.top}px`);
                card.style.setProperty('--start-left', `${rect.left}px`);
                card.style.setProperty('--start-width', `${rect.width}px`);
                card.style.setProperty('--start-height', `${rect.height}px`);
            }
    
            setActiveEnvelope(index);
            setTimeout(() => setIsBlurred(true), 350);
    
            
            card.addEventListener('animationend', () => {
                setAnimationCompleted(true);
            }, { once: true });
        });
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
        <div className="flex-1 relative overflow-y-auto
        // ALL_SCREENS: flex h-full w-full
        // XS_SCREENS: flex-col 
        // SM_SCREENS: sm:flex-col
        // MD_SCREENS: md:flex-row
        // LG_SCREENS: lg:flex-row
        // XL_SCREENS: xl:flex-row">

            {/* LEFT SIDE GRID */}
            <div className="
            // ALL_SCREENS: relative transition-all left-0 top-0 duration-300 ease-in-out grid grid-cols-12 grid-rows-12
            // XS_SCREENS: w-full min-h-screen max-h-screen
            // MD_SCREENS: md:w-1/2
            // LG_SCREENS: lg:w-1/2 lg:h-full
            // XL_SCREENS: xl:w-1/2 xl:h-full">


                {/* ----- VWG PROJECT ----- */}
                

                {/* VWG PROJECT CONTAINER */}
                <div className=' col-start-3 col-end-11 row-start-4 row-end-7 flex justify-center'>

                    {/* ALIGNMENT CONTAINER FOR ENVELOPE AND BROWN BG DECOR */}
                    <div className='max-w-[22rem] w-full h-full relative'>

                        {/* BROWN BG CARD DECORATION */}
                        <div className='absolute bg-brown-texture shadow-md w-full h-full left-5 top-5'></div>
                    
                        <div className={`bg-[#5a7728] w-full h-full shadow-inner z-[100] envelope relative ${activeEnvelope === 0 ? 'active' : ''} 
                        ${activeEnvelope !== null && activeEnvelope !== 0 ? 'hover-disabled lower-z' : ''}`} onClick={(e) => handleEnvelopeClick(0, e)}>
                        
                            {/* FRONT OF ENVELOPE */}
                            <div className='z-30 relative w-full h-full bottom-0 shadow-md'>
                                <div className="absolute flex justify-center items-center z-10 bottom-0 bg-green-texture w-full h-5/6">

                                    {/* ENVELOPE TITLE CARD */}
                                    <div className='rounded-2xl gaegu-regular shadow-sm shadow-stone-600 absolute flex flex-col z-30 
                                    bg-white-texture h-2/3 w-3/4 justify-center items-center'>

                                        <p className='text-base
                                        xl:text-2xl'>
                                            Vibrawood Gutairs
                                        </p>

                                        <hr className='border-black border-1 w-3/4 my-[.3rem]'/>

                                        <p className='text-sm
                                        xl:text-lg'>
                                            commercial website
                                        </p>
                                    </div>

                                    {/* TAPE DECOR */}
                                    <img src='./assets/small-tape.png' className='absolute z-30 top-10 right-0 translate-x-1/2 h-1/4 rotate-[-265deg] customShadow'></img>

                                    {/* GUTAIR DECOR */}
                                    <img src='./assets/guitar.png' className='h-3/4 absolute z-30 top-10 -left-7 rotate-[-5deg] drop-shadow-md'></img>

                                </div>

                                <div className="absolute left-0 bottom-0 bg-green-texture w-10 h-full rounded-tr-2xl"></div>

                                <div className="absolute right-0 bottom-0 bg-green-texture w-10 h-full rounded-tl-2xl"></div>
                            </div>

                            {/* INNER CARD PLACEMNT CONTAINER */}
                            <div className='w-full h-full flex justify-center absolute bottom-0'>

                                {/* INNER CARD */}
                                <div className={`inner-card bg-white-texture rounded drop-shadow-md z-20 overflow-scroll
                                ${activeEnvelope === 0 ? 'fixed click-animation-xs-sm md:click-animation-md-xl ' : 'relative w-5/6 h-5/6 -top-5'}
                                ${activeEnvelope === 0 && isClosing ? 'closing' : ''}`}
                                style={activeEnvelope === 0 ? {
                                top: 'var(--start-top)',
                                left: 'var(--start-left)',
                                width: 'var(--start-width)',
                                height: 'var(--start-height)',} : {}}>

                                    
                                    {/* CONDITIONAL BACK BUTTON */}
                                    {activeEnvelope === 0 && animationCompleted && !isClosing && (
                                        <button onClick={handleCloseClick} className="back bg-green-texture rounded-sm shadow-md absolute flex
                                        gaegu-regular text-base px-2 justify-center items-center top-3 left-3 z-[100]
                                        lg:text-lg">
                                            Back
                                        </button>
                                    )} 
                                    
                                    {activeEnvelope === 0 && animationCompleted && !isClosing && (

                                        <div className='min-h-fit flex flex-col
                                        lg:flex-row reveal-content'>

                                            {/* LEFT COLOUMN / TOP ROW */}
                                            <div className='w-full flex flex-col items-center
                                            lg:w-1/2'>

                                                {/* PROJECT DESCRIPTION AND TITLE */}
                                                <div className='flex flex-grow px-5 pt-12 pb-5
                                                sm:px-10 sm:pb-10
                                                lg:pt-14 lg:pr-5 lg:pb-5'>

                                                    <p className='w-full p-4 h-auto text-base gaegu-regular bg-brown-texture rounded-md shadow-sm shadow-[rgba(0,0,0,0.35)]
                                                    sm:text-lg
                                                    md:p-5 md:w-full md:min-h-fit
                                                    xl:text-xl'>

                                                        <span className='text-lg font-black
                                                        sm:text-xl
                                                        lg:text-2xl'>
                                                            Vibrawood Guitairs
                                                        </span>

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
                                                        <br/> <br/>
                                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatibus vitae quasi
                                                        dolores totam molestiae obcaecati sint! Harum, ad. Expedita in deleniti quae provident,
                                                        odio ad perspiciatis tempora officia! Distinctio!
                                                    </p>
                                                </div>

                                                <div className=' shadow-[rgba(0,0,0,0.35)] w-full p-5 pb-0
                                                md:px-5 md:py-5 hidden lg:block lg:pl-10 lg:pt-0'>

                                                    <div className='w-auto min-h-fit items-center overflow-hidden hidden lg:flex'>
                                                            <img src='./assets/vwg04.png' className='object-cover h-auto w-full rounded-md drop-shadow-md'></img>
                                                    </div>

                                                </div>
                                            </div>
                                            

                                            {/* RIGHT COLOUMN / BOTTOM ROW */}
                                            <div className=' shadow-[rgba(0,0,0,0.35)] w-full flex justify-center p-5 pt-0 min-h-fit flex-grow
                                            sm:p-10 sm:pt-0
                                            lg:w-1/2 lg:flex-grow-0 lg:pr-10 lg:pt-14 lg:pl-5 lg:pb-5'>

                                                <div className='flex flex-col justify-between'>

                                                    {/* PROJECT PHOTOS */}
                                                    <div className='w-auto min-h-fit pb-5 flex justify-center items-center overflow-hidden'>
                                                        <img src='./assets/vwg01.png' className='object-cover h-auto w-full rounded-md drop-shadow-md'></img>
                                                    </div>

                                                    <div className='w-auto min-h-fit pb-5 flex justify-center items-center overflow-hidden'>
                                                        <img src='./assets/vwg02.png' className='object-cover h-auto w-full rounded-md drop-shadow-md'></img>
                                                    </div>

                                                    <div className='w-auto min-h-fit  flex justify-center items-center overflow-hidden'>
                                                        <img src='./assets/vwg03.png' className='object-cover h-auto w-full rounded-md drop-shadow-md'></img>
                                                    </div>

                                                    <div className='w-auto min-h-fit pt-5 flex justify-center items-center overflow-hidden lg:hidden'>
                                                            <img src='./assets/vwg04.png' className='object-cover h-auto w-full rounded-md drop-shadow-md'></img>
                                                    </div>

                                                    

                                                </div>

                                            </div>
                                            
                                        </div>

                                    )}

                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                {/* -----WET DASH PROJECT----- */}

                
                {/* WET DASH PROJECT CONTAINER */}
                <div className='col-start-3 col-end-11 row-start-8 row-end-11 flex justify-center'>

                    {/* ALIGNMENT CONTAINER FOR ENVELOPE AND BROWN BG DECOR */}
                    <div className='max-w-[22rem] w-full h-full relative'>

                        {/* BROWN BG CARD DECORATION */}
                        <div className='absolute bg-brown-texture w-full h-full right-5 top-5'></div>

                        {/* ENVELOPE */}
                        <div className={`bg-[#5a7728] w-full h-full shadow-inner envelope z-[100] relative ${activeEnvelope === 1 ? 'active' : ''} 
                        ${activeEnvelope !== null && activeEnvelope !== 1 ? 'hover-disabled lower-z' : ''}`} onClick={(e) => handleEnvelopeClick(1, e)}>
                        
                            {/* FRONT OF ENVELOPE */}
                            <div className='z-30 relative w-full h-full bottom-0 shadow-md'>
                                <div className="absolute flex justify-center items-center z-10 bottom-0 bg-green-texture w-full h-5/6">

                                    {/* ENVELOPE TITLE CARD */}
                                    <div className='rounded-2xl gaegu-regular shadow-sm shadow-stone-600 absolute flex flex-col z-30 
                                    bg-white-texture h-2/3 w-3/4 justify-center items-center'>

                                        <p className='text-base
                                        xl:text-2xl'>
                                            Weather Dashboard
                                        </p>

                                        <hr className='border-black border-1 w-3/4 my-[.3rem]'/>

                                        <p className='text-sm
                                        xl:text-lg'>
                                            personal website
                                        </p>
                                    </div>

                                    {/* TAPE DECOR */}
                                    <img src='./assets/small-tape.png' className='absolute z-30 top-10 left-0 -translate-x-1/2 h-1/4 rotate-[-265deg] customShadow'></img>

                                    {/* WEATHER DECOR */}
                                    <img src='./assets/weather.png' className='h-3/5 absolute z-30 top-20 -right-7 rotate-[5deg] drop-shadow-md'></img>

                                </div>

                                <div className="absolute left-0 bottom-0 bg-green-texture w-10 h-full rounded-tr-2xl"></div>

                                <div className="absolute right-0 bottom-0 bg-green-texture w-10 h-full rounded-tl-2xl"></div>
                            </div>

                            {/* INNER CARD PLACEMNT CONTAINER */}
                            <div className='w-full h-full flex justify-center absolute bottom-0'>

                                {/* INNER CARD */}
                                <div className={`inner-card bg-white-texture rounded drop-shadow-md z-20 overflow-scroll
                                ${activeEnvelope === 1 ? 'fixed click-animation-xs-sm md:click-animation-md-xl ' : 'relative w-5/6 h-5/6 -top-5'}
                                ${activeEnvelope === 1 && isClosing ? 'closing' : ''}`}
                                style={activeEnvelope === 1 ? {
                                top: 'var(--start-top)',
                                left: 'var(--start-left)',
                                width: 'var(--start-width)',
                                height: 'var(--start-height)',} : {}}>

                                    
                                    {/* CONDITIONAL BACK BUTTON */}
                                    {activeEnvelope === 1 && animationCompleted && !isClosing && (
                                        <button onClick={handleCloseClick} className="back bg-green-texture rounded-sm shadow-md flex absolute
                                        gaegu-regular text-base px-2 justify-center items-center top-3 left-3 z-[100]
                                        lg:text-lg">
                                            Back
                                        </button>
                                    )} 
                                    
                                    {activeEnvelope === 1 && animationCompleted && !isClosing && (

                                        <div className='min-h-fit flex flex-col
                                        lg:flex-row reveal-content'>

                                            {/* LEFT COLOUMN / TOP ROW */}
                                            <div className='w-full flex flex-col items-center
                                            lg:w-1/2'>

                                                {/* PROJECT DESCRIPTION AND TITLE */}
                                                <div className='flex flex-grow px-5 pt-12 pb-5
                                                sm:px-10 sm:pb-10
                                                lg:pt-14 lg:pr-5 lg:pb-5'>

                                                    <p className='w-full p-4 h-auto text-base gaegu-regular bg-brown-texture rounded-md shadow-sm shadow-[rgba(0,0,0,0.35)]
                                                    sm:text-lg
                                                    md:p-5 md:w-full md:min-h-fit
                                                    xl:text-xl'>

                                                        <span className='text-lg font-black
                                                        sm:text-xl
                                                        lg:text-2xl'>
                                                            Weather Dashboard
                                                        </span>

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
                                                        <br/> <br/>
                                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatibus vitae quasi
                                                        dolores totam molestiae obcaecati sint! Harum, ad. Expedita in deleniti quae provident,
                                                        odio ad perspiciatis tempora officia! Distinctio!
                                                    </p>
                                                </div>

                                                <div className=' shadow-[rgba(0,0,0,0.35)] w-full p-5 pb-0
                                                md:px-5 md:py-5 hidden lg:block lg:pl-10 lg:pt-0'>

                                                    <div className='w-auto min-h-fit items-center overflow-hidden hidden lg:flex'>
                                                            <img src='./assets/wd04.png' className='object-cover h-auto w-full rounded-md drop-shadow-md'></img>
                                                    </div>

                                                </div>
                                            </div>
                                            

                                            {/* RIGHT COLOUMN / BOTTOM ROW */}
                                            <div className=' shadow-[rgba(0,0,0,0.35)] w-full flex justify-center p-5 pt-0 min-h-fit flex-grow
                                            sm:p-10 sm:pt-0
                                            lg:w-1/2 lg:flex-grow-0 lg:pr-10 lg:pt-14 lg:pl-5 lg:pb-5'>

                                                <div className='flex flex-col justify-between'>

                                                    {/* PROJECT PHOTOS */}
                                                    <div className='w-auto min-h-fit pb-5 flex justify-center items-center overflow-hidden'>
                                                        <img src='./assets/wd01.png' className='object-cover h-auto w-full rounded-md drop-shadow-md'></img>
                                                    </div>

                                                    <div className='w-auto min-h-fit pb-5 flex justify-center items-center overflow-hidden'>
                                                        <img src='./assets/wd02.png' className='object-cover h-auto w-full rounded-md drop-shadow-md'></img>
                                                    </div>

                                                    <div className='w-auto min-h-fit  flex justify-center items-center overflow-hidden'>
                                                        <img src='./assets/wd03.png' className='object-cover h-auto w-full rounded-md drop-shadow-md'></img>
                                                    </div>

                                                    <div className='w-auto min-h-fit pt-5 flex justify-center items-center overflow-hidden lg:hidden'>
                                                            <img src='./assets/wd04.png' className='object-cover h-auto w-full rounded-md drop-shadow-md'></img>
                                                    </div>

                                                    

                                                </div>

                                            </div>
                                            
                                        </div>

                                    )}

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>    

            {/* RIGHT SIDE GRID */}
            <div className="
            // ALL_SCREENS: relative transition-all right-0 top-0 duration-300 ease-in-out grid grid-cols-12 grid-rows-12
            // XS_SCREENS: w-full min-h-screen max-h-screen
            // MD_SCREENS: md:w-1/2
            // LG_SCREENS: lg:w-1/2 lg:h-full
            // XL_SCREENS: xl:w-1/2 xl:h-full">


                {/* -----JEANS PROJECT----- */}

                
                {/* JEANS PROJECT CONTAINER */}
                <div className='col-start-3 col-end-11 row-start-4 row-end-7 flex justify-center'>

                    {/* ALIGNMENT CONTAINER FOR ENVELOPE AND BROWN BG DECOR */}
                    <div className='max-w-[22rem] w-full h-full relative'>

                        {/* BROWN BG CARD DECORATION */}
                        <div className='absolute bg-brown-texture w-full h-full left-5 top-5'></div>

                        {/* ENVELOPE */}
                        <div className={`bg-[#5a7728] w-full h-full shadow-inner z-[100] envelope relative ${activeEnvelope === 2 ? 'active' : ''} 
                        ${activeEnvelope !== null && activeEnvelope !== 2 ? 'hover-disabled lower-z' : ''}`} onClick={(e) => handleEnvelopeClick(2, e)}>
                        
                            {/* FRONT OF ENVELOPE */}
                            <div className='z-30 relative w-full h-full bottom-0 shadow-md'>
                                <div className="absolute flex justify-center items-center z-10 bottom-0 bg-green-texture w-full h-5/6">

                                    {/* ENVELOPE TITLE CARD */}
                                    <div className='rounded-2xl gaegu-regular shadow-sm shadow-stone-600 absolute flex flex-col z-30 
                                    bg-white-texture h-2/3 w-3/4 justify-center items-center'>

                                        <p className='text-base
                                        xl:text-2xl'>
                                            Jeans
                                        </p>

                                        <hr className='border-black border-1 w-3/4 my-[.3rem]'/>

                                        <p className='text-sm
                                        xl:text-lg'>
                                            resource tool
                                        </p>
                                    </div>

                                    {/* TAPE DECOR */}
                                    <img src='./assets/small-tape.png' className='absolute z-30 top-10 right-0 translate-x-1/2 h-1/4 rotate-[-265deg] customShadow'></img>

                                    {/* WRENCH DECOR */}
                                    <img src="./assets/wrench.png" className='h-3/4 absolute z-30 top-10 -left-7 rotate-[-5deg] drop-shadow-md'></img>

                                </div>

                                <div className="absolute left-0 bottom-0 bg-green-texture w-10 h-full rounded-tr-2xl"></div>

                                <div className="absolute right-0 bottom-0 bg-green-texture w-10 h-full rounded-tl-2xl"></div>
                            </div>

                            {/* INNER CARD PLACEMNT CONTAINER */}
                            <div className='w-full h-full flex justify-center absolute bottom-0'>

                                {/* INNER CARD */}
                                <div className={`inner-card bg-white-texture rounded drop-shadow-md z-20 overflow-scroll
                                ${activeEnvelope === 2 ? 'fixed click-animation-xs-sm md:click-animation-md-xl ' : 'relative w-5/6 h-5/6 -top-5'}
                                ${activeEnvelope === 2 && isClosing ? 'closing' : ''}`}
                                style={activeEnvelope === 2 ? {
                                top: 'var(--start-top)',
                                left: 'var(--start-left)',
                                width: 'var(--start-width)',
                                height: 'var(--start-height)',} : {}}>

                                    
                                    {/* CONDITIONAL BACK BUTTON */}
                                    {activeEnvelope === 2 && animationCompleted && !isClosing && (
                                        <button onClick={handleCloseClick} className="back bg-green-texture rounded-sm shadow-md absolute flex
                                        gaegu-regular text-base px-2 justify-center items-center top-3 left-3 z-[100]
                                        lg:text-lg">
                                            Back
                                        </button>
                                    )} 
                                    
                                    {activeEnvelope === 2 && animationCompleted && !isClosing && (

                                        <div className='min-h-fit flex flex-col
                                        lg:flex-row reveal-content'>

                                            {/* LEFT COLOUMN / TOP ROW */}
                                            <div className='w-full flex flex-col items-center
                                            lg:w-1/2'>

                                                {/* PROJECT DESCRIPTION AND TITLE */}
                                                <div className='flex flex-grow px-5 pt-12 pb-5
                                                sm:px-10 sm:pb-10
                                                lg:pt-14 lg:pr-5 lg:pb-5'>

                                                    <p className='w-full p-4 h-auto text-base gaegu-regular bg-brown-texture rounded-md shadow-sm shadow-[rgba(0,0,0,0.35)]
                                                    sm:text-lg
                                                    md:p-5 md:w-full md:min-h-fit
                                                    xl:text-xl'>

                                                        <span className='text-lg font-black
                                                        sm:text-xl
                                                        lg:text-2xl'>
                                                            Jeans
                                                        </span>

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
                                                        <br/> <br/>
                                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatibus vitae quasi
                                                        dolores totam molestiae obcaecati sint! Harum, ad. Expedita in deleniti quae provident,
                                                        odio ad perspiciatis tempora officia! Distinctio!
                                                    </p>
                                                </div>

                                                <div className=' shadow-[rgba(0,0,0,0.35)] w-full p-5 pb-0
                                                md:px-5 md:py-5 hidden lg:block lg:pl-10 lg:pt-0'>

                                                    <div className='w-auto min-h-fit items-center overflow-hidden hidden lg:flex'>
                                                            <img src='./assets/jeans4.png' className='object-cover h-auto w-full rounded-md drop-shadow-md'></img>
                                                    </div>

                                                </div>
                                            </div>
                                            

                                            {/* RIGHT COLOUMN / BOTTOM ROW */}
                                            <div className=' shadow-[rgba(0,0,0,0.35)] w-full flex justify-center p-5 pt-0 min-h-fit flex-grow
                                            sm:p-10 sm:pt-0
                                            lg:w-1/2 lg:flex-grow-0 lg:pr-10 lg:pt-14 lg:pl-5 lg:pb-5'>

                                                <div className='flex flex-col justify-between'>

                                                    {/* PROJECT PHOTOS */}
                                                    <div className='w-auto min-h-fit pb-5 flex justify-center items-center overflow-hidden'>
                                                        <img src='./assets/jeans1.png' className='object-cover h-auto w-full rounded-md drop-shadow-md'></img>
                                                    </div>

                                                    <div className='w-auto min-h-fit pb-5 flex justify-center items-center overflow-hidden'>
                                                        <img src='./assets/jeans2.png' className='object-cover h-auto w-full rounded-md drop-shadow-md'></img>
                                                    </div>

                                                    <div className='w-auto min-h-fit  flex justify-center items-center overflow-hidden'>
                                                        <img src='./assets/jeans3.png' className='object-cover h-auto w-full rounded-md drop-shadow-md'></img>
                                                    </div>

                                                    <div className='w-auto min-h-fit pt-5 flex justify-center items-center overflow-hidden lg:hidden'>
                                                            <img src='./assets/jeans4.png' className='object-cover h-auto w-full rounded-md drop-shadow-md'></img>
                                                    </div>

                                                    

                                                </div>

                                            </div>
                                            
                                        </div>

                                    )}

                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                {/* -----BUCKET PROJECT----- */}
                

                {/* BUCKET PROJECT CONTAINER */}
                <div className='col-start-3 col-end-11 row-start-8 row-end-11 flex justify-center'>

                    {/* ALIGNMENT CONTAINER FOR ENVELOPE AND BROWN BG DECOR */}
                    <div className='max-w-[22rem] w-full h-full relative'>

                        {/* BROWN BG CARD DECORATION */}
                        <div className='absolute bg-brown-texture w-full h-full right-5 top-5'></div>

                        {/* ENVELOPE */}
                        <div className={`bg-[#5a7728] w-full h-full shadow-inner z-[100] envelope relative ${activeEnvelope === 3 ? 'active' : ''} 
                                ${activeEnvelope !== null && activeEnvelope !== 3 ? 'hover-disabled lower-z' : ''}`} onClick={(e) => handleEnvelopeClick(3, e)}>
                            
                                {/* FRONT OF ENVELOPE */}
                                <div className='z-30 relative w-full h-full bottom-0 shadow-md'>
                                    <div className="absolute flex justify-center items-center z-10 bottom-0 bg-green-texture w-full h-5/6">

                                        {/* ENVELOPE TITLE CARD */}
                                        <div className='rounded-2xl gaegu-regular shadow-sm shadow-stone-600 absolute flex flex-col z-30 
                                        bg-white-texture h-2/3 w-3/4 justify-center items-center'>

                                            <p className='text-base
                                            xl:text-2xl'>
                                                Bucket
                                            </p>

                                            <hr className='border-black border-1 w-3/4 my-[.3rem]'/>

                                            <p className='text-sm
                                            xl:text-lg'>
                                                personal website
                                            </p>
                                        </div>

                                        {/* TAPE DECOR */}
                                        <img src='./assets/small-tape.png' className='absolute z-30 top-10 left-0 -translate-x-1/2 h-1/4 rotate-[-265deg] customShadow'></img>

                                        {/* LIST DECOR */}
                                        <img src="./assets/list.png" className='h-3/5 absolute z-30 top-20 -right-7 rotate-[5deg] drop-shadow-md'></img>

                                    </div>

                                    <div className="absolute left-0 bottom-0 bg-green-texture w-10 h-full rounded-tr-2xl"></div>

                                    <div className="absolute right-0 bottom-0 bg-green-texture w-10 h-full rounded-tl-2xl"></div>
                                </div>

                                {/* INNER CARD PLACEMNT CONTAINER */}
                                <div className='w-full h-full flex justify-center absolute bottom-0'>

                                    {/* INNER CARD */}
                                    <div className={`inner-card bg-white-texture rounded drop-shadow-md z-20 overflow-scroll
                                    ${activeEnvelope === 3 ? 'fixed click-animation-xs-sm md:click-animation-md-xl ' : 'relative w-5/6 h-5/6 -top-5'}
                                    ${activeEnvelope === 3 && isClosing ? 'closing' : ''}`}
                                    style={activeEnvelope === 3 ? {
                                    top: 'var(--start-top)',
                                    left: 'var(--start-left)',
                                    width: 'var(--start-width)',
                                    height: 'var(--start-height)',} : {}}>

                                        
                                        {/* CONDITIONAL BACK BUTTON */}
                                        {activeEnvelope === 3 && animationCompleted && !isClosing && (
                                            <button onClick={handleCloseClick} className="back bg-green-texture rounded-sm shadow-md flex absolute
                                            gaegu-regular text-base px-2 justify-center items-center top-3 left-3 z-[100]
                                            lg:text-lg">
                                                Back
                                            </button>
                                        )} 
                                        
                                        {activeEnvelope === 3 && animationCompleted && !isClosing && (

                                            <div className='min-h-fit flex flex-col
                                            lg:flex-row reveal-content'>

                                                {/* LEFT COLOUMN / TOP ROW */}
                                                <div className='w-full flex flex-col items-center
                                                lg:w-1/2'>

                                                    {/* PROJECT DESCRIPTION AND TITLE */}
                                                    <div className='flex flex-grow px-5 pt-12 pb-5
                                                    sm:px-10 sm:pb-10
                                                    lg:pt-14 lg:pr-5 lg:pb-5'>

                                                        <p className='w-full p-4 h-auto text-base gaegu-regular bg-brown-texture rounded-md shadow-sm shadow-[rgba(0,0,0,0.35)]
                                                        sm:text-lg
                                                        md:p-5 md:w-full md:min-h-fit
                                                        xl:text-xl'>

                                                            <span className='text-lg font-black
                                                            sm:text-xl
                                                            lg:text-2xl'>
                                                                Bucket
                                                            </span>

                                                            <br/>
                                                            Visit the <a href='https://github.com/BreeNous/Bucket'><span className='underline hover:text-white'>repository</span>
                                                            </a> for more!
                                                            <br/><br/>
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia esse tenetur beatae aliquid,
                                                            obcaecati commodi facilis fuga in dolorum laborum cumque, ut provident, possimus dignissimos
                                                            molestias sed. Natus, itaque corporis? 
                                                            <br/> <br/>
                                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatibus vitae quasi
                                                            dolores totam molestiae obcaecati sint! Harum, ad. Expedita in deleniti quae provident,
                                                            odio ad perspiciatis tempora officia! Distinctio!
                                                            <br/> <br/>
                                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatibus vitae quasi
                                                            dolores totam molestiae obcaecati sint! Harum, ad. Expedita in deleniti quae provident,
                                                            odio ad perspiciatis tempora officia! Distinctio!
                                                        </p>
                                                    </div>

                                                    <div className=' shadow-[rgba(0,0,0,0.35)] w-full p-5 pb-0
                                                    md:px-5 md:py-5 hidden lg:block lg:pl-10 lg:pt-0'>

                                                        <div className='w-auto min-h-fit items-center overflow-hidden hidden lg:flex'>
                                                                <img src='./assets/b4.png' className='object-cover h-auto w-full rounded-md drop-shadow-md'></img>
                                                        </div>

                                                    </div>
                                                </div>
                                                

                                                {/* RIGHT COLOUMN / BOTTOM ROW */}
                                                <div className=' shadow-[rgba(0,0,0,0.35)] w-full flex justify-center p-5 pt-0 min-h-fit flex-grow
                                                sm:p-10 sm:pt-0
                                                lg:w-1/2 lg:flex-grow-0 lg:pr-10 lg:pt-14 lg:pl-5 lg:pb-5'>

                                                    <div className='flex flex-col justify-between'>

                                                        {/* PROJECT PHOTOS */}
                                                        <div className='w-auto min-h-fit pb-5 flex justify-center items-center overflow-hidden'>
                                                            <img src='./assets/b1.png' className='object-cover h-auto w-full rounded-md drop-shadow-md'></img>
                                                        </div>

                                                        <div className='w-auto min-h-fit pb-5 flex justify-center items-center overflow-hidden'>
                                                            <img src='./assets/b2.png' className='object-cover h-auto w-full rounded-md drop-shadow-md'></img>
                                                        </div>

                                                        <div className='w-auto min-h-fit  flex justify-center items-center overflow-hidden'>
                                                            <img src='./assets/b3.png' className='object-cover h-auto w-full rounded-md drop-shadow-md'></img>
                                                        </div>

                                                        <div className='w-auto min-h-fit pt-5 flex justify-center items-center overflow-hidden lg:hidden'>
                                                                <img src='./assets/b4.png' className='object-cover h-auto w-full rounded-md drop-shadow-md'></img>
                                                        </div>

                                                        

                                                    </div>

                                                </div>
                                                
                                            </div>
                                        )}

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            {/* SCREEN BLUR OVERLAY */}
            <div className={`w-screen h-screen absolute top-0 left-0 ${isBlurred ? 'blur-active' : ''} ${reFocus ? 'reFocus-active' : ''}`}></div>
            
        </div>
    );
}

export default Portfolio;