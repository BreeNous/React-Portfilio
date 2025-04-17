import NavTabs from './Navigation';

function Header({ onTabChange }) {
  return (
    <header className="gaegu-regular flex justify-between pr-10 Header h-32 z-10 text-xl">
      <img src='/assets/paper-clip.png' alt="Paper Clip" className='
      // SMALLSCREENS/GENERAL absolute z-30 h-40 rotate-[15deg] top-[-25px] customShadow
      // MEDIUMSCREENS
      // LARGESCREENS
      '/>
      <img src='/assets/ripped-paper-white.png' alt="Ripped Paper" className="
      // SMALLSCREENS/GENERAL absolute z-20 -left-8 -top-10 rotate-[-7deg] drop-shadow-md
      // MEDIUMSCREENS md:w-[28rem] md:h-48
      // LARGESCREENS lg:w-[33rem] lg:h-48
      "/>
      <h1 className="
      // SMALLSCREENS/GENERAL z-20 pt-9 h-28 w-[27rem] text-slate-950 gaegu-regular
      // MEDIUMSCREENS md:pl-24 md:text-2xl
      // LARGESCREENS lg:pl-32 lg:text-3xl
      ">Breeanna Nouskhajian</h1>
      
      {/* Pass onTabChange to NavTabs */}
      <NavTabs onTabChange={onTabChange} />
    </header>
  );
}

export default Header;
