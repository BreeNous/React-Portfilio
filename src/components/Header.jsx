import NavTabs from './Navigation';

function Header({ onTabChange }) {
  return (
    <header className="absolute top-0 w-full gaegu-regular flex justify-between h-32 z-20 text-xl">

      <div className='w-1/2 z-10 h-full'>
        <img src='/assets/paper-clip.png' alt="Paper Clip" className='
        // ALL absolute z-30 -left-7 customShadow
        // SMALLSCREENS hidden
        // MEDIUMSCREENS md:h-40 md:top-[-25px] md:-left-10 md:rotate-[15deg] md:block
        // LARGESCREENS lg:h-40 lg:top-[-25px] lg:rotate-[15deg] lg:block lg:-left-7
        '/>
        <h1 className="
        // SMALLSCREENS/ALL relative z-20 w-full pl-7 text-lg pt-8 h-28  text-slate-950 gaegu-regular
        // MEDIUMSCREENS md:pl-14 md:text-2xl md:pt-11
        // LARGESCREENS lg:pl-20 lg:text-3xl lg:pt-9
        ">Breeanna Nouskhajian</h1>
        <img src='/assets/ripped-paper-white.png' alt="Ripped Paper" className="
        // SMALLSCREENS/ALL w-[22rem] h-40 absolute z-10 -left-28 -top-10 rotate-[-7deg] drop-shadow-md
        // MEDIUMSCREENS md:w-[28rem] md:h-48
        // LARGESCREENS lg:w-[33rem] lg:h-48
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
