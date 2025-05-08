
import React from 'react';

import vwg01 from '../assets/vwg01.webp';
import vwg02 from '../assets/vwg02.webp';
import vwg03 from '../assets/vwg03.webp';
import vwg04 from '../assets/vwg04.webp';

import wd01 from '../assets/wd01.webp';
import wd02 from '../assets/wd02.webp';
import wd03 from '../assets/wd03.webp';
import wd04 from '../assets/wd04.webp';

import jeans1 from '../assets/jeans1.webp';
import jeans2 from '../assets/jeans2.webp';
import jeans3 from '../assets/jeans3.webp';
import jeans4 from '../assets/jeans4.webp';

import b1 from '../assets/b1.webp';
import b2 from '../assets/b2.webp';
import b3 from '../assets/b3.webp';
import b4 from '../assets/b4.webp';

function ProjectCard({ index, activeEnvelope, isClosing, animationCompleted, onClose, bgWhite, bgBrown, bgGreen }) {
    const isActive = activeEnvelope === index;
  
    const projectStates = {
        0: {
            title: 'Vibrawood Guitairs',
            repo: 'https://github.com/Wartech93/Vibrawood_Guitars',
            descriptionP1: `
                Vibrawood Guitars is a fully functional e-commerce website built for a local guitar shop owner to sell custom instruments online. 
                Collaborating with a small team, I focused on the front end using React, Tailwind CSS, and Flowbite, connecting dynamic front-end 
                components to data provided by the Node.js/Express/MongoDB back end. The site allows users to browse by instrument category, create 
                an account, add items to their cart, and securely purchase through Stripe integration.
            `,
            descriptionP2: `
                I led the front-end logic, including routing, UI functionality, and rendering product data from the backend. I implemented features like category 
                filtering on the homepage and Instagram integrationa on the media page. I helped integrate the external APIs 
                and ensured the front-end experience connected with our server-side setup. This project pushed me to think quickly, adapt often, and deliver a
                polished, production-ready user experience.
            `,
            conditionalImage: vwg04,
            projectImages: [vwg01, vwg02, vwg03, vwg04],
        },

        1: {
            title: 'Weather Dashboard',
            repo: 'https://github.com/BreeNous/Weather-Dashboard',
            descriptionP1: `
                Weather Dashboard is a responsive front-end app that lets users search for current and 5-day city forecasts using the 
                OpenWeather API. Built with vanilla JavaScript, HTML, and CSS, it features real-time weather data, search history persistence 
                via localStorage, and intuitive UI components for seamless interaction.
            `,
            descriptionP2: `
                I focused on implementing clean, modular JavaScript to handle API requests, parse and display data, and manage user 
                interactions. I also built a system that persists search history across sessions using localStorage, allowing the user 
                experience to feel consistent and intuitive. This project deepened my skills in working with external APIs, handling 
                asynchronous requests, and building polished, interactive UI components without relying on frameworks.
            `,
            conditionalImage: wd04,
            projectImages: [wd01, wd02, wd03, wd04],
        },

        2: {
            title: 'Jeans',
            repo: 'https://github.com/frenzie24/jeans',
            descriptionP1: `
                This app was built to support developers who may not have a design background by helping them find visually 
                cohesive assets, specifically color palettes and royalty-free images, to use in web projects. My team created an interactive front-end 
                tool that allows users to search a color (via text or color picker) and receive eight curated color themes powered by The Color API. 
                Using the Pixabay API, users can search for royalty free image assets.
                user-friendly.
            `,
            descriptionP2: `
                Using tailwind CSS, my focus was building front-end features and wiring together the UI logic with our API responses. 
                I integrated the color and image APIs into functional, dynamic sections, ensuring smooth interactive behavior. 
                The concept was driven by the idea that a unified color scheme and strong visual 
                elements are essential — and often overlooked — parts of clean design. We built this tool to help bridge that gap.
            `,
            conditionalImage: jeans4,
            projectImages: [jeans1, jeans2, jeans3, jeans4],
        },

        3: {
            title: 'Bucket',
            repo: 'https://github.com/BreeNous/Bucket',
            descriptionP1: `
                Bucket is a personal goal-setting app designed to keep users motivated and accountable. It allows users to create, edit, and track goals 
                with features like image uploads and personalized progress tracking. Built with the MERN stack, it includes robust user authentication with JWT, 
                secure file uploads via Multer, and a protected backend for enhanced privacy.
            `,
            descriptionP2: `
                Originally a team project, I later took full ownership, refactoring the data models, rewriting the API with GraphQL and Express, and overhauling 
                the front end to improve usability. This solo effort gave me hands-on experience with backend architecture, API design, and building scalable, 
                real-world applications.
            `,
            conditionalImage: b4,
            projectImages: [b1, b2, b3, b4],
        },

    };



    const { title, repo, descriptionP1, descriptionP2, conditionalImage, projectImages } = projectStates[index];

    return(

        <div className='w-full h-full flex justify-center absolute bottom-0'>
          
          <div
            className={`inner-card rounded z-20 overflow-auto md:overflow-scroll
            ${isActive ? 'fixed click-animation-xs-sm md:click-animation-md-xl' : 'relative w-5/6 h-5/6 -top-5'}
            ${isActive && isClosing ? 'closing' : ''}`}
            style={{
              ...(isActive
                ? {
                    top: 'var(--start-top)',
                    left: 'var(--start-left)',
                    width: 'var(--start-width)',
                    height: 'var(--start-height)',
                  }
                : {}),
              ...bgWhite,
            }}
          >
            
            {isActive && animationCompleted && !isClosing && (
              <div className='min-h-fit flex flex-col lg:flex-row reveal-content pb-9 relative mt-8'>

                <button onClick={onClose} style={bgGreen}
                  className='back rounded-sm shadow-md flex absolute gaegu-regular text-base px-2 justify-center items-center top-3 left-5 sm:left-10 z-[100] lg:text-lg w-14 '>
                  Back
                </button>
    
                {/* LEFT COL */}
                <div className='w-full flex flex-col items-center lg:w-1/2'>

                  <div className='flex h-[44rem] flex-grow px-5 pt-12 pb-5 sm:px-10 sm:pb-10 lg:pt-14 lg:pr-5 lg:pb-5'>
                    <div
                      style={bgBrown}
                      className='w-full p-4 h-full text-base gaegu-regular rounded-md shadow-sm custom-shadow space-y-4 relative
                      sm:text-lg md:p-5 xl:text-xl xl:p-6'
                    >
    
                      <p className='text-lg font-black flex justify-center sm:text-xl lg:text-2xl'>
                        {title}
                      </p>
    
                      <p>
                        Visit the <a href={repo}><span className='underline hover:text-white'>repository</span></a> for more!
                      </p>
    
                      <p>{descriptionP1}</p>
                      <p>{descriptionP2}</p>
                    </div>
                  </div>
    
                  {conditionalImage && (
                    <div className='custom-shadow w-full p-5 pb-0 md:px-5 md:py-5 hidden lg:block lg:pl-10 lg:pt-0'>
                      <div className='w-auto min-h-fit items-center overflow-hidden hidden lg:flex'>
                        <img src={conditionalImage} alt='feature project image' loading='lazy' width="1200" height="900"
                          className='object-cover h-full w-full rounded-md drop-shadow-md'
                        />
                      </div>
                    </div>
                  )}
                </div>
    
                {/* RIGHT COL */}
                <div className='custom-shadow w-full flex justify-center px-5 min-h-fit flex-grow sm:px-10 lg:w-1/2 lg:flex-grow-0 lg:pr-10 lg:pt-14 lg:pl-5'>
                  <div className='flex flex-col justify-between'>

                    {projectImages.map((img, i) => (
                      <div key={i}
                        className={`w-full min-w-68 h-auto min-h-fit pb-5 flex justify-center items-center overflow-hidden ${
                          i === projectImages.length - 1 ? 'lg:hidden' : ''
                        }`}>

                        <img src={img} alt={`screenshot of ${title}`} loading='lazy' width="1200" height="900"
                          className='object-cover h-full w-full rounded-md drop-shadow-md'/>

                      </div>

                    ))}
                  </div>

                </div>
              </div>
            )}
          </div>
        </div>
      );

};

export default ProjectCard;

