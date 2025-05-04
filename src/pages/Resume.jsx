import React, { useState } from 'react';
import ButtonMailto from '../components/ButtonMailTo.jsx';

function Resume() {;

    return (
        <div className=" flex-1 relative overflow-y-auto
        // ALL_SCREENS: flex h-full w-full
        // XS_SCREENS: flex-col 
        // SM_SCREENS: sm:flex-col
        // MD_SCREENS: md:flex-row
        // LG_SCREENS: lg:flex-row
        // XL_SCREENS: xl:flex-row">
            

            {/* LEFT SIDE */}
            <div className="transition-all left-0 top-0 duration-300 ease-in-out flex justify-center items-center w-full min-h-screen max-h-screen
            lg:w-1/2 lg:h-full
            xl:w-1/2 xl:h-full">

                {/* FULL-STACK RESUME */}
                <a href="./assets/BreeannaNouskhajianFullStackResume.pdf" target="_blank" 
                className='relative h-auto max-w-[27rem] w-5/6 rounded-md shadow-md resume-hover
                '>

                    <img src="./assets/BreeannaNouskhajianFullStackResume.png" 
                    className='w-full h-full'/>

                </a>

            </div>

            {/* LEFT SIDE GRID */}
            <div className="bg-green-texture
            // ALL_SCREENS: relative transition-all left-0 top-0 duration-300 ease-in-out grid grid-cols-12 grid-rows-12
            // XS_SCREENS: w-full min-h-screen max-h-screen
            // LG_SCREENS: lg:w-1/2 lg:h-full
            // XL_SCREENS: xl:w-1/2 xl:h-full">

                {/* UPPER BROWN TEXT BOX CONTAINER */}
                <div className='col-start-4 col-end-9 row-start-3 row-end-5 flex items-end'>

                    {/* UPPER BROWN TEXT BOX */}
                    <p className="flex justify-center p-3 text-center items-center bg-brown-texture w-full h-[25vw] max-h-full rounded-t-md shadow-md gaegu-regular text-sm
                    sm:text-lg
                    md:h-[10vw]
                    lg:text-xl">
                        If you like my work...
                    </p>

                </div>


                <div className='col-start-3 col-end-11 row-start-5 row-end-9
                z-10 bg-white-texture flex flex-col items-center justify-center rounded-md gaegu-regular shadow-md'>

                    <p className='flex justify-center pb-[1.5rem] text-lg
                    sm:text-xl
                    lg:text-2xl'>
                        Let's get in touch!
                    </p>

                    <hr className='w-3/4 pb-[1.5rem] border-black border-t-2'/>

                    
                    <div>

                        {/* EMAIL INFO */}
                        <div className='flex pb-[1rem] text-base
                        sm:text-lg
                        lg:text-xl'>
                            <svg className='w-[1rem]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                            <div className='pl-[1rem] hover:underline'>
                                <ButtonMailto label={'bree.nous@gmail.com'} mailto="mailto:bree.nous@gmail.com"></ButtonMailto>
                            </div>
                        </div>

                        {/* CELL INFO */}
                        <div className='flex text-base
                        sm:text-lg
                        lg:text-xl'>
                            <svg className='w-[1rem]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                            <p className='pl-[1rem]'>(850)832-2557</p>
                        </div>

                    </div>

                </div>

                <div className='col-start-5 col-end-10 row-start-9 row-end-11 flex start-top'>
                    {/* LOWER BROWN TEXT BOX */}
                    <p className="flex justify-center p-4 text-center items-center bg-brown-texture w-full h-[25vw] max-h-full rounded-b-md shadow-md gaegu-regular text-sm
                    sm:text-lg
                    md:h-[10vw]
                    lg:text-xl">
                        Can't wait to hear from you
                    </p>
                </div>

            </div>

                {/* GREEN BG AND SHADOW OVERLAY */}
                {/* <div className="w-1/2 h-full bg-green-texture absolute top-0 right-0">
                    <div className="fixed right-0 top-0 w-1/2 h-full bg-gradient-to-r from-black from-8% via-transparent via-15% to-amber-50 to-90% opacity-20"></div>
                </div> */}

                {/* UPPER BROWN TEXT BOX */}
                {/* <div className="relative right-[2.5rem] bg-brown-texture w-[22rem] h-[15rem] rounded-md flex flex-col items-center justify-evenly shadow-md">
                    <p className="absolute top-[2.5rem] left-[2.7rem] gaegu-regular text-2xl w-[20rem] h-auto rounded-md px-[1rem]">
                        If you like my work...
                    </p>
                </div> */}

                

                    {/* WHITE CONTACT BOX */}
                    {/* <div className='z-10 bg-white-texture w-4/5 h-4/5 rounded-md gaegu-regular text-3xl flex flex-col justify-center items-center shadow-md'>

                        <p className='flex justify-center pb-[1.5rem]'>Let's get in touch!</p>

                        <hr className='w-[24rem] pb-[1.5rem] border-black border-t-2'/>

                        <div className='flex flex-col items-center'> */}

                            {/* EMAIL INFO */}
                            {/* <div className='flex w-[16rem] pb-[1rem] text-2xl'>
                                <svg className='w-[1.5rem]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                                <div className='pl-[1.5rem] hover:underline'>
                                    <ButtonMailto label={'bnous.m@gmail.com'} mailto="mailto:bnous.m@gmail.com"></ButtonMailto>
                                </div>
                            </div> */}

                            {/* CELL INFO */}
                            {/* <div className='flex w-[16rem]'>
                                <svg className='w-[1.5rem]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                                <p className='pl-[1.5rem] text-2xl'>(850)832-2557</p>
                            </div>

                        </div>
                    </div>  */}
                

                {/* LOWER BROWN BOX */}
                {/* <div className="relative left-[2.5rem] bg-brown-texture w-[22rem] h-[15rem] rounded-md flex flex-col items-center justify-evenly shadow-md">
                    <p className="absolute bottom-[2.5rem] gaegu-regular text-2xl w-[20rem] h-auto rounded-md px-[1rem]">
                        Can't wait to hear from you
                    </p>
                </div> */}

                {/* TAPE */}
                {/* <img src="./assets/small-tape.png" className="z-20 absolute w-[9rem] rotate-[70deg] right-[34rem] bottom-[15rem] drop-shadow-sm"></img>
                <img src="./assets/long-tape.png" className="z-20 absolute w-[13.5rem] rotate-[100deg] right-[2rem] bottom-[28rem] drop-shadow-sm"></img> */}
        </div> 
        
    );
}

export default Resume;
