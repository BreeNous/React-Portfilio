
function Contact() {
    
    return(
        
        <div className="flex flex-col h-full justify-center items-center">

            <h2 className="text-pink-900 mb-10">Let's chat!</h2>

            <form className="max-w-sm border w-3/4 h-1/2 border-lime-600 flex flex-col justify-center">

                <div className="mb-5 flex flex-col justify-center items-center">
                    <input type="email" id="email" className="bg-amber-50 border border-lime-600 text-sm rounded-lg w-3/4 p-2.5" placeholder="name@flowbite.com" required />
                </div>

                <div className="mb-5 justify-center items-center flex flex-col h-1/4">
                    <input type="contact message" id="password" className="bg-amber-50 border border-lime-600 text-pink-900 text-sm rounded-lg w-3/4 h-full p-2.5" placeholder="type message" required />
                </div>

                <div className="flex flex-col justify-center items-center">
                    <button type="submit" className="text-pink-900 bg-amber-50 border border-lime-600 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
                </div>
            </form>

        </div>
    );
}

export default Contact