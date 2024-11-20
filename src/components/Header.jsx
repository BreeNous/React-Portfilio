import NavTabs from './Navigation';

function Header({ onTabChange }) {
  return (
    <header className="gaegu-regular flex justify-between pr-10 Header h-32 z-10 text-xl">
      <img className='absolute z-30 h-40 rotate-[15deg] top-[-25px] customShadow' src='/assets/paper-clip.png' alt="Paper Clip" />
      <img className="absolute z-20 w-[33rem] h-48 -left-8 -top-10 rotate-[-7deg] drop-shadow-md" src='/assets/ripped-paper-white.png' alt="Ripped Paper" />
      <h1 className="z-20 pl-32 pt-9 h-28 w-[27rem] text-3xl text-slate-950 textHighlight gaegu-regular">Breeanna Nouskhajian</h1>
      
      {/* Pass onTabChange to NavTabs */}
      <NavTabs onTabChange={onTabChange} />
    </header>
  );
}

export default Header;
