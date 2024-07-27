
import NavTabs from './Navigation'

function Header() {

    return(
        <>
        <header className="special-elite-regular cutive-mono-regular flex justify-between pr-10 Header h-32 z-10">
            <img className='absolute z-30 h-40 rotate-[15deg] top-[-25px] drop-shadow-md' src='/assets/paper-clip.png'></img>
            <img className="absolute z-20 w-[33rem] h-48 -left-8 -top-10 rotate-[-7deg] drop-shadow-sm" src='/assets/ripped-paper-white.png'></img>
            <h1 className="z-20 pl-36 pt-9 h-28 w-[27rem] text-2xl text-slate-950">Breeanna's Portfolio</h1>
            <NavTabs/>
        </header>
        </>
    );
}

export default Header