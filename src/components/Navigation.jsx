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
      // ALL_SCREENS: nav flex justify-evenly
      // SM_SCREENS: w-5/6 float-right h-24
      // MD_SCREENS: md:w-2/3 md:float-right md:h-28
      // LG_SCREENS: lg:w-1/2 lg:float-right lg:h-28
      // XL_SCREENS: xl:w-1/2 xl:float-right xl:h-full">
      {tabs.map(({ name, path }) => (
        <li key={path}>
          <Link to={path} className={currentPage === path ? 'nav-link active' : 'nav-link'}>
            <div className="
              // ALL_SCREENS: bg-brown-texture shadow-md shadow-stone-500 
              // SM_SCREENS: w-7 h-20
              // MD_SCREENS: md:w-9 md:h-24
              // LG_SCREENS: lg:w-9 lg:h-24
              // XL_SCREENS: xl:w-10 xl:h-28">
              <p className='
                // ALL_SCREENS: rotate-90 font-black
                // SM_SCREENS: text-base pl-3
                // MD_SCREENS: md:text-lg md:pl-4
                // LG_SCREENS: lg:text-lg lg:pl-5
                // XL_SCREENS: xl:text-xl xl:pl-5'>
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


