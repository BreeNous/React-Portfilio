import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  const tabs = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/About' },
    { name: 'Portfolio', path: '/Portfolio' },
    { name: 'Resume', path: '/Resume' },
  ];

  return (
    <ul className="
      // ALL nav flex justify-evenly
      // SMALLSCREENS w-5/6 float-right h-24
      // MEDIUMSCREENS md:w-2/3 md:float-right md:h-28
      // LARGESCREENS lg:w-1/2 lg:float-right lg:h-full
    ">
      {tabs.map(({ name, path }) => (
        <li key={path}>
          <Link to={path} className={currentPage === path ? 'nav-link active' : 'nav-link'}>
            <div className="
              // ALL bg-brown-texture shadow-md shadow-stone-500 
              // SMALLSCREENS w-7 h-20
              // MEDIUMSCREENS md:w-9 md:h-24
              // LARGESCREENS lg:w-10 lg:h-28
            ">
              <p className='
                // ALL rotate-90 font-black
                // SMALLSCREENS text-base pl-3
                // MEDIUMSCREENS md:text-lg md:pl-4
                // LARGESCREENS lg:text-xl lg:pl-5
              '>
                {name}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavTabs;


