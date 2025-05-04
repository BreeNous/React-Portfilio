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

                                                    <div className='w-full p-4 h-auto text-base gaegu-regular bg-brown-texture rounded-md shadow-sm shadow-[rgba(0,0,0,0.35)] space-y-4
                                                    sm:text-lg
                                                    md:p-5 md:w-full md:min-h-fit
                                                    xl:text-xl xl:p-6'>

                                                        <p className='text-lg font-black
                                                        sm:text-xl
                                                        lg:text-2xl'>
                                                            Vibrawood Guitairs
                                                        </p>

                                                        <p>
                                                            Visit the <a href='https://github.com/Wartech93/Vibrawood_Guitars'><span className='underline hover:text-white'>repository</span></a> for more.
                                                        </p>

                                                        <p>
                                                            Vibrawood Guitars is a fully functional e-commerce website built for a local guitar shop owner to sell custom instruments online. 
                                                            Collaborating with a small team, I focused on the front end using React, Tailwind CSS, and Flowbite, connecting dynamic front-end 
                                                            components to data provided by the Node.js/Express/MongoDB back end. The site allows users to browse by instrument category, create 
                                                            an account, add items to their cart, and securely purchase through Stripe integration — all within a responsive and intuitive interface.
                                                        </p>

                                                        <p>
                                                            I led the front-end logic, including routing, UI functionality, and rendering product data from the backend. I also proposed and 
                                                            implemented key features like category filtering on the homepage and a media page to promote the business with live Instagram 
                                                            integration and an embedded Google Maps location. While I didn't build the backend itself, I helped integrate the external APIs 
                                                            and ensured the front-end experience communicated seamlessly with our server-side setup. Built in just one week with daily Agile 
                                                            sprints, this project pushed me to think quickly, adapt often, and deliver a polished, production-ready user experience.
                                                        </p>

                                                        
                                                        
                                                    </div>
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

                                                    <div className='w-full p-4 h-auto text-base gaegu-regular bg-brown-texture rounded-md shadow-sm shadow-[rgba(0,0,0,0.35)] space-y-4
                                                    sm:text-lg
                                                    md:p-5 md:w-full md:min-h-fit
                                                    xl:text-xl xl:p-6'>

                                                        <span className='text-lg font-black
                                                        sm:text-xl
                                                        lg:text-2xl'>
                                                            Weather Dashboard
                                                        </span>

                                                        <p>
                                                            Visit the <a href='https://github.com/BreeNous/Weather-Dashboard'><span className='underline hover:text-white'>repository</span></a> for more!
                                                        </p>

                                                        <p>
                                                            Weather Dashboard is a dynamic front-end application that lets users search for the current and 5-day
                                                             forecast of any city using the OpenWeather API. Built with vanilla JavaScript, HTML, and CSS, the app 
                                                             features a responsive layout, persistent local storage, and live weather data fetched via RESTful API calls. 
                                                             Users can view real-time temperature, wind speed, humidity, and weather icons for any searched city, which is 
                                                             then added to a search history for quick future access.
                                                        </p>
                                                        
                                                        <p>
                                                            I focused on implementing clean, modular JavaScript to handle API requests, parse and display data, and manage user 
                                                            interactions. I also built a system that persists search history across sessions using localStorage, allowing the user 
                                                            experience to feel consistent and intuitive. This project deepened my skills in working with external APIs, handling 
                                                            asynchronous requests, and building polished, interactive UI components without relying on frameworks.
                                                        </p>
                                                        
                                                    </div>

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

                                                    <div className='w-full p-4 h-auto text-base gaegu-regular bg-brown-texture rounded-md shadow-sm shadow-[rgba(0,0,0,0.35)] space-y-4
                                                    sm:text-lg
                                                    md:p-5 md:w-full md:min-h-fit
                                                    xl:text-xl xl:p-6'>

                                                        <p className='text-lg font-black
                                                        sm:text-xl
                                                        lg:text-2xl'>
                                                            Jeans
                                                        </p>

                                                        <p>
                                                            Visit the <a href='https://github.com/frenzie24/jeans'><span className='underline hover:text-white'>repository</span></a> for more!
                                                        </p>

                                                        <p>
                                                            This app was built to support developers who may not have a design background by helping them find visually 
                                                            cohesive assets — specifically color palettes and royalty-free images — to use in web projects. Working as part of a team, 
                                                            we created an interactive front-end tool that allows users to search a color (via text or color picker) and instantly 
                                                            receive eight curated color themes powered by The Color API. On the same interface, users can search for high-quality images 
                                                            related to their project using the Pixabay API. Results can be copied and reused easily, making asset gathering fast and 
                                                            user-friendly.
                                                        </p>

                                                        <p>
                                                            My focus on this project was building front-end features and wiring together the UI logic with our API responses. 
                                                            I helped integrate the color and image APIs into functional, dynamic sections, ensuring smooth rendering and 
                                                            interactive behavior. I also worked on refining the user experience with modal-based instructions and structured 
                                                            layout using Tailwind CSS. The concept was driven by the idea that a unified color scheme and strong visual 
                                                            elements are essential — and often overlooked — parts of clean design. We built this tool to help bridge that gap.
                                                        </p>
                                                        
                                                        
                                                    </div>
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

                                                        <div className='w-full p-4 h-auto text-base gaegu-regular bg-brown-texture rounded-md shadow-sm shadow-[rgba(0,0,0,0.35)] space-y-4
                                                        sm:text-lg
                                                        md:p-5 md:w-full md:min-h-fit
                                                        xl:text-xl xl:p-6'>

                                                            <p className='text-lg font-black
                                                            sm:text-xl
                                                            lg:text-2xl'>
                                                                Bucket
                                                            </p>

                                                            <p>
                                                                Visit the <a href='https://github.com/BreeNous/Bucket'><span className='underline hover:text-white'>repository</span></a> for more!
                                                            </p>

                                                            <p>
                                                                Bucket is a virtual bucket list app built to inspire people to follow through on the goals that matter to them. I wanted it to feel
                                                                 more motivating than a list on paper — something interactive, personal, and always in your pocket. Users can create meaningful goals, 
                                                                 edit or complete them, and even upload images to capture their progress. It's a small push toward accountability — a way to remind 
                                                                 yourself to actually do the things you said you would. From password reset emails to image uploads, every feature was designed with 
                                                                 real-life use and privacy in mind.
                                                            </p>

                                                            <p>
                                                                Although I initially worked with a team to create Bucket1.0, I ended up soloing the project and fully refactored it — redesigning the data models, rewriting the API with 
                                                                GraphQL and Express, and rebuilding the front end to improve usability and structure. The app uses the MERN stack with JWT authentication, 
                                                                secure sessions, Multer for image uploads, and a protected file system to ensure user privacy. This build gave me hands-on experience with 
                                                                building real-world features from scratch, handling migrations, and structuring back-end logic for scalability and maintainability. While Buckets front 
                                                                end may not be perfect, throughout this project I learned how intense but utterly facinating the back-end world was and fell in love with it.
                                                            </p>
                                                            
                                                        </div>
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