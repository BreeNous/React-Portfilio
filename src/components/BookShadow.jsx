function BookShadow() {
    return (
      <div className="fixed inset-0 w-full h-full z-0 bg-image flex">
        <div className="bg-gradient-to-l from-amber-50 from-5% to-45% opacity-60 w-full lg:w-1/2
        md:bg-gradient-to-l"></div>
        <div className="from-amber-50 from-0% opacity-60 lg:w-1/2 hidden lg:block
        md:bg-gradient-to-l"></div>
      </div>
    );
  }
  

export default BookShadow