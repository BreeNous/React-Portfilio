
import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
    const currentPage = useLocation().pathname;

    return (


                <ul className="nav nav-tabs flex w-1/4 h-full justify-between">

                    <li>
                        <Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
                            <div className="bg-brown-texture shadow-md shadow-stone-500 w-10 h-5/6">
                                <p className='child-text rotate-90 pl-5 font-black'>Home</p>
                            </div>
                        </Link>
                    </li>

                    <li>
                        <Link to="/About" className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}>
                            <div className="bg-brown-texture shadow-md shadow-stone-500 w-10 h-5/6">
                                <p className='rotate-90 pl-5 font-black'>About</p>
                            </div>
                        </Link>
                    </li>

                    <li>
                        <Link to="/Portfolio" className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}>
                            <div className="bg-brown-texture shadow-md shadow-stone-500 w-10 h-5/6">
                                <p className='rotate-90 pl-5 font-black'>Works</p>
                            </div>
                        </Link>
                    </li>

                    <li>
                        <Link to="/Contact" className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>
                            <div className="bg-brown-texture shadow-md shadow-stone-500 w-10 h-5/6">
                                <p className='rotate-90 pl-5 font-black'>Contact</p>
                            </div>
                        </Link>
                    </li>

                    <li>
                        <Link to="/Resume" className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}>
                            <div  className="bg-brown-texture shadow-md shadow-stone-500 w-10 h-5/6">
                                <p className='rotate-90 pl-5 font-black'>Resume</p>
                            </div>
                        </Link>
                    </li>

                </ul>


    );
}

export default NavTabs;
    

