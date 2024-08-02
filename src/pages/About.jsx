
function About() {

    return(
        <div className="flex h-full w-full">

            {/* LEFT SIDE */}
            <div className="w-1/2 h-full absolute">
                {/* TITLE */}
                <div className="bg-white-texture w-[22rem] absolute top-[7rem] left-[7rem] flex justify-center p-4 text-2xl rounded-md z-10 rotate-1 shadow-sm">
                    <h1 className="homemade-apple-regular text-black">Background</h1>
                </div>
                {/* TOP TAPE */}
                <img src="/assets/small-tape.png" className="absolute w-[9rem] rotate-[48deg] right-[11rem] top-[5rem] z-10 drop-shadow-sm"></img>
                {/* ARCH PICTURE */}
                <img src="/assets/arch-asset.png" className="relative w-[22rem] h-[33.5rem] left-[13rem] top-[3.5rem] drop-shadow-sm"></img>
                {/* BOTTOM TAPE */}
                <img src="/assets/long-tape.png" className="absolute w-[13rem] left-[10.5rem] bottom-[14rem] rotate-[10deg] z-10 drop-shadow-sm"></img>
                {/* BROWN BOX */}
                <div className="absolute w-[23rem] h-[20rem] top-[13rem] right-[8rem] bg-brown-texture shadow-sm rounded-md -rotate-1 p-7">
                    <p className="special-elite-regular font-black text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, tempora neque minima deleniti nisi temporibus maiores natus odio laborum, qui ipsum aliquid corporis delectus, porro reiciendis architecto modi cupiditate? Ex!</p>
                </div>
                
                {/* GREEN STICKERS */}
                <div className="absolute w-[6rem] h-[21rem] left-[6rem] top-[13rem] shadow-sm rounded-md -rotate-1 flex flex-col items-center justify-between">

                    <div className="bg-green-texture w-[4.5rem] h-[4.5rem] rounded-3xl flex justify-center items-center drop-shadow-sm">
                        <img src="/assets/after-effects.png" className="w-10"></img>
                    </div>

                    <div className="bg-green-texture w-[4.5rem] h-[4.5rem] rounded-3xl flex justify-center items-center drop-shadow-sm">
                        <img src="/assets/illustrator.png" className="w-10"></img>
                    </div>

                    <div className="bg-green-texture w-[4.5rem] h-[4.5rem] rounded-3xl flex justify-center items-center drop-shadow-sm">
                        <img src="/assets/premire-pro.png" className="w-10"></img>
                    </div>

                    <div className="bg-green-texture w-[4.5rem] h-[4.5rem] rounded-3xl flex justify-center items-center drop-shadow-sm">
                        <img src="/assets/photoshop.png" className="w-10"></img>
                    </div>

                </div>

                {/* BOOK STICKER */}
                <img src="/assets/book.png" className="w-[10rem] absolute bottom-[17rem] right-[8rem] drop-shadow-sm"></img>

             </div>
                
                

            {/* RIGHT SIDE */}
            <div className="w-1/2 h-full">
            
            </div>
        
        </div>
    );

}

export default About