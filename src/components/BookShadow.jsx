function BookShadow() {

    return(

        <div className="w-full h-full flex z-[-1] absolute bg-image">

            {/* // LEFT PAGE OF BOOK */}
            <div className="flex w-1/2 opacity-75">
                <div className="bg-gradient-to-l from-amber-50 from-5% to-35% ... w-full"></div>
            </div>

            {/* RIGHT PAGE OF BOOK */}
            <div className="flex w-1/2 opacity-70">
                <div className="bg-gradient-to-l from-amber-50 from-0% ... w-full"></div>
            </div>

        </div>
    );
}

export default BookShadow