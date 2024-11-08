import NavTabs from './Navigation';

function Header({ onTabChange }) {
  return (
    <header className="special-elite-regular cutive-mono-regular flex justify-between pr-10 Header h-32 z-10">
      <img className='absolute z-30 h-40 rotate-[15deg] top-[-25px] customShadow' src='/assets/paper-clip.png' alt="Paper Clip" />
      <img className="absolute z-20 w-[33rem] h-48 -left-8 -top-10 rotate-[-7deg] customShadow" src='/assets/ripped-paper-white.png' alt="Ripped Paper" />
      <h1 className="z-20 pl-32 pt-9 h-28 w-[27rem] text-2xl text-slate-950 textHighlight homemade-apple-regular">Breeanna Nouskhajian</h1>
      
      {/* Pass onTabChange to NavTabs */}
      <NavTabs onTabChange={onTabChange} />
    </header>
  );
}

export default Header;
