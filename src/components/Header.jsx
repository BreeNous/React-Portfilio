import NavTabs from './Navigation';

function Header({ onTabChange }) {
  return (
    <header className="fixed top-0 w-full gaegu-regular flex justify-between h-32 z-40 text-xl">

      <img src='/assets/ripped-paper-white.png' alt="Ripped Paper" 
      className="z-10 rotate-[-7deg] drop-shadow-md h-[9rem] w-[20rem] absolute -top-10 -translate-x-[40%]
      sm:h-[10rem] sm:w-[25rem] sm:-top-12
      md:h-[11rem] md:w-[32rem] md:-top-14
      lg:h-[12rem] lg:w-[38rem] lg:-top-[4rem] lg:rotate-[-4deg]"/>

      <div className='w-1/2 z-10 h-2/3 flex relative items-center'>

        <img src='/assets/paper-clip.png' alt="Paper Clip" 
        className='absolute z-30 -left-7 customShadow
        // SM_SCREENS: hidden
        // MD_SCREENS: md:h-32 md:top-[-25px] md:rotate-[15deg] md:block md:-left-7'/>

        <h1 className="w-full absolute z-20 text-slate-950 gaegu-regular ml-6
        // XS_SCREENS: text-sm
        // SM_SCREENS: sm:text-lg
        // MD_SCREENS: md:text-xl md:ml-14
        // LG_SCREENS: lg:text-2xl">
          Breeanna Nouskhajian
        </h1>

      </div>
      
      <div className='w-1/2 h-full'>
        {/* Pass onTabChange to NavTabs */}
        <NavTabs onTabChange={onTabChange} />
      </div>

    </header>
  );
}

export default Header;
