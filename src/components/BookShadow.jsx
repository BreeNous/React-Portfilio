function BookShadow() {

    return(

        <div className="w-full min-h-screen flex relative bg-image z-[-1]">

            {/* // LEFT PAGE OF BOOK */}
                <div className="bg-gradient-to-l from-amber-50 from-5% to-45% ... opacity-60 relative w-full lg:w-1/2"></div>
            
            {/* RIGHT PAGE OF BOOK */}
                <div className="bg-gradient-to-l from-amber-50 from-0% ... opacity-60 relative lg:w-1/2 hidden lg:block"></div>
            

        </div>
    );
}

export default BookShadow