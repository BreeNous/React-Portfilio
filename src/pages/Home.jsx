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
        // ALL_SCREENS: flex h-full w-full z-10
        // SM_SCREENS: flex-col
        // MD_SCREENS: md:flex-col
        // LG_SCREENS: lg:flex-row
        // XL_SCREENS: xl:flex-row">

            {/* LEFT SIDE */}
            <div className="
            // ALL_SCREENS: relative top-0 left-0 transition-all duration-300 ease-in-out
            // SM_SCREENS: w-full h-1/2
            // MD_SCREENS: md:w-full md:h-1/2
            // LG_SCREENS: lg:w-1/2 lg:h-full
            // XL_SCREENS: xl:w-1/2 xl:h-full">

                {/* HEY SQUARE */}
                <p className="
                // ALL_SCREENS:_SCREENS: flex pl-12 items-center gaegu-regular z-30 rounded-md shadow-md font-black absolute bg-brown-texture
                // SM_SCREENS: top- left- text- 
                // MD_SCREENS: md:top- md:left- md:h- md:w- md:text-
                // LG_SCREENS: lg:w-1/2 lg:aspect-[4/1] lg:text-[1.8vw] lg:top-[25%] lg:right-[35%]
                // XL_SCREENS: xl:w-1/2 xl:aspect-[4/1] xl:text-[1.8vw] xl:top-[25%] xl:right-[35%]">
                    Hey there!
                </p>

                {/* TOP RIGHT TAPE */}
                <img src="/assets/small-tape.png" className="
                // ALL_SCREENS: rotate-[12deg] absolute z-40 drop-shadow-sm
                // SM_SCREENS: w- h- right- top-
                // MD_SCREENS: md:w- md:h- md:right- md:top-
                // LG_SCREENS: lg:w-auto lg:max-w-[15%] lg:h-auto lg:right-[23%] lg:top-[17.5%]
                // XL_SCREENS: xl:w-auto xl:max-w-[15%] xl:h-auto xl:right-[23%] xl:top-[17.5%]"/>

                {/* PICTURE OF ME */}
                <img src="/assets/polaroid.png" className="
                // ALL_SCREENS: flex z-30 absolute rotate-2 drop-shadow-md
                // SM_SCREENS: w-  right- top-
                // MD_SCREENS: md:w- md:right- md:top-
                // LG_SCREENS: lg:w-auto lg:max-w-[48%] lg:h-auto lg:max-h-[50%] lg:right-[8%] lg:top-[18%]
                // XL_SCREENS: xl:w-auto xl:max-w-[48%] xl:h-auto xl:max-h-[50%] xl:right-[8%] xl:top-[18%]"/>

                {/* LEFT TAPE */}
                <img src="/assets/long-tape.png" className="
                // ALL_SCREENS: flex absolute z-30 rotate-[93deg] drop-shadow-sm
                // SM_SCREENS:
                // MD_SCREENS:
                // LG_SCREENS: lg:w-auto lg:max-w-[25%] lg:h-auto lg:top-[60%] lg:right-[73%]
                // XL_SCREENS: xl:w-auto xl:max-w-[25%] xl:h-auto xl:top-[60%] xl:right-[73%]"/>

                {/* WHITE INTRODUCTORY SQUARE */}
                <div className="
                // ALL_SCREENS: gaegu-regular -rotate-1 z-20 absolute bg-white-texture shadow-md rounded-md
                // SM_SCREENS: h-
                // MD_SCREENS: md:
                // LG_SCREENS: lg:w-3/5 lg:aspect-[1.3/1] lg:top-[40%] lg:right-[25%]
                // XL_SCREENS: xl:w-3/5 xl:aspect-[1.3/1] xl:top-[40%] xl:right-[25%]">
                    <p className='
                    // ALL_SCREENS: font-black relative
                    // SM_SCREENS: text-2xl top-[3rem] left-[4.5rem]
                    // MD_SCREENS: md:text-2xl md:top-[3rem] md:left-[4.5rem]
                    // LG_SCREENS: lg:text-[1.5vw] lg:top-[3rem] lg:left-[4rem] lg:w-2/5
                    // XL_SCREENS: xl:text-[1.5vw] xl:top-[3rem] xl:left-[4rem] xl:w-2/5'>
                        It's nice to meet you, my name is <br/> Breeanna.
                    </p>

                    {/* GREEN DEV TITLE SQUARE */}
                    <div className='
                        // ALL_SCREENS: z-20 rounded-md bg-green-texture shadow-md absolute
                        // SM_SCREENS: 
                        // MD_SCREENS: 
                        // LG_SCREENS: lg:w-[103%] lg:aspect-[4/1] lg:top-[59%] lg:-right-[18%]
                        // XL_SCREENS: xl:w-[103%] xl:aspect-[4/1] xl:top-[59%] xl:-right-[18%]'>
                        <p className='
                            // ALL_SCREENS: text-black font-black gaegu-regular flex justify-center items-center h-full
                            // SM_SCREENS:
                            // MD_SCREENS:
                            // LG_SCREENS: lg:text-lg
                            // XL_SCREENS: xl:text-2xl'>
                            I'm a <span className='mx-[3%] underline'>full-stack</span> web developer.
                        </p>
                    </div>

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
