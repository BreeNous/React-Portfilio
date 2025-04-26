import React, { useState, useEffect } from 'react';
import BulletTabs from '../../src/components/BulletTabs';


function Home() {
    const [selectedTab, setSelectedTab] = useState(1); // Default to 'Front-end'
    const [animatedItems, setAnimatedItems] = useState([]);

    const tabContents = {
        1: {
            listItems: ['HTML5', 'React', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'Tailwind', 'Handlebars', 'Materialize'],
            mainContent: (
                <>
                    {/* FRONT-END CONTENT */}

                    {/* SMALL TAPE */}
                    <img className='flex w-34 h-[3.3rem] z-50 -rotate-6 absolute top-10 left-[5.3rem] drop-shadow-sm' src='assets/small-tape.png' />
                    {/* MAIN PICTURE */}
                    <img src='/assets/front-end-drawing.png' className='flex w-[22rem] z-40 rounded-md absolute top-[1rem] left-[6rem] drop-shadow-md' />
                    {/* ACCENT STICKER */}
                    <img src='/assets/green-lightbulb.png' className='drop-shadow-md w-[7rem] z-50 -rotate-3 absolute right-[2rem] top-[14rem]'/>
                    {/* TITLE CARD */}
                    <div className='flex bg-white-texture w-64 h-44 z-30 -rotate-1 absolute right-12 bottom-20 rounded-md shadow-md justify-center items-center'>
                        <h1 className='gaegu-regular text-3xl font-black'>Front-end</h1>
                    </div>
                    {/* ACCENT IMAGE */}
                    <div className='flex w-50 h-36 z-20 rotate-2 absolute rounded-md overflow-hidden left-[6rem] bottom-[7.5rem] shadow-md'>
                        <img src='/assets/frontend-code.jpg' />
                    </div>
                    {/* SMALL GREEN STICKER */}
                    <div className='bg-green-texture drop-shadow-md rounded-full w-[4rem] h-[4rem] z-50 absolute bottom-[11.5rem] left-[10rem]'></div>
                    {/* LONG TAPE */}
                    <img className='flex w-52 h-20 z-50 rotate-[6deg] absolute bottom-9 right-16 drop-shadow-sm' src='assets/long-tape.png' />
                </>
            )
        },
        2: {
            listItems: ['Node.js', 'Express', 'MongoDB', 'SQL', 'GraphQL', 'Python', 'Django', 'Flask', 'Ruby on Rails'],
            mainContent: (
                <>
                    {/* BACK-END CONTENT */}

                    {/* SMALL TAPE */}
                    <img className='flex w-34 h-[3.3rem] z-50 -rotate-6 absolute top-10 left-[5.3rem] drop-shadow-sm' src='assets/small-tape.png' />
                    {/* MAIN PICTURE */}
                    <img src='/assets/back-end-drawing.png' className='flex w-[22rem] z-40 rounded-md absolute top-[1rem] left-[6rem] drop-shadow-md' />
                    {/* ACCENT STICKER */}
                    <img src='/assets/green-files.png' className='drop-shadow-md w-[8rem] z-50 absolute right-[2.5rem] rotate-[-10deg] top-[15.4rem]'/>
                    {/* TITLE CARD */}
                    <div className='flex bg-white-texture w-64 h-44 z-30 -rotate-1 absolute right-12 bottom-20 rounded-md shadow-md justify-center items-center'>
                        <h1 className='gaegu-regular text-3xl font-black'>Back-end</h1>
                    </div>
                    {/* ACCENT IMAGE */}
                    <div className='flex w-50 h-36 z-20 rotate-2 absolute rounded-md overflow-hidden left-[6rem] bottom-[7.5rem] shadow-md'>
                        <img src='/assets/backend-code.jpg' />
                    </div>
                    {/* SMALL GREEN STICKER */}
                    <div className='bg-green-texture drop-shadow-md rounded-full w-[4rem] h-[4rem] z-50 absolute bottom-[11.5rem] left-[10rem]'></div>
                    {/* LONG TAPE */}
                    <img className='flex w-52 h-20 z-50 rotate-[6deg] absolute bottom-9 right-16 drop-shadow-sm' src='assets/long-tape.png' />
                </>
            )
        },
        3: {
            listItems: ['Git', 'Docker', 'Webpack', 'Babel', 'ESLint', 'Prettier', 'Jenkins', 'CircleCI', 'AWS'],
            mainContent: (
                <>
                    {/* TOOLS/ETC CONTENT */}

                    {/* SMALL TAPE */}
                    <img className='flex w-34 h-[3.3rem] z-50 -rotate-6 absolute top-10 left-[5.3rem] drop-shadow-sm' src='assets/small-tape.png' />
                    {/* MAIN PICTURE */}
                    <img src='/assets/tools-drawing.png' className='flex w-[22rem] z-40 rounded-md absolute top-[1rem] left-[6rem] drop-shadow-md' />
                    {/* ACCENT STICKER */}
                    <img src='/assets/green-tool.png' className='drop-shadow-md w-[7rem] h-[10rem] z-50 absolute right-[1.5rem] rotate-[-20deg] top-[14rem]'/>
                    {/* TITLE CARD */}
                    <div className='flex bg-white-texture w-64 h-44 z-30 -rotate-1 absolute right-12 bottom-20 rounded-md shadow-md justify-center items-center'>
                        <h1 className='gaegu-regular text-3xl font-black'>Tools / etc</h1>
                    </div>
                    {/* ACCENT IMAGE */}
                    <div className='flex w-50 h-36 z-20 rotate-2 absolute rounded-md overflow-hidden left-[6rem] bottom-[7.5rem] shadow-md'>
                        <img src='/assets/tools-code.jpg' />
                    </div>
                    {/* SMALL GREEN STICKER */}
                    <div className='bg-green-texture drop-shadow-md rounded-full w-[4rem] h-[4rem] z-50 absolute bottom-[11.5rem] left-[10rem]'></div>
                    {/* LONG TAPE */}
                    <img className='flex w-52 h-20 z-50 rotate-[6deg] absolute bottom-9 right-16 drop-shadow-sm' src='assets/long-tape.png' />
                </>
            )
        }
    };

    // Animate items when the tab is changed
    useEffect(() => {
        if (tabContents[selectedTab]?.listItems) {
            const items = tabContents[selectedTab].listItems;
            setAnimatedItems([]); // Reset animation state
            items.forEach((_, i) => {
                setTimeout(() => {
                    setAnimatedItems((prev) => [...prev, i]); // Add items one by one
                }, i * 500); // 100ms delay per item
            });
        }
    }, [selectedTab]);


    const getHighlightClass = () => {
        switch (selectedTab) {
            case 1:
                return 'front-end-highlight';
            case 2:
                return 'back-end-highlight';
            case 3:
                return 'tools-highlight';
            default:
                return '';
        }
    };

    const renderContent = () => tabContents[selectedTab]?.mainContent;

    return (
        <div className="
        // ALL_SCREENS: flex h-full w-full
        // XS_SCREENS: flex-col
        // SM_SCREENS: sm:flex-col
        // MD_SCREENS: md:flex-col
        // LG_SCREENS: lg:flex-row
        // XL_SCREENS: xl:flex-row ">

            {/* LEFT SIDE GRID */}
            <div className="
            // ALL_SCREENS: relative transition-all left-0 top-0 duration-300 ease-in-out grid grid-cols-12 grid-rows-12
            // XS_SCREENS: w-full min-h-screen max-h-screen
            // LG_SCREENS: lg:w-1/2 lg:h-full
            // XL_SCREENS: xl:w-1/2 xl:h-full">

                {/* HEY SQUARE CONTAINER */}
                <div className='flex items-center gaegu-regular rounded-md shadow-md font-black relative bg-brown-texture z-20 w-full h-full text-xl justify-center pb-1 
                row-start-3 row-end-4 col-start-3 col-end-8
                sm:row-start-4 sm:row-end-5 sm:justify-normal sm:top-3
                md:row-end-6 md:col-end-9 md:h-2/3 md:col-start-4 md:text-2xl md:right-5
                lg:col-start-3 lg:col-end-8 lg:row-end-5 lg:h-full lg:right-3
                xl:col-start-3'>
                      
                    <p className='w-3/4 flex justify-center
                    md:w-4/5
                    lg:pl-[1.5vw] lg:w-3/4'>
                        Hey there!
                    </p>  
                       
                </div>
                
                {/* PIC OF ME CONTAINER */}
                <div className='z-20 flex justify-end h-full w-full relative items-start rotate-1 
                row-start-4 row-end-8 col-start-4 col-end-11 
                sm:row-start-3 sm:row-end-8 sm:col-start-6 sm:top-4
                md:row-end-8 md:top-7
                lg:col-start-5 lg:col-end-11 lg:h-5/6 lg:left-5
                xl:col-start-6 xl:col-end-11 xl:row-end-9'>

                    {/* container to keep tape element visually stuck to top of image */}
                    <div className='h-full relative '>

                        {/* PIC OF ME */}
                        <img src='/assets/polaroid.png' alt='polaroid' className='max-h-full w-auto object-contain drop-shadow-lg'></img> 

                        {/* SMALL TAPE DECORATION */}
                        <img src="/assets/small-tape.png" alt="Tape" className="
                        absolute -top-[7%] left-1/2 -translate-x-1/2 w-2/5 rotate-[8deg] z-30 drop-shadow-sm
                        "/>

                    </div>
                </div>

                {/* WHITE INTO SQUARE CONTAINER CONTAINER */}
                <div className='gaegu-regular -rotate-1 z-10 relative bg-white-texture shadow-md rounded-md flex h-full self-start
                row-start-7 row-end-11 col-start-3 col-end-9 
                sm:row-start-6 sm:col-end-8
                md:w-5/6
                lg:col-start-3 lg:col-end-9 lg:w-full lg:right-3
                '>

                    {/* LEFT TAPE */}
                    <img src="/assets/long-tape.png" className="
                    // ALL_SCREENS: absolute z-30 rotate-[97deg] drop-shadow-sm w-3/4 max-w-[140px] bottom-[6rem] -translate-x-1/2"/>

                    {/* GREETING TEXT */}
                    <p className='text-[clamp(.8rem,3.7vw,1rem)] font-black text-center flex leading-relaxed w-full h-1/3 px-10 self-center items-start 
                     sm:h-1/2 sm:text-lg sm:ml-[5vw] sm:w-full sm:pr-[40%] sm:pl-0 sm:items-center sm:self-start
                     md: md:px-14 md:mx-0  md:w-full
                     lg:pl-8 lg:pr-28 lg:text-base
                     xl:w-2/5 xl:px-0 xl:ml-[3.5vw] xl:text-lg xl:mt-3'>
                        It's nice to meet you, my name is Breeanna.
                    </p>
                        
                </div>

                {/* FULL STACK GREEN SQUARE CONTAINER */}
                <div className='bg-green-texture z-30 rounded-md shadow-md rotate-1 flex items-center text-center px-5 text-black font-black gaegu-regular text-[clamp(.8rem,3.7vw,1.1rem)]
                relative -top-4
                row-start-10 row-end-11 col-start-4 col-end-11
                sm:row-start-8 sm:row-end-10 sm:col-start-4 sm:top-4 sm:h-3/4 sm:self-end sm:text-xl
                md:col-end-10
                lg:col-start-4 lg:col-end-12 lg:right-4 lg:h-4/5 
                xl:col-start-4 xl:w-[95%] xl:top-8 xl:text-2xl'>
                    
                    <p className='w-full'>I'm a <span className='mx-[1%] underline'>full-stack</span> web developer.</p>
                        
                </div>
                
            </div>

            


            {/* RIGHT SIDE */}
            <div className="w-full md:w-full lg:w-1/2 h-1/2 md:h-1/2 lg:h-full relative font-black z-10">
                {/* NAV BAR */}
                {/* <div className="self-center items-center bg-green-texture rounded-md mt-12 flex text-xl justify-center h-14 w-4/5 shadow-md gaegu-regular"> */}
                    {/* <BulletTabs onSelect={setSelectedTab} /> */}
                {/* </div> */}
                {/* MAIN CONTENT BELOW NAV */}
                {/* <div className="w-full h-full flex"> */}
                    {/* LEFT SECTION */}
                    {/* <div className="w-2/3 h-full relative">{renderContent()}</div> */}
                    {/* RIGHT SECTION */}
                    {/* <div className="w-1/3 h-full flex flex-col pt-16"> */}
                        
                        

                        {/* <ul className="flex flex-col font-black text-2xl items-start gaegu-regular absolute bottom-[8.5rem]">
                            {tabContents[selectedTab]?.listItems.map((item, index) => (
                                <li
                                    key={index}
                                    className='pb-2 relative'
                                >
                                    <span
                                        className={`highlight ${animatedItems.includes(index) ? `highlight-active ${getHighlightClass()}` : ''}`}
                                    >
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div> */}
            </div>


        </div>
    );
}

export default Home;
