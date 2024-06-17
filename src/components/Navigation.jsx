
import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
    const currentPage = useLocation().pathname;

    return (

        <ul className="nav nav-tabs flex">

            <li className="nav-item mr-5">
                <Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>Home</Link>
            </li>

            <li className="nav-item mr-5">
                <Link to="/About" className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}>About</Link>
            </li>

            <li className="nav-item mr-5">
                <Link to="/Portfolio" className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</Link>
            </li>

            <li className="nav-item mr-5">
            <Link to="/Contact" className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>Contact</Link>
            </li>

            <li className="nav-item">
            <Link to="/Resume" className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}>Resume</Link>
            </li>

        </ul>

    );
}

export default NavTabs;
    

