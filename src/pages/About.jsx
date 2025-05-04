
function About() {

    return(
        <div className=" flex-1 relative overflow-y-auto
        // ALL_SCREENS: flex h-full w-full
        // XS_SCREENS: flex-col 
        // SM_SCREENS: sm:flex-col
        // MD_SCREENS: md:flex-col
        // LG_SCREENS: lg:flex-row
        // XL_SCREENS: xl:flex-row">

            {/* LEFT SIDE GRID */}
            <div className="
            // ALL_SCREENS: relative transition-all left-0 top-0 duration-300 ease-in-out grid grid-cols-12 grid-rows-12
            // XS_SCREENS: w-full min-h-screen max-h-screen
            // LG_SCREENS: lg:w-1/2 lg:h-full
            // XL_SCREENS: xl:w-1/2 xl:h-full">

                
                {/* GREEN ARCH AND TAPE DECOR CONTAINER */}
                <div className="relative col-start-4 col-end-11 row-start-3 row-end-11
                sm:col-end-10
                md:flex md:justify-center md:items-center
                lg:row-start-4 lg:bottom-3">
                        
                            {/* ARCH SHAPE */}
                            <div className="relative bg-green-texture rounded-t-full w-full h-full customShadow
                            md:h-[95%] md:w-[90%]
                            lg:w-full lg:h-full">

                                {/* TOP TAPE */}
                                <img src="/assets/small-tape.png" className="absolute w-1/2 max-w-[7rem] rotate-[60deg] right-0 translate-x-1/4 top-[8vw] z-10 customShadow
                                md:right-4 md:top-[6vw]
                                lg:top-[4vw] lg:right-0
                                xl:top-[3vw] xl:right-2"></img>

                                {/* BOTTOM TAPE */}
                                <img src="/assets/long-tape.png" className="absolute w-2/3 max-w-[11rem] rotate-[10deg] -left-6 bottom-0 translate-y-1/2 z-10 customShadow"></img>

                            </div>
                        
                </div>

                {/* BACKGROUND TITLE CONTAINER */}
                <div className="relative col-start-2 col-end-9 row-start-4
                md:col-start-3 md:col-end-8
                lg:col-start-2">

                    <h1 className="absolute top-5 w-full h-full bg-white-texture text-lg flex justify-center items-center rounded-md z-10 rotate-1 shadow-sm shadow-stone-400 gaegu-regular text-black
                    sm:w-[90%] sm:right-0 sm:text-xl
                    md:w-full md:left-0 md:right-auto
                    lg:w-[90%] lg:right-0 lg:left-auto lg:top-8
                    xl:text-2xl">
                        Background
                    </h1>

                </div>

                {/* BACKGROUND INFO CONTAINER */}
                <div className="col-start-5 col-end-12 row-start-6 row-end-11
                sm:row-end-10
                md:col-end-11
                lg:col-end-12">

                    <div className="gaegu-regular font-black text-sm bg-white-texture shadow-md rounded-md -rotate-1 w-full h-[95%] flex justify-center p-[7vw] relative bottom-5
                    sm:w-[90%] sm:text-base sm:h-full sm:bottom-auto sm:p-5
                    md:w-full md:text-lg md:px-8
                    lg:w-[95%] lg:text-base
                    xl:text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, tempora neque minima deleniti nisi temporibus
                        maiores natus odio laborum, qui ipsum aliquid corporis delectus, porro reiciendis architecto modi cupiditate? Ex!

                        {/* BOOK STICKER */}
                        <img src="/assets/brown-books.png" className="w-1/2 max-w-[8rem] absolute -bottom-8 right-3 drop-shadow-md"></img>
                    </div>

                </div>

                {/* ADOBE ICON CONTAINER */}
                <div className="col-start-2 col-end-4 row-start-6 row-end-10
                md:col-start-3
                lg:col-start-2">

                    <div className="w-full h-full flex flex-col justify-between
                    sm:items-center">

                        <div className="bg-brown-texture w-12 aspect-square rounded-xl flex justify-center items-center shadow-sm shadow-stone-500">
                            <img src="/assets/Ae.png" className="w-2/3"></img>
                        </div>

                        <div className="bg-brown-texture w-12 aspect-square rounded-xl flex justify-center items-center shadow-sm shadow-stone-500">
                            <img src="/assets/Ai.png" className="w-2/3"></img>
                        </div>

                        <div className="bg-brown-texture w-12 aspect-square rounded-xl flex justify-center items-center shadow-sm shadow-stone-500">
                            <img src="/assets/Pr.png" className="w-2/3"></img>
                        </div>

                        <div className="bg-brown-texture w-12 aspect-square rounded-xl flex justify-center items-center shadow-sm shadow-stone-500">
                            <img src="/assets/Ps.png" className="w-2/3"></img>
                        </div>

                    </div>

                </div>

            </div>
                
                

            {/* RIGHT SIDE GRID */}
            
            <div className="bg-green-texture
            // ALL_SCREENS: relative transition-all right-0 top-0 duration-300 ease-in-out grid grid-cols-12 grid-rows-12
            // XS_SCREENS: w-full min-h-screen max-h-screen
            // LG_SCREENS: lg:w-1/2 lg:h-full
            // XL_SCREENS: xl:w-1/2 xl:h-full">

                {/* SHADOW FOR GREEN PART OF ARCH */}
                <div className="absolute right-0 top-0 w-full h-full bg-gradient-to-r from-black from-8% via-transparent via-15% to-amber-50 to-90% opacity-20 hidden
                lg:block"></div>

                {/* ARCH HOLLOW AND TAPE DECOR CONTAINER */}
                <div className="relative col-start-4 col-end-11 row-start-3 row-end-11
                md:flex md:justify-center md:items-center
                lg:row-start-4 lg:bottom-3
                xl:col-end-10">
                            
                    {/* ARCH SHAPE */}
                    <div className="relative bg-tan-texture shadow-inner rounded-t-full w-full h-full shadow-stone-500
                    md:h-[95%] md:w-[90%]
                    lg:w-full lg:h-full">

                        {/* TOP TAPE */}
                        <img src="/assets/small-tape.png" className="absolute w-1/2 max-w-[7rem] -rotate-[15deg] -translate-x-1/2 left-1/3 -translate-y-1/2 top-3 z-10 customShadow
                        lg:top-2"></img>

                        {/* BOTTOM TAPE */}
                        <img src="/assets/long-tape.png" className="absolute w-2/3 max-w-[11rem] rotate-[100deg] right-0 bottom-[15rem] translate-x-1/2 z-10 customShadow
                        sm:bottom-[13rem]"></img>

                    </div>
                            
                </div>

                    {/* ABOUT ME TITLE CONTAINER */}
                    <div className="relative col-start-5 col-end-10 row-start-4
                    sm:text-xl
                    md:col-start-6 md:col-end-9
                    lg:top-2
                    xl:text-2xl xl:right-6">

                        <h1 className="absolute top-5 w-full h-full bg-brown-texture flex justify-center items-center rounded-md z-10 -rotate-1 shadow-sm shadow-stone-400 gaegu-regular text-black">
                            About me
                        </h1>

                    </div>

                    {/* ABOUT ME INFO CONTAINER */}
                    <div className="relative col-start-3 col-end-10 row-start-6 row-end-11 z-10 flex
                    md:justify-end
                    lg:justify-normal
                    xl:col-end-9">

                        <div className="gaegu-regular font-black text-base bg-brown-texture shadow-md rounded-md rotate-1 w-full h-[95%] flex flex-col justify-between p-[7vw] pb-0 relative bottom-5
                        sm:p-[5vw] sm:pb-2 sm:text-lg
                        md:text-xl md:w-[95%] md:right-0
                        lg:text-lg lg:p-8 lg:pb-2 lg:w-full
                        xl:text-xl">
                            <p className="overflow-scroll">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, tempora neque minima deleniti nisi temporibus
                            maiores natus odio laborum, qui ipsum aliquid corporis delectus, porro reiciendis architecto modi cupiditate? Ex!
                            </p>

                            <svg className="w-4 py-3 self-center" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                        
                            {/* SMALL QUESTION MARK */}
                            <img src="/assets/white-question.png" className="absolute w-14 -top-16 left-[5vw] drop-shadow-md z-10 rotate-[-20deg]
                            md:left-[9vw]
                            lg:left-[5vw]"></img>

                            {/* BIG QUESTION MARK */}
                            <img src="/assets/white-question.png" className="absolute -bottom-8 -right-14 w-20 drop-shadow-md z-10 rotate-[10deg]"></img>
                            
                        </div>
                    
                    </div>

            </div>

        </div>
    );

}

export default About