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
        // ALL flex h-full w-full z-10
        // SMALLSCREENS flex-col
        // MEDIUMSCREENS md:flex-col
        // LARGESCREENS lg:flex-row">

            {/* LEFT SIDE */}
            <div className="
            // ALL relative top-0 left-0
            // SMALLSCREENS w-full h-1/2
            // MEDIUMSCREENS md:w-full md:h-1/2
            // LARGESCREENS lg:w-1/2 lg:h-full">

                {/* HEY SQUARE */}
                <p className="
                // ALL flex justify-center items-center gaegu-regular z-30 rounded-md shadow-md font-black absolute bg-brown-texture
                // SMALLSCREENS top- left- h- w- text-
                // MEDIUMSCREENS md:top- md:left- md:h- md:w- md:text-
                // LARGESCREENS lg:top-56 lg:left-28 lg:h-28 lg:w-60 lg:text-3xl">
                    Hey there!
                </p>

                {/* TOP RIGHT TAPE */}
                <img src="/assets/small-tape.png" className="
                // ALL rotate-[12deg] absolute z-40 drop-shadow-sm
                // SMALLSCREENS w- h- right- top-
                // MEDIUMSCREENS md:w- md:h- md:right- md:top-
                // LARGESCREENS lg:w-34 lg:h-[3.3rem] lg:right-52 lg:top-36"/>

                {/* PICTURE OF ME */}
                <img src="/assets/polaroid.png" className="
                // ALL flex z-30 absolute rotate-2 drop-shadow-md
                // SMALLSCREENS w-  right- top-
                // MEDIUMSCREENS md:w- md:right- md:top-
                // LARGESCREENS lg:w-[25rem] lg:right-20 lg:top-36"/>

                {/* LEFT TAPE */}
                <img src="/assets/long-tape.png" className="
                // ALL flex absolute z-30 rotate-[93deg] drop-shadow-sm
                // SMALLSCREENS w-52 h-20 bottom-0 left-2
                // MEDIUMSCREENS md:w-52 md:h-20 md:bottom-0 md:left-2
                // LARGESCREENS lg:w-52 lg:h-20 lg:bottom-60 lg:left-2"/>

                {/* WHITE INTRODUCTORY SQUARE */}
                <div className="
                // ALL gaegu-regular -rotate-1 z-20 absolute bg-white-texture shadow-md rounded-md
                // SMALLSCREENS h-[23rem] w-[30rem] bottom-10 left-28
                // MEDIUMSCREENS md:h-[23rem] md:w-[30rem] md:bottom-10 md:left-28
                // LARGESCREENS lg:h-[23rem] lg:w-[30rem] lg:bottom-32 lg:left-28">
                    <p className='
                    // ALL font-black relative
                    // SMALLSCREENS text-2xl top-[3rem] left-[4.5rem]
                    // MEDIUMSCREENS md:text-2xl md:top-[3rem] md:left-[4.5rem]
                    // LARGESCREENS lg:text-2xl lg:top-[3rem] lg:left-[4rem]'>
                        It's nice to <br/> meet you, <br/>my name is <br/> Breeanna.
                    </p>
                </div>

                {/* GREEN DEV TITLE SQUARE */}
                <h2 className="
                // ALL z-30 flex justify-center items-center text-black font-black px-5 py-5 gaegu-regular text-3xl rounded-md bg-green-texture shadow-md absolute
                // SMALLSCREENS h-[7rem] w-[29rem] bottom-[5rem] right-[10.4rem]
                // MEDIUMSCREENS md:h-[7rem] md:w-[29rem] md:bottom-[5rem] md:right-[10.4rem]
                // LARGESCREENS lg:h-[7rem] lg:w-[29rem] lg:bottom-44 lg:right-28"> 
                    I'm a <span className='mx-3 underline'>full-stack</span> web developer.
                </h2>
                
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
