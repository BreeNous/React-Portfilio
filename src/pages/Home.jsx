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
        // XL_SCREENS: xl:flex-row">

            {/* LEFT SIDE */}
            <div className="
            // ALL_SCREENS: relative transition-all left-0 top-0 duration-300 ease-in-out
            // XS_SCREENS: w-full min-h-screen max-h-screen
            // SM_SCREENS: sm:w-full sm:min-h-screen sm:max-h-screen
            // MD_SCREENS: md:w-full md:min-h-screen md:max-h-screen
            // LG_SCREENS: lg:w-1/2 lg:h-full
            // XL_SCREENS: xl:w-1/2 xl:h-full">

                <div class="
                // ALL_SCREENS: grid w-full min-h-screen max-h-screen
                // XS_SCREENS: grid-cols-2 grid-rows-4
                // SM_SCREENS: sm:bg-slate-500 sm:grid-cols-2 sm:grid-rows-3
                // MD_SCREENS:
                // LG_SCREENS: lg:
                // XL_SCREENS: xl:
                 ">

                    {/* HEY SQUARE CONTAINER */}
                    <div class=" 
                    // ALL_SCREENS: bg-amber-50 relative
                    // XS_SCREENS: col-start-1 col-end-3
                    // SM_SCREENS: sm:col-start-1 sm:col-end-2
                    // MD_SCREENS: md:
                    // LG_SCREENS: lg:
                    // XL_SCREENS: xl:">
                        {/* HEY SQUARE */}
                        <div class="
                        // ALL_SCREENS:
                        // XS_SCREENS:
                        // SM_SCREENS: sm:
                        // MD_SCREENS: md:
                        // LG_SCREENS: lg:
                        // XL_SCREENS: xl:
                        absolute w-full h-full z-10 bg-yellow-800"></div>
                    </div>

                    {/* PIC OF ME CONTAINER */}
                    <div class="
                    // ALL_SCREENS: relative flex items-center justify-center
                    // XS_SCREENS: col-start-1 col-end-3 row-start-2 row-end-4
                    // SM_SCREENS: sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-3
                    // MD_SCREENS: md:
                    // LG_SCREENS: lg:
                    // XL_SCREENS: xl:">
                        {/* PIC OF ME */}
                        <img src="/assets/polaroid.png" alt="polaroid" className='
                        // ALL_SCREENS:
                        // XS_SCREENS:
                        // SM_SCREENS: sm:
                        // MD_SCREENS: md:
                        // LG_SCREENS: lg:
                        // XL_SCREENS: xl:
                        z-20 absolute h-auto max-h-[90%] max-w-auto top-[] 
                        ' />
                        
                    </div>

                    {/* WHITE SQUARE CONTAINER */}
                    <div class="
                    // ALL_SCREENS: bg-amber-50 relative
                    // XS_SCREENS: col-start-1 col-end-2 row-start-2 row-end-4
                    // SM_SCREENS: sm:col-start-1 sm:col-end-2 sm:row-start-2 sm:row-end-4
                    // MD_SCREENS: md:
                    // LG_SCREENS: lg:
                    // XL_SCREENS: xl:">
                        {/* WHITE SQUARE */}
                        <div class="
                        // ALL_SCREENS:
                        // XS_SCREENS:
                        // SM_SCREENS: sm:
                        // MD_SCREENS: md:
                        // LG_SCREENS: lg:
                        // XL_SCREENS: xl:
                        absolute h-full w-full z-10  bg-slate-300"></div>
                    </div>

                    {/* FULL STACK SQUARE CONTAINER */}
                    <div class="
                    // ALL_SCREENS: bg-amber-50 relative 
                    // XS_SCREENS: col-start-2 col-end-3 row-start-4 row-end-5
                    // SM_SCREENS: sm:col-start-2 sm:col-end-3 sm:row-start-3 sm:row-end-4
                    // MD_SCREENS: md:
                    // LG_SCREENS: lg:
                    // XL_SCREENS: xl:">
                        {/* FULL STACK SQUARE */}
                        <div class="
                        // ALL_SCREENS:
                        // XS_SCREENS:
                        // SM_SCREENS: sm:
                        // MD_SCREENS: md:
                        // LG_SCREENS: lg:
                        // XL_SCREENS: xl:
                        absolute top-0 left-0 w-full bottom-4 h-full z-20  bg-green-800"></div>
                    </div>

                    
                </div>


                {/* HEY SQUARE */}
                {/* <p className="
                // ALL_SCREENS:_SCREENS: flex items-center gaegu-regular rounded-md shadow-md font-black absolute bg-brown-texture z-30
                // SM_SCREENS: w-[60vw] h-[10%] text-[5vw] top-[18.5vh] right-[27vw] justify-center pb-1
                // MD_SCREENS: md:w-[45vw] md:h-[10%] md:text-[4vw] md:top-[22vh] md:right-[40vw] md:justify-normal md:pl-20 md:pb-0
                // LG_SCREENS: lg:w-[20vw] lg:h-[8%] lg:text-[1.8vw] lg:top-[29vh] lg:right-[23vw] lg:pl-11 lg:justify-normal
                // XL_SCREENS: xl:w-[25vw] xl:h-[8%] xl:text-[1.8vw] xl:top-[28%] xl:right-[34%] xl:pl-16 xl:justify-normal ">
                    Hey there!
                </p> */}
                
                {/* PIC OF ME */}
                {/* <div style={{ backgroundImage: "url('/assets/polaroid.png')" }} className="
                // ALL_SCREENS: absolute aspect-[3/4] bg-cover bg-center bg-no-repeat z-30 rotate-2 drop-shadow-md
                // SM_SCREENS: h-[37%] max-h-[37vh] bottom-[37%] right-[15%]
                // MD_SCREENS: md:h-[45%] md:max-h-[45vh] md:bottom-[33%] md:right-[15%]
                // LG_SCREENS: lg:w-[40%] lg:bottom-[39%] lg:right-[18%] lg:max-h-[19.5rem] lg:h-auto
                // XL_SCREENS: xl:w-[33%] xl:min-w-[14rem] xl:bottom-[39%] xl:right-[17%] xl:max-w-[15rem] xl:h-auto">

                    {/* SMALL TAPE DECORATION */}
                    {/* <img src="/assets/small-tape.png" alt="Tape" className="
                    // ALL_SCREENS: drop-shadow-sm absolute -translate-x-1/2 z-10 
                    // SM_SCREENS: w-[22vw] right-[-30%] rotate-[50deg] top-3
                    // MD_SCREENS: md:w-[14vw] md:right-[5%] md:rotate-[8deg] md:-top-2
                    // LG_SCREENS: lg:w-[7.5vw] lg:left-1/2 lg:rotate-[8deg] lg:-top-2
                    // XL_SCREENS: xl:w-[7.5vw] xl:left-1/2 xl:rotate-[8deg] xl:-top-2"/>

                </div> */}

                {/* WHITE INTRODUCTORY SQUARE CONTAINER */}
                {/* <div className="
                // ALL_SCREENS: gaegu-regular -rotate-1 z-20 relative bg-white-texture shadow-md rounded-md flex
                // SM_SCREENS: w-[60vw] h-[35vh] top-[40vh] left-[13vw]
                // MD_SCREENS: md:w-[60vw] md:h-[35vh] md:top-[37vh] md:left-[13vw]
                // LG_SCREENS: lg:w-[30vw] lg:h-[40vh] lg:top-[40vh] lg:left-[7vw]
                // XL_SCREENS: xl:w-[30vw] xl:h-[40vh]] xl:top-[40vh] xl:left-[8vw]">

                    {/* LEFT TAPE */}
                    {/* <img src="/assets/long-tape.png" className="
                    // ALL_SCREENS: absolute z-30 rotate-[97deg] drop-shadow-sm
                    // SM_SCREENS: w-[58%] bottom-[8.5rem] -left-[29%]
                    // MD_SCREENS: md:w-[40%] md:bottom-[5.5rem] md:-left-[20%]
                    // LG_SCREENS: lg:w-[40%] lg:bottom-[6.5rem] lg:-left-[20%]
                    // XL_SCREENS: xl:w-[40%] xl:bottom-[6.5rem] xl:-left-[20%]"/> */}

                    {/* GREETING TEXT */}
                    {/* <div className='w-full h-full flex justify-center items-center'>
                        <p className='
                        // ALL_SCREENS: font-black absolute text-center flex
                       
                        // MD_SCREENS: md:text-[3vh] md:top-auto md:left-auto md:w-[45%] md:h-auto
                        // LG_SCREENS: lg:text-[1.5vw] lg:top-[2.2rem] lg:ml-0 lg:right-auto lg:left-[4vw] lg:w-[27%] lg:h-[40%] lg:block
                        // XL_SCREENS: xl:text-[1.4vw] xl:top-[6vh] xl:left-[4vw] xl:right-auto xl:w-[35%] xl:h-[35%] xl:block'>
                            It's nice to meet you, my name is <br className='hidden'/> Breeanna.
                        </p>
                    </div> */}

                    {/* // SM_SCREENS: text-[3.5vw] bottom-[10%] left-[12vw] w-[60%] h-[20%] */}

                    {/* GREEN DEV TITLE SQUARE */}
                    {/* <div className='
                        // ALL_SCREENS: z-20 rounded-md bg-green-texture shadow-md absolute rotate-1
                        // SM_SCREENS: w-[63vw] h-[30%] top-[33vh] -right-[17%]
                        // MD_SCREENS: 
                        // LG_SCREENS: lg:w-[31vw] lg:h-[32%] lg:top-[23vh] lg:-right-[16%]
                        // XL_SCREENS: xl:w-[101%] xl:h-[32%]] xl:top-[57%] xl:-right-[13%]'>
                        <p className='
                            // ALL_SCREENS: text-black font-black gaegu-regular flex justify-center items-center h-full
                            // SM_SCREENS: text-[4vw]
                            // MD_SCREENS:
                            // LG_SCREENS: lg:text-[1.8vw]
                            // XL_SCREENS: xl:text-[1.8vw]'>
                            I'm a <span className='mx-[3%] underline'>full-stack</span> web developer.
                        </p>
                    </div>

                </div> */}

                
                
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
