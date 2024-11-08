
function About() {

    return(
        <div className="flex h-full w-full">

            {/* LEFT SIDE */}
            <div className="w-1/2 h-full relative">
                {/* TITLE */}
                <div className="bg-white-texture w-[22rem] absolute top-[7rem] left-[7rem] flex justify-center p-4 text-2xl rounded-md z-10 rotate-1 shadow-sm shadow-stone-400">
                    <h1 className="homemade-apple-regular text-black textHighlight">Background</h1>
                </div>
                {/* TOP TAPE */}
                <img src="/assets/small-tape.png" className="absolute w-[9rem] rotate-[48deg] right-[11rem] top-[5rem] z-10 customShadow"></img>
                {/* ARCH SHAPE */}
                <div className="bg-green-texture rounded-t-full absolute w-[22rem] h-[33.5rem] left-[13rem] top-[3.5rem] customShadow"></div>
                {/* BOTTOM TAPE */}
                <img src="/assets/long-tape.png" className="absolute w-[13rem] rotate-[10deg] left-[10.5rem] bottom-[0rem] z-10 customShadow"></img>
                {/* WHITE BOX */}
                <div className="absolute w-[23rem] h-[20rem] top-[13rem] right-[8rem] bg-white-texture shadow-md rounded-md -rotate-1 p-7">
                    <p className="special-elite-regular font-black text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, tempora neque minima deleniti nisi temporibus maiores natus odio laborum, qui ipsum aliquid corporis delectus, porro reiciendis architecto modi cupiditate? Ex!</p>
                </div>
                
                {/* BROWN STICKERS */}
                <div className="absolute w-[6rem] h-[21rem] left-[6rem] top-[13rem] shadow-sm rounded-md -rotate-1 flex flex-col items-center justify-between">

                    <div className="bg-brown-texture w-[4.5rem] h-[4.5rem] rounded-3xl flex justify-center items-center shadow-sm shadow-stone-500">
                        <img src="/assets/after-effects.png" className="w-10"></img>
                    </div>

                    <div className="bg-brown-texture w-[4.5rem] h-[4.5rem] rounded-3xl flex justify-center items-center shadow-sm shadow-stone-500">
                        <img src="/assets/illustrator.png" className="w-10"></img>
                    </div>

                    <div className="bg-brown-texture w-[4.5rem] h-[4.5rem] rounded-3xl flex justify-center items-center shadow-sm shadow-stone-500">
                        <img src="/assets/premire-pro.png" className="w-10"></img>
                    </div>

                    <div className="bg-brown-texture w-[4.5rem] h-[4.5rem] rounded-3xl flex justify-center items-center shadow-sm shadow-stone-500">
                        <img src="/assets/photoshop.png" className="w-10"></img>
                    </div>

                </div>

                {/* BOOK STICKER */}
                <img src="/assets/book.png" className="w-[10rem] absolute right-[8rem] bottom-[4rem] customShadow"></img>

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
                    <h1 className="flex items-center justify-center pt-1 relative top-[3.5rem] left-[5rem] font-black homemade-apple-regular text-2xl bg-brown-texture rounded-md h-[3.7rem] w-[13rem] rotate-[-2deg] z-[2] shadow-sm shadow-stone-400">About me</h1>
                    {/* BODY TEXT */}
                    <p className="relative top-[5.5rem] left-[-5rem] font-black special-elite-regular rotate-1 w-[25rem] h-[22rem] bg-brown-texture p-7 rounded-md shadow-sm shadow-stone-500 text-lg">aliquam architecto iusto nostrum blanditiis consectetur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa earum laborum unde nobis, incidunt molestias labore laboriosam nostrum voluptate vero, dolorem veniam perspiciatis sapiente est pariatur. Cum corrupti quos earum?</p>
                </div>
                {/* UPPER SMALL TAPE */}
                <img src="/assets/small-tape.png" className="customShadow absolute w-[8.7rem] z-10 left-[19rem] top-[2.5rem]"></img>
                {/* LOWER RIGHT SMALL TAPE */}
                <img src="/assets/small-tape.png" className="customShadow absolute w-[8.7rem] z-10 right-[10rem] bottom-[13.5rem] rotate-[95deg]"></img>
                

            </div>

            
        
        </div>
    );

}

export default About