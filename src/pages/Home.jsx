import React, { useState } from 'react';
import BulletTabs from '../../src/components/BulletTabs';


function Home() {
    const [selectedTab, setSelectedTab] = useState(1); // Default to 'Front-end'

    const tabContents = {
        1: {
            listItems: ['HTML5', 'React', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'Tailwind', 'Handlebars', 'Materialize'],
            mainContent: (
                <>
                    {/* FRONT-END CONTENT */}

                    {/* SMALL TAPE */}
                    <img className='flex w-34 h-14 z-50 -rotate-6 absolute top-10 left-16' src='assets/small-tape.png' />
                    {/* MAIN PICTURE */}
                    <div className='flex bg-front-end w-80 h-60 z-40 rotate-3 absolute top-16 left-24 shadow-sm' />
                    {/* ACCENT STICKER */}
                    <div className='flex w-32 h-44 z-50 -rotate-3 absolute right-6 top-44'>
                        <img className='drop-shadow-sm w-full h-full' src='/assets/light-bulb.png' />
                    </div>
                    {/* TITLE CARD */}
                    <div className='flex bg-white-texture w-64 h-44 z-30 -rotate-1 absolute right-12 bottom-20 shadow-sm justify-center items-center'>
                        <h1 className='homemade-apple-regular text-2xl font-black'>Front-end</h1>
                    </div>
                    {/* ACCENT IMAGE */}
                    <div className='flex w-50 h-36 z-20 rotate-2 absolute left-28 bottom-28 shadow-sm'>
                        <img src='/assets/frontend-code.jpg' />
                    </div>
                    {/* SMALL STICKER */}
                    <img src='/assets/wax-seal.png' className='drop-shadow-sm flex w-24 z-50 absolute bottom-44 left-[9rem]'></img>
                    {/* LONG TAPE */}
                    <img className='flex w-52 h-20 z-50 rotate-[6deg] absolute bottom-9 right-16' src='assets/long-tape.png' />
                </>
            )
        },
        2: {
            listItems: ['Node.js', 'Express', 'MongoDB', 'SQL', 'GraphQL', 'Python', 'Django', 'Flask', 'Ruby on Rails'],
            mainContent: (
                <>
                    {/* BACK-END CONTENT */}

                    {/* SMALL TAPE */}
                    <img className='flex w-34 h-14 z-50 -rotate-6 absolute top-10 left-16' src='assets/small-tape.png' />
                    {/* MAIN PICTURE */}
                    <div className='flex bg-back-end w-80 h-60 z-40 rotate-3 absolute top-16 left-24 shadow-sm' />
                    {/* ACCENT STICKER */}
                    <img className='flex w-44 z-50 rotate-[40deg] absolute right-4 top-36 drop-shadow-sm' src='/assets/files.png' />
                    {/* TITLE CARD */}
                    <div className='flex bg-white-texture w-64 h-44 z-30 -rotate-1 absolute right-12 bottom-20 shadow-sm justify-center items-center'>
                        <h1 className='homemade-apple-regular text-2xl font-black'>Back-end</h1>
                    </div>
                    {/* ACCENT IMAGE */}
                    <div className='flex w-50 h-36 z-20 rotate-2 absolute left-28 bottom-28 shadow-sm'>
                        <img src='/assets/backend-code.jpg' />
                    </div>
                    {/* SMALL STICKER */}
                    <img src='/assets/wax-seal.png' className='drop-shadow-sm flex w-24 z-50 absolute bottom-44 left-[9rem]'></img>
                    {/* LONG TAPE */}
                    <img className='flex w-52 h-20 z-50 rotate-[6deg] absolute bottom-9 right-16' src='assets/long-tape.png' />
                </>
            )
        },
        3: {
            listItems: ['Git', 'Docker', 'Webpack', 'Babel', 'ESLint', 'Prettier', 'Jenkins', 'CircleCI', 'AWS'],
            mainContent: (
                <>
                    {/* TOOLS/ETC CONTENT */}

                    {/* SMALL TAPE */}
                    <img className='flex w-34 h-14 z-50 -rotate-6 absolute top-10 left-16' src='assets/small-tape.png' />
                    {/* MAIN PICTURE */}
                    <div className='flex bg-tools w-80 h-60 z-40 rotate-3 absolute top-16 left-24 shadow-md' />
                    {/* ACCENT STICKER */}
                    <div className='flex w-38 h-44 z-50 rotate-[-32deg] absolute right-0 top-44'>
                        <img className='drop-shadow-sm w-full' src='/assets/hammer.png' />
                    </div>
                    {/* TITLE CARD */}
                    <div className='flex bg-white-texture w-64 h-44 z-30 -rotate-1 absolute right-12 bottom-20 shadow-sm justify-center items-center'>
                        <h1 className='homemade-apple-regular text-2xl font-black'>Tools/etc</h1>
                    </div>
                    {/* ACCENT IMAGE */}
                    <div className='flex w-50 h-36 z-20 rotate-2 absolute left-28 bottom-28 shadow-sm'>
                        <img src='/assets/tools-code.jpg' />
                    </div>
                    {/* SMALL STICKER */}
                    <img src='/assets/wax-seal.png' className='drop-shadow-sm flex w-24 z-50 absolute bottom-44 left-[9rem]'></img>
                    {/* LONG TAPE */}
                    <img className='flex w-52 h-20 z-50 rotate-[6deg] absolute bottom-9 right-16' src='assets/long-tape.png' />
                </>
            )
        }
    };

    const renderContent = () => tabContents[selectedTab]?.mainContent;

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
        <div className="flex h-full w-full">
            {/* LEFT SIDE */}
            <div className="w-1/2 h-full relative">
                {/* HEY BUBBLE */}
                <img src='/assets/thought.png' className='z-40 w-[18rem] absolute left-28 top-[5rem] rotate-[-15deg] drop-shadow-sm' />
                <p className='homemade-apple-regular text-[1.7rem] font-black z-50 absolute left-[11.3rem] top-[10.1rem] rotate-[-17deg]'>Hey there!</p>
                
                {/* TOP RIGHT TAPE */}
                <img className="rotate-[12deg] absolute z-40 w-34 h-14 right-44 top-6 drop-shadow-sm" src="/assets/small-tape.png" />
                {/* PICTURE OF ME */}
                <img className="flex z-30 absolute w-[25rem] rotate-2 right-14 top-8 drop-shadow-md" src="/assets/polaroid.png" />
                {/* LEFT TAPE */}
                <img className="flex absolute z-30 w-52 h-20 bottom-40 left-2 rotate-[93deg]" src="/assets/long-tape.png" />
                {/* WHITE HELLO SQUARE */}
                <div className="special-elite-regular -rotate-1 z-20 h-[23rem] w-[30rem] bottom-10 left-28 absolute bg-white-texture shadow-sm">
                    <p className='text-xl font-black relative top-[5.8rem] left-[5rem]'>It's nice <br/>to meet you, <br/>my name is</p>
                </div>
                {/* PICTURE NAME TAG */}
                <p className='absolute z-40 text-xl homemade-apple-regular right-[8.8rem] font-black bottom-[15.4rem] rotate-[2deg]'>Breeanna Nouskhajian</p>

                {/* GREEN INTRODUCTORY SQUARE */}
                
                <h2 className="z-30 flex justify-center items-center text-amber-50 font-black px-5 py-5 special-elite-regular text-3xl bg-green-texture shadow-sm h-[7.5rem] w-[29rem] absolute bottom-[5rem] right-28"> and i'm a full-stack web developer </h2>
                
            </div>


            {/* RIGHT SIDE */}
            <div className="w-1/2 h-full flex flex-col cutive-mono-regular font-black z-10">
                {/* NAV BAR */}
                <div className="self-center items-center bg-green-texture mt-12 flex text-xl justify-center h-14 w-4/5 shadow-sm special-elite-regular">
                    <BulletTabs onSelect={setSelectedTab} />
                </div>
                {/* MAIN CONTENT BELOW NAV */}
                <div className='w-full h-full flex'>
                    {/* LEFT SECTION */}
                    <div className='w-2/3 h-full relative'>
                        {renderContent()}
                    </div>
                    {/* RIGHT SECTION */}
                    <div className='w-1/3 h-full flex flex-col pt-16'>
                        <p className='special-elite-regular flex text-3xl font-black w-full h-10'>{tabContents[selectedTab]?.title} Languages:</p>
                        <p className='flex w-full h-14 '>__________________</p>
                        
                            <ul className='flex flex-col font-black text-xl items-start special-elite-regular'>
                                {tabContents[selectedTab]?.listItems.map((item, index) => (
                                    <li className='pb-2' key={index}>
                                        <span className={getHighlightClass()}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Home;
