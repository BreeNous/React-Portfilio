
import NavTabs from './Navigation'

function Header() {

    return(
        <>
        <header className="cutive-mono-regular flex justify-between px-10 Header items-center h-32">
            <h1 className="text-2xl text-slate-950">BN</h1>
            <NavTabs/>
        </header>
        </>
    );
}

export default Header