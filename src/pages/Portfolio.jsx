import React, { useState } from 'react';

import ProjectCard from '../components/ProjectCard';

import smallTape from '../assets/small-tape.webp';

import gutair from '../assets/guitar.webp';
import list from '../assets/list.webp';
import weather from '../assets/weather.webp';
import wrench from '../assets/wrench.webp';

import { bgGreen, bgBrown, bgWhite } from '../components/Backgrounds';

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
        }, { once: true }); // Listener will be removed after the closing animation ends
    };

    return (

        // FULL PORTFOLIO PAGE
        <div className="relative flex h-full w-full flex-col 
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
                        <div style={bgBrown} className='absolute shadow-md w-full h-full left-5 top-5'></div>
                    
                        <div className={`bg-[#5a7728] w-full h-full shadow-inner envelope relative ${activeEnvelope === 0 ? 'active z-[100]' : ''} 
                        ${activeEnvelope !== null && activeEnvelope !== 0 ? 'hover-disabled lower-z' : ''}`} onClick={(e) => handleEnvelopeClick(0, e)}>
                        
                            {/* FRONT OF ENVELOPE */}
                            <div className='z-30 relative w-full h-full bottom-0 shadow-md'>
                                <div style={bgGreen} className="absolute flex justify-center items-center z-10 bottom-0 w-full h-5/6">

                                    {/* ENVELOPE TITLE CARD */}
                                    <div style={bgWhite} className='rounded-2xl gaegu-regular shadow-sm shadow-stone-600 absolute flex flex-col z-30 
                                    h-2/3 w-3/4 justify-center items-center'>

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
                                    <img src={smallTape} alt="" aria-hidden="true" 
                                    className='absolute z-30 top-10 right-0 translate-x-1/2 h-1/4 rotate-[-265deg] customShadow'></img>

                                    {/* GUTAIR DECOR */}
                                    <img src={gutair} alt="decoritve gutair drawing" 
                                    className='h-3/4 absolute z-30 top-10 -left-7 rotate-[-5deg] drop-shadow-md'></img>

                                </div>

                                <div style={bgGreen} className="absolute left-0 bottom-0 w-10 h-full rounded-tr-2xl"></div>

                                <div style={bgGreen} className="absolute right-0 bottom-0 w-10 h-full rounded-tl-2xl"></div>
                                
                            </div>

                            <ProjectCard
                            index={0}
                            activeEnvelope={activeEnvelope}
                            isClosing={isClosing}
                            animationCompleted={animationCompleted}
                            onClose={handleCloseClick}
                            bgWhite={bgWhite}
                            bgBrown={bgBrown}
                            bgGreen={bgGreen}
                            />

                        </div>

                    </div>

                </div>


                {/* -----WET DASH PROJECT----- */}

                
                {/* WET DASH PROJECT CONTAINER */}
                <div className='col-start-3 col-end-11 row-start-8 row-end-11 flex justify-center'>

                    {/* ALIGNMENT CONTAINER FOR ENVELOPE AND BROWN BG DECOR */}
                    <div className='max-w-[22rem] w-full h-full relative'>

                        {/* BROWN BG CARD DECORATION */}
                        <div style={bgBrown} className='absolute w-full h-full right-5 top-5'></div>

                        {/* ENVELOPE */}
                        <div className={`bg-[#5a7728] w-full h-full shadow-inner envelope relative ${activeEnvelope === 1 ? 'active z-[100]' : ''} 
                        ${activeEnvelope !== null && activeEnvelope !== 1 ? 'hover-disabled lower-z' : ''}`} onClick={(e) => handleEnvelopeClick(1, e)}>
                        
                            {/* FRONT OF ENVELOPE */}
                            <div className='z-30 relative w-full h-full bottom-0 shadow-md'>
                                <div style={bgGreen} className="absolute flex justify-center items-center z-10 bottom-0 w-full h-5/6">

                                    {/* ENVELOPE TITLE CARD */}
                                    <div style={bgWhite} className='rounded-2xl gaegu-regular shadow-sm shadow-stone-600 absolute flex flex-col z-30 
                                    h-2/3 w-3/4 justify-center items-center'>

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
                                    <img src={smallTape} alt="" aria-hidden="true" 
                                    className='absolute z-30 top-10 left-0 -translate-x-1/2 h-1/4 rotate-[-265deg] customShadow'></img>

                                    {/* WEATHER DECOR */}
                                    <img src={weather} alt="decoritive rain cloud drawing" className='h-3/5 absolute z-30 top-20 -right-7 rotate-[5deg] drop-shadow-md'></img>

                                </div>

                                <div style={bgGreen} className="absolute left-0 bottom-0 w-10 h-full rounded-tr-2xl"></div>

                                <div style={bgGreen} className="absolute right-0 bottom-0 w-10 h-full rounded-tl-2xl"></div>
                            </div>

                            {/* INNER CARD PLACEMNT CONTAINER */}
                            <ProjectCard
                            index={1}
                            activeEnvelope={activeEnvelope}
                            isClosing={isClosing}
                            animationCompleted={animationCompleted}
                            onClose={handleCloseClick}
                            bgWhite={bgWhite}
                            bgBrown={bgBrown}
                            bgGreen={bgGreen}
                            />

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
                        <div style={bgBrown} className='absolute w-full h-full left-5 top-5'></div>

                        {/* ENVELOPE */}
                        <div className={`bg-[#5a7728] w-full h-full shadow-inner envelope relative ${activeEnvelope === 2 ? 'active z-[100]' : ''} 
                        ${activeEnvelope !== null && activeEnvelope !== 2 ? 'hover-disabled lower-z' : ''}`} onClick={(e) => handleEnvelopeClick(2, e)}>
                        
                            {/* FRONT OF ENVELOPE */}
                            <div className='z-30 relative w-full h-full bottom-0 shadow-md'>
                                <div style={bgGreen} className="absolute flex justify-center items-center z-10 bottom-0 w-full h-5/6">

                                    {/* ENVELOPE TITLE CARD */}
                                    <div style={bgWhite} className='rounded-2xl gaegu-regular shadow-sm shadow-stone-600 absolute flex flex-col z-30 
                                    h-2/3 w-3/4 justify-center items-center'>

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
                                    <img src={smallTape} alt="" aria-hidden="true" 
                                    className='absolute z-30 top-10 right-0 translate-x-1/2 h-1/4 rotate-[-265deg] customShadow'></img>

                                    {/* WRENCH DECOR */}
                                    <img src={wrench} alt="decoraitve wrench drawing"
                                    className='h-3/4 absolute z-30 top-10 -left-7 rotate-[-5deg] drop-shadow-md'></img>

                                </div>

                                <div style={bgGreen} className="absolute left-0 bottom-0 w-10 h-full rounded-tr-2xl"></div>

                                <div style={bgGreen} className="absolute right-0 bottom-0 w-10 h-full rounded-tl-2xl"></div>
                            </div>

                            {/* INNER CARD PLACEMNT CONTAINER */}
                            <ProjectCard
                            index={2}
                            activeEnvelope={activeEnvelope}
                            isClosing={isClosing}
                            animationCompleted={animationCompleted}
                            onClose={handleCloseClick}
                            bgWhite={bgWhite}
                            bgBrown={bgBrown}
                            bgGreen={bgGreen}
                            />


                        </div>

                    </div>

                </div>


                {/* -----BUCKET PROJECT----- */}
                

                {/* BUCKET PROJECT CONTAINER */}
                <div className='col-start-3 col-end-11 row-start-8 row-end-11 flex justify-center'>

                    {/* ALIGNMENT CONTAINER FOR ENVELOPE AND BROWN BG DECOR */}
                    <div className='max-w-[22rem] w-full h-full relative'>

                        {/* BROWN BG CARD DECORATION */}
                        <div style={bgBrown} className='absolute w-full h-full right-5 top-5'></div>

                        {/* ENVELOPE */}
                        <div className={`bg-[#5a7728] w-full h-full shadow-inner envelope relative ${activeEnvelope === 3 ? 'active z-[100]' : ''} 
                                ${activeEnvelope !== null && activeEnvelope !== 3 ? 'hover-disabled lower-z' : ''}`} onClick={(e) => handleEnvelopeClick(3, e)}>
                            
                                {/* FRONT OF ENVELOPE */}
                                <div className='z-30 relative w-full h-full bottom-0 shadow-md'>
                                    <div style={bgGreen} className="absolute flex justify-center items-center z-10 bottom-0 w-full h-5/6">

                                        {/* ENVELOPE TITLE CARD */}
                                        <div style={bgWhite} className='rounded-2xl gaegu-regular shadow-sm shadow-stone-600 absolute flex flex-col z-30 
                                        h-2/3 w-3/4 justify-center items-center'>

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
                                        <img src={smallTape} alt="" aria-hidden="true"
                                        className='absolute z-30 top-10 left-0 -translate-x-1/2 h-1/4 rotate-[-265deg] customShadow'></img>

                                        {/* LIST DECOR */}
                                        <img src={list} alt="decorative list drawing"
                                        className='h-3/5 absolute z-30 top-20 -right-7 rotate-[5deg] drop-shadow-md'></img>

                                    </div>

                                    <div style={bgGreen} className="absolute left-0 bottom-0 w-10 h-full rounded-tr-2xl"></div>

                                    <div style={bgGreen} className="absolute right-0 bottom-0 w-10 h-full rounded-tl-2xl"></div>
                                </div>

                                {/* INNER CARD PLACEMNT CONTAINER */}
                                <ProjectCard
                                index={3}
                                activeEnvelope={activeEnvelope}
                                isClosing={isClosing}
                                animationCompleted={animationCompleted}
                                onClose={handleCloseClick}
                                bgWhite={bgWhite}
                                bgBrown={bgBrown}
                                bgGreen={bgGreen}
                                />

                            </div>

                        </div>

                    </div>

                </div>

            {/* SCREEN BLUR OVERLAY */}
            {/* <div className={`w-screen h-screen absolute top-0 left-0 ${isBlurred ? 'blur-active' : ''} ${reFocus ? 'reFocus-active' : ''}`}></div> */}
            
        </div>
    );
}

export default Portfolio;