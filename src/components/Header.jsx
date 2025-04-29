import NavTabs from './Navigation';

function Header({ onTabChange }) {
  return (
    <header className="fixed top-0 w-full gaegu-regular flex justify-between h-32 z-20 text-xl">

      <div className='w-1/2 z-10 h-full'>
        <img src='/assets/paper-clip.png' alt="Paper Clip" className='
        // ALL_SCREENS: absolute z-30 -left-7 customShadow
        // SM_SCREENS: hidden
        // MD_SCREENS: md:h-40 md:top-[-25px] md:-left-10 md:rotate-[15deg] md:block
        // LG_SCREENS: lg:h-32 lg:top-[-25px] lg:rotate-[15deg] lg:block lg:-left-7
        // XL_SCREENS: xl:h-40 xl:top-[-25px] xl:rotate-[15deg] xl:block xl:-left-7'/>
        <h1 className="
        // ALL_SCREENS: relative z-20  text-slate-950 gaegu-regular
        // XS_SCREENS: w-full pl-4 text-sm pt-7 h-28 
        // SM_SCREENS: sm:w-full sm:pl-7 sm:text-lg sm:pt-8 sm:h-28 
        // MD_SCREENS: md:pl-14 md:text-2xl md:pt-11
        // LG_SCREENS: lg:pl-14 lg:text-2xl lg:pt-9
        // XL_SCREENS: xl:pl-20 xl:text-3xl xl:pt-9">
          Breeanna Nouskhajian
        </h1>

        <img src='/assets/ripped-paper-white.png' alt="Ripped Paper" className="
        // ALL_SCREENS: absolute z-10 rotate-[-7deg] drop-shadow-md
        // XS_SCREENS: w-[22rem] h-36 -left-36 -top-10
        // SM_SCREENS: sm:w-[22rem] sm:h-40 sm:-left-28 sm:-top-10
        // MD_SCREENS: md:w-[28rem] md:h-48
        // LG_SCREENS: lg:w-[29rem] lg:h-44
        // XL_SCREENS: xl:w-[33rem] xl:h-48"/>
        
      </div>
      
      <div className='w-1/2 h-full'>
        {/* Pass onTabChange to NavTabs */}
        <NavTabs onTabChange={onTabChange} />
      </div>

    </header>
  );
}

export default Header;
