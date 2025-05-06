import Ae from '../../src/assets/Ae.webp';
import Ai from '../../src/assets/Ai.webp';
import Pr from '../../src/assets/Pr.webp';
import Ps from '../../src/assets/Ps.webp';

import longTape from '../../src/assets/long-tape.webp';
import smallTape from '../../src/assets/small-tape.webp';
import books from '../../src/assets/brown-books.webp';
import question from '../../src/assets/white-question.webp';


import { bgGreen, bgBrown, bgWhite, bgTan } from '../components/Backgrounds';

function About() {

    return(
        <div className=" flex-1 relative overflow-y-auto
        // ALL_SCREENS: flex h-full w-full
        // XS_SCREENS: flex-col 
        // SM_SCREENS: sm:flex-col
        // MD_SCREENS: md:flex-col
        // LG_SCREENS: lg:flex-row
        // XL_SCREENS: xl:flex-row">

            {/* LEFT SIDE GRID */}
            <div className="
            // ALL_SCREENS: relative transition-all left-0 top-0 duration-300 ease-in-out grid grid-cols-12 grid-rows-12
            // XS_SCREENS: w-full min-h-screen max-h-screen
            // LG_SCREENS: lg:w-1/2 lg:h-full
            // XL_SCREENS: xl:w-1/2 xl:h-full">

                
                {/* GREEN ARCH AND TAPE DECOR CONTAINER */}
                <div className="relative col-start-4 col-end-11 row-start-3 row-end-11
                sm:col-end-10
                md:flex md:justify-center md:items-center
                lg:row-start-4 lg:bottom-3">
                        
                            {/* ARCH SHAPE */}
                            <div style={bgGreen} className="relative rounded-t-full w-full h-full customShadow
                            md:h-[95%] md:w-[90%]
                            lg:w-full lg:h-full">

                                {/* TOP TAPE */}
                                <img src={smallTape} alt="" aria-hidden="true" loading='lazy'
                                className="absolute w-1/2 max-w-[7rem] rotate-[60deg] right-0 translate-x-1/4 top-[8vw] z-10 customShadow
                                md:right-4 md:top-[6vw]
                                lg:top-[4vw] lg:right-0
                                xl:top-[3vw] xl:right-2"></img>

                                {/* BOTTOM TAPE */}
                                <img src={longTape} alt="" aria-hidden="true" loading='lazy'
                                className="absolute w-2/3 max-w-[11rem] rotate-[10deg] -left-6 bottom-0 translate-y-1/2 z-10 customShadow"></img>

                                {/* BOOK STICKER */}
                                <img src={books} alt="decorative stack of books drawing" loading='lazy'
                                className="w-16 absolute -bottom-5 translate-x-1/2 right-5 drop-shadow-md
                                sm:w-24
                                md:w-28 md:right-20 md:-bottom-12
                                lg:right-14 lg:w-24 lg:-bottom-8
                                xl:right-16 xl:w-28 xl:-bottom-12"></img>

                            </div>
                        
                </div>

                {/* BACKGROUND TITLE CONTAINER */}
                <div className="relative col-start-2 col-end-9 row-start-4
                md:col-start-3 md:col-end-8
                lg:col-start-2">

                    <h1 style={bgWhite} className="absolute top-5 w-full h-full text-lg flex justify-center items-center rounded-md z-10 rotate-1 shadow-sm shadow-stone-400 gaegu-regular text-black
                    sm:w-[90%] sm:right-0 sm:text-xl
                    md:w-full md:left-0 md:right-auto
                    lg:w-[90%] lg:right-0 lg:left-auto lg:top-8
                    xl:text-2xl">
                        Background
                    </h1>

                </div>

                {/* BACKGROUND INFO CONTAINER */}
                <div className="col-start-5 col-end-12 row-start-6 row-end-11
                sm:row-end-10
                md:col-end-11
                lg:col-end-12">

                    <div style={bgWhite} className="shadow-md rounded-md -rotate-1 w-full h-[95%] relative bottom-5 flex flex-col justify-center p-[7vw] gaegu-regular font-black text-sm
                    sm:w-[90%] sm:text-base sm:h-full sm:bottom-auto sm:p-5
                    md:w-full md:text-lg md:px-8
                    lg:w-[95%] lg:text-base
                    xl:text-lg">

                        <div className="overflow-scroll space-y-8">

                            <p>
                            With a foundation in visual design, I began my creative journey studying graphic and motion design, gaining hands-on 
                            experience with Adobe Illustrator, Photoshop, After Effects, and Premiere Pro. This visual background enhances my approach 
                            to front-end and UI work. I later transitioned into software development and completed a full-stack web development certification 
                            through the University of Central Florida. 
                            </p>
                            
                            <p>
                            Throughout the program, I worked in an Agile environment using Git, Kanban boards, daily standups, 
                            and sprint-based workflows to build collaborative projects. This experience helped me develop strong teamwork, planning, and version control 
                            habits while learning full-stack web development and gaining proficiency in modern front-end and back-end technologies. 
                            Since then, I've continued to refine my development skills, combining my eye for design with technical knowledge to build clean, responsive, 
                            and user-centered web applications.
                            </p>

                        </div>

                        <div className="flex justify-center">
                            <svg className="w-4 pt-3 self-center" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                        </div>

                    </div>

                </div>

                {/* ADOBE ICON CONTAINER */}
                <div className="col-start-2 col-end-4 row-start-6 row-end-10
                md:col-start-3
                lg:col-start-2">

                    <div className="w-full h-full flex flex-col justify-between
                    sm:items-center">

                        <div style={bgBrown} className="w-12 aspect-square rounded-xl flex justify-center items-center shadow-sm shadow-stone-500">
                            <img src={Ae} alt="decorative Adobe after effects logo drawing" loading='lazy'
                            className="w-2/3"></img>
                        </div>

                        <div style={bgBrown} className="w-12 aspect-square rounded-xl flex justify-center items-center shadow-sm shadow-stone-500">
                            <img src={Ai} alt="decorative Adobe illustrator logo drawing" loading='lazy'
                            className="w-2/3"></img>
                        </div>

                        <div style={bgBrown} className="w-12 aspect-square rounded-xl flex justify-center items-center shadow-sm shadow-stone-500">
                            <img src={Pr} alt="decorative Adobe premire pro logo drawing" loading='lazy'
                            className="w-2/3"></img>
                        </div>

                        <div style={bgBrown} className="w-12 aspect-square rounded-xl flex justify-center items-center shadow-sm shadow-stone-500">
                            <img src={Ps} alt="decorative Adobe photoshop logo drawing" loading='lazy'
                            className="w-2/3"></img>
                        </div>

                    </div>

                </div>

            </div>
                
                

            {/* RIGHT SIDE GRID */}
            
            <div style={bgGreen} className="
            // ALL_SCREENS: relative transition-all right-0 top-0 duration-300 ease-in-out grid grid-cols-12 grid-rows-12
            // XS_SCREENS: w-full min-h-screen max-h-screen
            // LG_SCREENS: lg:w-1/2 lg:h-full
            // XL_SCREENS: xl:w-1/2 xl:h-full">

                {/* SHADOW FOR GREEN PART OF ARCH */}
                <div className="absolute right-0 top-0 w-full h-full bg-gradient-to-r from-black from-8% via-transparent via-15% to-amber-50 to-90% opacity-20 hidden
                lg:block"></div>

                {/* ARCH HOLLOW AND TAPE DECOR CONTAINER */}
                <div className="relative col-start-4 col-end-11 row-start-3 row-end-11
                md:flex md:justify-center md:items-center
                lg:row-start-4 lg:bottom-3
                xl:col-end-10">
                            
                    {/* ARCH SHAPE */}
                    <div style={bgTan} className="relative shadow-inner rounded-t-full w-full h-full shadow-stone-500
                    md:h-[95%] md:w-[90%]
                    lg:w-full lg:h-full">

                        {/* TOP TAPE */}
                        <img src={smallTape} alt="" aria-hidden="true" loading='lazy'
                        className="absolute w-1/2 max-w-[7rem] -rotate-[15deg] -translate-x-1/2 left-1/3 -translate-y-1/2 top-3 z-10 customShadow
                        lg:top-2"></img>

                        {/* BOTTOM TAPE */}
                        <img src={longTape} alt="" aria-hidden="true" loading='lazy'
                        className="absolute w-2/3 max-w-[11rem] rotate-[100deg] right-0 bottom-[15rem] translate-x-1/2 z-10 customShadow
                        sm:bottom-[13rem]"></img>

                    </div>
                            
                </div>

                    {/* ABOUT ME TITLE CONTAINER */}
                    <div className="relative col-start-5 col-end-10 row-start-4
                    sm:text-xl
                    md:col-start-6 md:col-end-9
                    lg:top-2
                    xl:text-2xl xl:right-6">

                        <h1 style={bgBrown} loading='lazy' className="absolute top-5 w-full h-full flex justify-center items-center rounded-md z-10 -rotate-1 shadow-sm shadow-stone-400 gaegu-regular text-black">
                            About me
                        </h1>

                    </div>

                    {/* ABOUT ME INFO CONTAINER */}
                    <div className="relative col-start-3 col-end-10 row-start-6 row-end-11 z-10 flex
                    md:justify-end
                    lg:justify-normal
                    xl:col-end-9">

                        <div style={bgBrown} loading='lazy' className="gaegu-regular font-black text-base shadow-md rounded-md rotate-1 w-full h-[95%] flex flex-col justify-between p-[7vw] relative bottom-5
                        sm:p-[5vw] sm:pb-2 sm:text-lg
                        md:text-xl md:w-[95%] md:right-0
                        lg:text-lg lg:p-6 lg:w-full">

                            <div className="overflow-scroll space-y-8">

                                <p>
                                I'm a passionate, self-driven, and perpetually fascinated developer with a background in graphic design, motion design, 
                                and full-stack web development. I specialize in full-stack JavaScript development using the MERN stack, with experience 
                                integrating GraphQL, Docker, and modern build tools like Webpack and Babel, along with CSS frameworks such as Tailwind, 
                                Materialize, and Bootstrap. I'm also experienced in building APIs with Node.js and Express, working with both MongoDB and SQL 
                                databases, and implementing secure, scalable server-side logic.
                                </p>
                                
                                <p>
                                I enjoy building creative multi- and single-page layouts, user-focused apps, interactive websites, 
                                and any project that challenges me to think outside the box. I strive to find new ways of conveying real-world feeling and 
                                intention into the digital space of front-end development. 
                                </p>

                                <p>
                                While I have a strong eye for visual design and user experience, I also have a deep love for the logic, structure, and 
                                problem-solving that goes into back-end development. I enjoy designing scalable databases and data models, building organized 
                                and secure APIs, implementing authentication flows, and digging into the meticulous work of debugging. 
                                I embrace the challenges and unknowns that back-end development and maintenance often present.
                                </p>

                                <p>
                                With a strong appreciation for both form and function, I aim to mingle design sensitivity with logic practicality, ensuring 
                                seamless integration in every project I work on. I take pride in writing clean, maintainable, and visually digestible code. I'm 
                                always eager to learn new technologies, solve new problems, and collaborate with teams or peers.
                                </p>

                            </div>    

                            <div className="w-full flex justify-center">
                                <svg className="w-4 pt-3 self-center" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                            </div>

                            {/* SMALL QUESTION MARK */}
                            <img src={question} alt="decorative small question mark drawing" loading='lazy'
                            className="absolute w-14 -top-16 left-[5vw] drop-shadow-md z-10 rotate-[-20deg]
                            md:left-[9vw]
                            lg:left-[5vw]"></img>

                            {/* BIG QUESTION MARK */}
                            <img src={question} alt="decorative larger question mark drawing" loading='lazy'
                            className="absolute -bottom-8 -right-14 w-20 drop-shadow-md z-10 rotate-[10deg]"></img>
                            
                        </div>
                    
                    </div>

            </div>

        </div>
    );

}

export default About