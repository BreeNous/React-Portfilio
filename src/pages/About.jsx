
function About() {

    return(
        <div className="flex h-full w-full">

            {/* LEFT SIDE */}
            <div className="w-1/2 h-full relative">
                {/* TITLE */}
                <div className="bg-white-texture w-[22rem] absolute top-[7rem] left-[7rem] flex justify-center p-4 text-3xl rounded-md z-10 rotate-1 
                shadow-sm shadow-stone-400">
                    <h1 className="gaegu-regular text-black textHighlight">
                        Background
                    </h1>
                </div>
                {/* TOP TAPE */}
                <img src="/assets/small-tape.png" className="absolute w-[9rem] rotate-[48deg] right-[11rem] top-[5rem] z-10 customShadow"></img>
                {/* ARCH SHAPE */}
                <div className="bg-green-texture rounded-t-full absolute w-[22rem] h-[33.5rem] left-[13rem] top-[3.5rem] customShadow"></div>
                {/* BOTTOM TAPE */}
                <img src="/assets/long-tape.png" className="absolute w-[13rem] rotate-[10deg] left-[10.5rem] bottom-[0rem] z-10 customShadow"></img>
                {/* WHITE BOX */}
                <div className="absolute w-[23rem] h-[20rem] top-[13rem] right-[8rem] bg-white-texture shadow-md rounded-md -rotate-1 p-7">
                    <p className="gaegu-regular font-black text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, tempora neque minima deleniti nisi temporibus
                        maiores natus odio laborum, qui ipsum aliquid corporis delectus, porro reiciendis architecto modi cupiditate? Ex!
                    </p>
                </div>
                
                {/* BROWN STICKERS */}
                <div className="absolute w-[6rem] h-[21rem] left-[6rem] top-[13rem] shadow-sm rounded-md -rotate-1 flex flex-col items-center justify-between">

                    <div className="bg-brown-texture w-[4.5rem] h-[4.5rem] rounded-3xl flex justify-center items-center shadow-sm shadow-stone-500">
                        <img src="/assets/Ae.png" className="w-[3rem]"></img>
                    </div>

                    <div className="bg-brown-texture w-[4.5rem] h-[4.5rem] rounded-3xl flex justify-center items-center shadow-sm shadow-stone-500">
                        <img src="/assets/Ai.png" className="w-[3rem]"></img>
                    </div>

                    <div className="bg-brown-texture w-[4.5rem] h-[4.5rem] rounded-3xl flex justify-center items-center shadow-sm shadow-stone-500">
                        <img src="/assets/Pr.png" className="w-[3rem]"></img>
                    </div>

                    <div className="bg-brown-texture w-[4.5rem] h-[4.5rem] rounded-3xl flex justify-center items-center shadow-sm shadow-stone-500">
                        <img src="/assets/Ps.png" className="w-[3rem]"></img>
                    </div>

                </div>

                {/* BOOK STICKER */}
                <img src="/assets/brown-books.png" className="w-[10rem] absolute right-[8rem] bottom-[4rem] drop-shadow-md"></img>

            </div>
                
                

            {/* RIGHT SIDE */}
            <div className="w-1/2 relative">
            {/* GREEN HOLLOW ARCH */}
                <div className="fixed bg-green-texture right-0 top-0 w-1/2 h-full">
                    
                    {/* SHADOW FOR GREEN PART OF ARCH */}
                    <div className="fixed right-0 top-0 w-1/2 h-full bg-gradient-to-r from-black from-8% via-transparent via-15% to-amber-50 to-90% opacity-20"></div>

                </div>

                {/* HOLLOW PART CONTENT OF ARCH */}
                <div className="shadow-inner bg-image w-[23rem] h-[33.2rem] absolute right-[11.5rem] top-[12rem] rounded-t-full shadow-stone-500">
                    {/* ABOUT ME TITLE */}
                    <h1 className="flex items-center justify-center pt-1 relative top-[3.5rem] left-[5rem] font-black gaegu-regular text-3xl bg-brown-texture 
                    rounded-md h-[3.7rem] w-[13rem] rotate-[-2deg] z-[2] shadow-sm shadow-stone-400">
                        About me
                    </h1>
                    {/* BODY TEXT */}
                    <div className="relative top-[5rem] left-[-2.5rem] font-black gaegu-regular rotate-1 w-[23rem] h-[22.5rem] bg-brown-texture p-7 rounded-md shadow-sm 
                    shadow-stone-500 text-xl">

                        <p className="h-[17.5rem] overflow-scroll">
                            aliquam architecto iusto nostrum blanditiis consectetur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Culpa earum laborum unde nobis, incidunt molestias labore laboriosam nostrum voluptate vero, dolorem veniam perspiciatis 
                            sapiente est pariatur. Cum corrupti quos earum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aspernatur 
                            rem laudantium expedita, distinctio dolorem veniam maxime cum enim ipsum consequuntur numquam nam odio non amet harum neque facere. 
                            Explicabo!
                        </p>

                        <div className="absolute z-10 flex justify-center w-full left-0 bottom-[1.1rem]">
                            
                            <svg className="w-[1.2rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>

                        </div>

                    </div>
                    
                </div>
                {/* UPPER SMALL TAPE */}
                <img src="/assets/small-tape.png" className="customShadow absolute w-[8.7rem] z-10 left-[19rem] top-[2.5rem]"></img>
                {/* LOWER RIGHT SMALL TAPE */}
                <img src="/assets/small-tape.png" className="customShadow absolute w-[8.7rem] z-10 right-[7rem] bottom-[6.5rem] rotate-[95deg]"></img>
                {/* BIG QUESTION MARK */}
                <img src="/assets/white-question.png" className="absolute w-[6.5rem] drop-shadow-md z-10 right-[9.5rem] top-[17rem] rotate-[10deg]"></img>
                {/* SMALL QUESTION MARK */}
                <img src="/assets/white-question.png" className="absolute w-[5rem] drop-shadow-md z-10 left-[12rem] top-[6.5rem] rotate-[-20deg]"></img>
                

            </div>

            
        
        </div>
    );

}

export default About