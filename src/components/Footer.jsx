import { GitHubIcon, LinkedinIcon, DiscordIcon, SlackIcon } from './Icons';
import tornPaper2 from '../assets/ripped-paper-white-2.webp';
import { bgBrown } from './Backgrounds';


function Footer() {

    return (
        <footer className="
        // ALL_SCREENS: gaegu-regular flex justify-between items-center px-6 mt-auto w-full text-slate-950 fixed overflow-clip bottom-0 z-30
        // SM_SCREENS: flex-wrap py-4 h-32
        // MD_SCREENS: md:flex-nowrap md:py-4 md:h-28
        // LG_SCREENS: lg:flex-nowrap lg:py-4 lg:h-28
        ">

            <ul className="
            // ALL_SCREENS: flex mt-5
            // SM_SCREENS: w-full ms-0 justify-center
            // MD_SCREENS: md:w-1/2 md:justify-normal md:ms-5
            // LG_SCREENS: lg:w-1/2 lg:justify-normal lg:ms-5
            ">

                <li className="flex justify-center items-center">
                    <a href="https://github.com/BreeNous" style={bgBrown}
                    className="text-slate-950 hover:text-amber-50 rounded-full flex items-center justify-center shadow-sm shadow-stone-500
                    w-9 h-9 md:w-10 md:h-10">
                        {GitHubIcon}<span className="sr-only">GitHub</span>
                    </a>
                </li>

                <li className="
                flex justify-center items-center">
                    <a href="https://www.linkedin.com/in/breeanna-nouskhajian-259658318/" style={bgBrown}
                    className=" text-slate-950 hover:text-amber-50 ms-5 rounded-full flex items-center justify-center shadow-sm shadow-stone-500
                    w-9 h-9 md:w-10 md:h-10">
                        {LinkedinIcon}<span className="sr-only">Linkedin</span>
                    </a>
                </li>

                <li className="flex justify-center items-center">
                    <a href="https://discord.com/" style={bgBrown}
                    className=" text-slate-950 hover:text-amber-50 ms-5 rounded-full flex items-center justify-center shadow-sm shadow-stone-500
                    w-9 h-9 md:w-10 md:h-10">
                        {DiscordIcon}<span className="sr-only">Discord</span>
                    </a>
                </li>

                <li className="flex justify-center items-center">
                    <a href="https://slack.com/" style={bgBrown}
                    className="text-slate-950 hover:text-amber-50 ms-5 rounded-full flex items-center justify-center shadow-sm shadow-stone-500
                     w-9 h-9 md:w-10 md:h-10">
                        {SlackIcon}<span className="sr-only">Slack</span>
                    </a>
                </li>

            </ul>

            <div className="
            // ALL_SCREENS: flex w-full align-middle justify-center z-20
            // SM SCREENS: mt-2
            // MD SCREENS: md:w-1/2 md:pr-8 md:justify-end md:h-full md:items-end md:pb-4 md:mt-5
            ">
                <p className="
                // ALL_SCREENS: font-black text-sm
                // LG_SCREENS: lg:text-base
                ">
                    &copy; {new Date().getFullYear()} Breeanna's Portfolio
                </p>
            </div>

            <img src={tornPaper2} aria-hidden="true"
                className="
                // ALL_SCREENS: absolute -bottom-10 rotate-[-10deg] drop-shadow-sm
                // SM_SCREENS: hidden
                // MD_SCREENS: md:-right-40 md:-bottom-24 md:w-[30rem] md:block
                // LG_SCREENS: lg:-right-32 lg:-bottom-24 lg:w-[30rem]

                ">
            </img>

        </footer>
    );
}

export default Footer