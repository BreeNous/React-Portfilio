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
                    <div className='flex bg-amber-50 w-64 h-44 z-30 -rotate-1 absolute right-12 bottom-20 shadow-sm justify-center items-center'>
                        <h1 className='text-2xl font-black'>Front-end</h1>
                    </div>
                    {/* ACCENT IMAGE */}
                    <div className='flex w-50 h-36 z-20 rotate-2 absolute left-28 bottom-28 shadow-sm'>
                        <img src='/assets/frontend-code.jpg' />
                    </div>
                    {/* SMALL STICKER */}
                    <div className='drop-shadow-sm flex bg-green-texture w-14 h-14 z-50 absolute bottom-52 left-40 rounded-full'></div>
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
                    <img className='flex w-52 z-50 -rotate-3 absolute right-2 top-36 drop-shadow-sm' src='/assets/files.png' />
                    {/* TITLE CARD */}
                    <div className='flex bg-amber-50 w-64 h-44 z-30 -rotate-1 absolute right-12 bottom-20 shadow-sm justify-center items-center'>
                        <h1 className='text-2xl font-black'>Back-end</h1>
                    </div>
                    {/* ACCENT IMAGE */}
                    <div className='flex w-50 h-36 z-20 rotate-2 absolute left-28 bottom-28 shadow-sm'>
                        <img src='/assets/backend-code.jpg' />
                    </div>
                    {/* SMALL STICKER */}
                    <div className='drop-shadow-sm flex bg-green-texture w-14 h-14 z-50 absolute bottom-52 left-40 rounded-full'></div>
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
                    <div className='flex bg-tools w-80 h-60 z-40 rotate-3 absolute top-16 left-24 shadow-sm' />
                    {/* ACCENT STICKER */}
                    <div className='flex w-32 h-44 z-50 -rotate-3 absolute right-6 top-44'>
                        <img className='drop-shadow-sm w-full h-full' src='/assets/tools.png' />
                    </div>
                    {/* TITLE CARD */}
                    <div className='flex bg-amber-50 w-64 h-44 z-30 -rotate-1 absolute right-12 bottom-20 shadow-sm justify-center items-center'>
                        <h1 className='text-2xl font-black'>Tools/etc</h1>
                    </div>
                    {/* ACCENT IMAGE */}
                    <div className='flex w-50 h-36 z-20 rotate-2 absolute left-28 bottom-28 shadow-sm'>
                        <img src='/assets/tools-code.png' />
                    </div>
                    {/* SMALL STICKER */}
                    <div className='drop-shadow-sm flex bg-green-texture w-14 h-14 z-50 absolute bottom-52 left-40 rounded-full'></div>
                    {/* LONG TAPE */}
                    <img className='flex w-52 h-20 z-50 rotate-[6deg] absolute bottom-9 right-16' src='assets/long-tape.png' />
                </>
            )
        }
    };

    const renderContent = () => tabContents[selectedTab]?.mainContent;

    return (
        <div className="flex h-full w-full">
            {/* LEFT SIDE */}
            <div className="w-1/2 h-full relative">
                {/* HEY BUBBLE */}
                <img src='/assets/thought.png' className='z-40 w-[18rem] absolute left-28 top-10 rotate-[-15deg] drop-shadow-sm' />
                <p className='cutive-mono-regular text-4xl font-black z-50 absolute left-[210px] top-[115px] rotate-[-15deg]'>Hey!</p>
                
                {/* TOP RIGHT TAPE */}
                <img className="rotate-[12deg] absolute z-40 w-34 h-14 right-44 top-6 drop-shadow-sm" src="/assets/small-tape.png" />
                {/* PICTURE OF ME */}
                <img className="flex z-30 absolute w-[25rem] rotate-2 right-14 top-8 drop-shadow-md" src="/assets/polaroid.png" />
                {/* LEFT TAPE */}
                <img className="flex absolute z-30 w-52 h-20 bottom-40 left-2 rotate-[93deg]" src="/assets/long-tape.png" />
                {/* WHITE HELLO SQUARE */}
                <div className="cutive-mono-regular -rotate-1 z-20 h-[23rem] w-[30rem] bottom-10 left-28 absolute bg-amber-50 shadow-sm">
                    <p className='text-xl font-black relative top-20 left-16'>It's nice <br/>to meet you</p>
                </div>
                {/* GREEN INTRODUCTORY SQUARE */}
                <div className="cutive-mono-regular z-30 flex h-[7.5rem] w-[29rem] absolute bottom-20 right-28 bg-green-texture shadow-sm">
                    <h2 className="text-start text-amber-50 text-2xl font-black px-5 py-5">I'm Breeanna Nouskhajian, <br/> a fullstack web developer</h2>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-1/2 h-full flex flex-col cutive-mono-regular font-black">
                {/* NAV BAR */}
                <div className="self-center items-center bg-green-texture mt-12 flex text-xl justify-center h-14 w-4/5 shadow-sm">
                    <BulletTabs onSelect={setSelectedTab} />
                </div>
                {/* MAIN CONTENT BELOW NAV */}
                <div className='w-full h-full flex'>
                    {/* LEFT SECTION */}
                    <div className='w-2/3 h-full relative'>
                        {renderContent()}
                    </div>
                    {/* RIGHT SECTION */}
                    <div className='w-1/3 h-full flex flex-col mt-16 items-center'>
                        <p className='flex text-2xl font-black w-full h-10'>{tabContents[selectedTab]?.title} Languages:</p>
                        <p className='flex w-full h-14 '>__________________</p>
                        <div className='w-full h-1/2 flex flex-col justify-center'>
                            <ul className='font-black text-xl'>
                                {tabContents[selectedTab]?.listItems.map((item, index) => (
                                    <li className='pb-2' key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

