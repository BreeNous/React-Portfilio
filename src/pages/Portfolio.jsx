
function Portfolio() {
    
    const cardHover = function() {
        onmouseover
    
        return cardHover
    }

    return(
        
        // MAIN PAGE
        <div className="flex h-full w-full">

            {/* LEFT SIDE */}
            {/* coloumn for left side */}
            <div className="flex flex-col h-full w-1/2 items-center justify-evenly relative">
            <div id="card">
            {cardHover()}
                {/* inside / back of envelope */}
                    <div className="relative z-10 bg-stone-200 w-96 h-56 items-end">
                        {/* front pieces of envelope */}
                        <div>
                            <div className="absolute z-30 left-0 bg-white-texture w-10 h-56 rounded-tr-2xl"></div>
                            <div className="absolute z-30 bottom-0 bg-white-texture w-full h-48"></div>
                            <div className="absolute z-30 right-0 bg-white-texture w-10 h-56 rounded-tl-2xl"></div>
                        </div>
                        {/* inner card */}
                        <div className="flex justify-center">
                            <div className="absolute z-20 bottom-4 h-full w-72 bg-green-texture rounded" id="innerCard"></div>
                        </div>
                    </div>
                </div>
                <div className="bg-pink-50 w-96 h-56"></div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col h-full w-1/2 items-center justify-evenly">
                <div className="bg-pink-50 w-96 h-56"></div>
                <div className="bg-pink-50 w-96 h-56"></div>
            </div>
        </div>
        
    );
}

export default Portfolio