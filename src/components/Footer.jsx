

function Footer() {

    return(
        <footer className="z-[5] gaegu-regular Footer flex justify-between items-center px-10 mt-auto text-slate-950 absolute bottom-0 left-0">
            
            <ul className="flex pb-3">

                <li className="flex justify-center items-center">
                    <a href="https://github.com/BreeNous" className="text-slate-950 hover:text-amber-50 ms-5 bg-brown-texture w-12 h-12 rounded-full flex items-center justify-center shadow-sm shadow-stone-500">
                        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"/>
                        </svg>
                        <span className="sr-only">GitHub</span>
                    </a>
                </li>

                <li className="flex justify-center items-center">
                    <a href="https://www.linkedin.com/in/breeanna-nouskhajian-259658318/" className="text-slate-950 hover:text-amber-50 ms-5 bg-brown-texture w-12 h-12 rounded-full flex items-center justify-center shadow-sm shadow-stone-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                        </svg>
                        <span className="sr-only">Linkedin</span>
                    </a>
                </li>

                <li className="flex justify-center items-center">
                    <a href="https://discord.com/" className="text-slate-950 hover:text-amber-50 ms-5 bg-brown-texture w-12 h-12 rounded-full flex items-center justify-center shadow-sm shadow-stone-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
                        </svg>
                        <span className="sr-only">Discord</span>
                    </a>
                </li>

                <li className="flex justify-center items-center">
                    <a href="https://slack.com/" className="text-slate-950 hover:text-amber-50 ms-5 bg-brown-texture w-12 h-12 rounded-full flex items-center justify-center shadow-sm shadow-stone-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6" viewBox="0 0 512 512">
                            <path d="M126.12,315.1A47.06,47.06,0,1,1,79.06,268h47.06Z"/><path d="M149.84,315.1a47.06,47.06,0,0,1,94.12,0V432.94a47.06,47.06,0,1,1-94.12,0Z"/><path d="M196.9,126.12A47.06,47.06,0,1,1,244,79.06v47.06Z"/><path d="M196.9,149.84a47.06,47.06,0,0,1,0,94.12H79.06a47.06,47.06,0,0,1,0-94.12Z"/><path d="M385.88,196.9A47.06,47.06,0,1,1,432.94,244H385.88Z"/><path d="M362.16,196.9a47.06,47.06,0,0,1-94.12,0V79.06a47.06,47.06,0,1,1,94.12,0Z"/><path d="M315.1,385.88A47.06,47.06,0,1,1,268,432.94V385.88Z"/><path d="M315.1,362.16a47.06,47.06,0,0,1,0-94.12H432.94a47.06,47.06,0,1,1,0,94.12Z"/>
                        </svg>
                        <span className="sr-only">Slack</span>
                    </a>
                </li>

            </ul>

            <img src='assets/ripped-paper-white-2.png' className="fixed z-20 -bottom-12 -right-32 w-[33rem] h-48 rotate-[-5deg] drop-shadow-sm"></img>
            <p className="z-30 text-lg font-black fixed right-[4rem] ">&copy; {new Date().getFullYear()} Breeanna's Portfolio</p>
            
        </footer>
    );
}

export default Footer