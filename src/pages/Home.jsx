import React, { useState, useEffect } from 'react';
import BulletTabs from '../../src/components/BulletTabs';


function Home() {
    const [selectedTab, setSelectedTab] = useState(1); // Default to 'Front-end'
    const [animatedItems, setAnimatedItems] = useState([]);

    const tabContents = {
        1: {
          listItems: ['HTML5', 'React', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'Tailwind', 'Handlebars', 'Materialize'],
          props: {
            mainImage: '/assets/front-end-drawing.png',
            mainImageAlt: 'Front-end drawing',
            accentSticker: '/assets/green-lightbulb.png',
            titleLabel: 'Front-end',
            accentImg: '/assets/frontend-code.jpg',
          },
        },
        2: {
          listItems: ['Node.js', 'Express', 'MongoDB', 'SQL', 'GraphQL', 'Python', 'Django', 'Flask', 'Ruby on Rails'],
          props: {
            mainImage: '/assets/back-end-drawing.png',
            mainImageAlt: 'Back-end drawing',
            accentSticker: '/assets/green-files.png',
            titleLabel: 'Back-end',
            accentImg: '/assets/backend-code.jpg',
          },
        },
        3: {
          listItems: ['Git', 'Docker', 'Webpack', 'Babel', 'ESLint', 'Prettier', 'Jenkins', 'CircleCI', 'AWS'],
          props: {
            mainImage: '/assets/tools-drawing.png',
            mainImageAlt: 'Tools drawing',
            accentSticker: '/assets/green-tool.png',
            titleLabel: 'Tools / etc',
            accentImg: '/assets/tools-code.jpg',
          },
        },
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

    const renderTabLayout = ({ mainImage, mainImageAlt, accentSticker, titleLabel, accentImg }) => (
        <>
            {/* container to keep tape element visually stuck to top of image  */}
            <div className='relative w-full flex justify-center'>

                {/* MAIN PICTURE */}
                <img src={mainImage} alt={mainImageAlt} className='w-[90%] absolute h-auto max-w-[19rem] z-40 rounded-md drop-shadow-md' />
                {/* SMALL TAPE */}
                <img src='assets/small-tape.png' className='absolute w-2/5 max-w-[7rem] h-auto -translate-x-3/4 -top-4 z-50 -rotate-6 drop-shadow-sm'/>
                {/* GREEN STICKER */}
                <div className='absolute w-[10vw] h-[10vw] rounded-full bg-green-texture z-50 left-0 drop-shadow-md'></div>

            </div>
      
            {/* ACCENT STICKER */}
            <img src={accentSticker} className='absolute z-50 drop-shadow-md w-2/5 bottom-1/4 max-w-[6rem] -right-2' />
      
            {/* container to keep tape element visually stuck to bottom of title card  */}
            <div className='relative w-full h-full flex justify-center items-end'>
                {/* TITLE CARD */}
                <div className='absolute right-0 bottom-0 z-30 bg-white-texture shadow-md -rotate-1 w-5/6 max-w-[15rem] h-2/5 flex items-center justify-center rounded-md'>
                    <h1 className='gaegu-regular text-base font-black'>{titleLabel}</h1>
                </div>
                {/* LONG TAPE */}
                <img className='absolute z-50 translate-y-2/5 w-2/3 max-w-[11rem] rotate-[6deg] drop-shadow-sm' src='assets/long-tape.png' />
            </div>
      
            {/* ACCENT IMAGE */}
            <div className='absolute top-0 h-full w-full items-center flex'>
                <img src={accentImg} className='w-5/6 h-1/3 object-cover absolute left-0 z-20 rotate-2 overflow-hidden rounded-md shadow-md' />
            </div>    
            
        </>
      );
      


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

    return (
        <div className="
        // ALL_SCREENS: flex h-full w-full
        // XS_SCREENS: flex-col 
        // SM_SCREENS: sm:flex-col sm:bg-red-300
        // MD_SCREENS: md:flex-col md:bg-blue-300
        // LG_SCREENS: lg:flex-row lg:bg-green-200
        // XL_SCREENS: xl:flex-row xl:bg-yellow-200">

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

            


            {/* RIGHT SIDE GRID */}
            <div className="
            // ALL_SCREENS: relative transition-all right-0 top-0 duration-300 ease-in-out grid grid-cols-12 grid-rows-12
            // XS_SCREENS: w-full max-h-[85vh] min-h-[85vh]
            // LG_SCREENS: lg:w-1/2 lg:h-full
            // XL_SCREENS: xl:w-1/2 xl:h-full">

                {/* NAV BAR CONTAINER */}
                <div className='relative self-center items-center bg-green-texture rounded-md flex justify-center h-4/5 w-full shadow-md gaegu-regular text-base
                col-start-2 col-end-12 row-start-1 top-3'>
                    <BulletTabs onSelect={setSelectedTab} />
                </div>

                {/* STATE SPECIFIC CONTENT CONTAINER */}
                <div className='bg-white col-start-2 col-end-8 row-start-3 row-end-10 relative top-5'>
                    {renderTabLayout(tabContents[selectedTab].props)}
                </div>


                {/* LANGUAGES LIST CONTAINER */}
                <div className='bg-amber-50 col-start-8 col-end-12 row-start-3 row-end-10 relative top-5'>

                    {/* <ul className="flex flex-col font-black text-2xl items-start gaegu-regular absolute bottom-[8.5rem]">
                        {tabContents[selectedTab]?.listItems.map((item, index) => (

                            <li key={index} className='pb-2 relative'>

                                <span className={`highlight ${animatedItems.includes(index) ? `highlight-active ${getHighlightClass()}` : ''}`}>
                                    {item}
                                </span>

                            </li>
                        ))}

                    </ul> */}

                </div>


                {/* NAV BAR */}
                {/* <div className="self-center items-center bg-green-texture rounded-md mt-12 flex text-xl justify-center h-full w-full shadow-md gaegu-regular"> */}
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
