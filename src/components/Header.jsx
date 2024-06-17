
import NavTabs from './Navigation'

function Header() {

    return(
        <>
        <header className="cutive-mono-regular flex justify-between px-10 Header items-center border-b border-lime-600">
            <h1 className="text-2xl text-pink-900">BN</h1>
            <NavTabs/>
        </header>
        </>
    );
}

export default Header