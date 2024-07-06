

function Home() {
    return(

        <div className="flex h-full z-1">
            <div className="cutive-mono-regular flex flex-col h-full justify-center items-center w-1/2">
                <img className="h-1/4 mb-10" src="/assets/pic.jpg"></img>
                <h1 className="text-pink-900 text-2xl">Hey, I'm <span className="text-lime-600">Breeanna Nouskhajian</span></h1>
                <p className="text-pink-900 text-2xl">a full-stack web developer</p>
            </div>

            <div className="w-1/2 flex justify-center pt-20">
                <h1>MY STACK</h1>
            </div>
        </div>
        
    );
}

export default Home