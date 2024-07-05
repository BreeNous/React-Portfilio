
import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
    const currentPage = useLocation().pathname;

    return (


                <ul className="nav nav-tabs flex w-1/4 h-full justify-between">

                    <li>
                        <Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
                            <div className="bg-slate-300 w-10 h-full">
                                <p className='rotate-90 pl-5'>Home</p>
                            </div>
                        </Link>
                    </li>

                    <li>
                        <Link to="/About" className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}>
                            <div className="bg-slate-300 w-10 h-full">
                                <p className='rotate-90 pl-5'>About</p>
                            </div>
                        </Link>
                    </li>

                    <li>
                        <Link to="/Portfolio" className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}>
                            <div className="bg-slate-300 w-10 h-full">
                                <p className='rotate-90 pl-5'>Portfolio</p>
                            </div>
                        </Link>
                    </li>

                    <li>
                        <Link to="/Contact" className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>
                            <div className="bg-slate-300 w-10 h-full">
                                <p className='rotate-90 pl-5'>Contact</p>
                            </div>
                        </Link>
                    </li>

                    <li>
                        <Link to="/Resume" className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}>
                            <div  className="bg-slate-300 w-10 h-full">
                                <p className='rotate-90 pl-5'>Resume</p>
                            </div>
                        </Link>
                    </li>

                </ul>


    );
}

export default NavTabs;
    

