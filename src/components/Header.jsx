import NavTabs from './Navigation';

function Header({ onTabChange }) {
  return (
    <header className="fixed top-0 w-full gaegu-regular flex justify-between h-32 z-40 text-xl">

      <div className='w-1/2 z-10 h-full'>
        <img src='/assets/paper-clip.png' alt="Paper Clip" className='
        // ALL_SCREENS: absolute z-30 -left-7 customShadow
        // SM_SCREENS: hidden
        // MD_SCREENS: md:h-32 md:top-[-25px] md:rotate-[15deg] md:block md:-left-7
        '/>
        <h1 className="
        // ALL_SCREENS: relative z-20  text-slate-950 gaegu-regular
        // XS_SCREENS: w-full pl-4 text-sm pt-7 h-28 
        // SM_SCREENS: sm:w-full sm:pl-7 sm:text-lg sm:pt-8 sm:h-28 
        // MD_SCREENS: md:pl-14 md:text-2xl md:pt-9
        ">
          Breeanna Nouskhajian
        </h1>

        <img src='/assets/ripped-paper-white.png' alt="Ripped Paper" className="
        // ALL_SCREENS: absolute z-10 rotate-[-7deg] drop-shadow-md
        // XS_SCREENS: w-[22rem] h-36 -left-36 -top-10
        // SM_SCREENS: sm:w-[22rem] sm:h-40 sm:-left-28 sm:-top-10
        // MD_SCREENS: md:w-[29rem] md:h-44
        "/>
        
      </div>
      
      <div className='w-1/2 h-full'>
        {/* Pass onTabChange to NavTabs */}
        <NavTabs onTabChange={onTabChange} />
      </div>

    </header>
  );
}

export default Header;
