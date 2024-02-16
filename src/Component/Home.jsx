import React from 'react'
import { FiTwitter } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'
import { VscSend } from "react-icons/vsc";
import { LuMouse } from "react-icons/lu";
import { FaArrowDown } from "react-icons/fa6";
import './Home.css'
import { Cursor, useTypewriter } from 'react-simple-typewriter';

const Home = () => {
    const [text] =useTypewriter({
        words:['web-designer','front-end developer','full-stack-developer'],
        loop:{},
        typeSpeed:120
      })
    return (
        <div id="#" className='w-screen md:pt-[6rem] md:pb-[2rem] pb-[4rem] pt-[2rem] py-0'>
            <div className='Home_container md:gap-y-[5rem] max-w-[768px] md:mx-auto mx-[1.5rem] grid gap-[1.5rem]'>
                <div className="Home_content md:pt-[5.5rem] md:gap-x-[2rem] sm:grid-cols-[max-content,1fr,1fr] grid grid-cols-[0.5fr,3fr] gap-[1.5rem] pt-[3.5rem] items-center">
                    <div className="home_social grid grid-cols-[max-content] gap-y-[1rem] lg:transform lg:-translate-x-[6rem]">
                        <NavLink to='https://github.com/dhavalkathiriya' target='_blank' className='text-[1.25rem] text-[#972ef9] hover:text-[#7221be]'>
                            <LuGithub />
                        </NavLink>

                        <NavLink to='https://www.linkedin.com/in/dhaval-kathiriya-b63543dk/' target='_blank' className='text-[1.25rem] text-[#972ef9] hover:text-[#7221be]'>
                            <FiLinkedin />
                        </NavLink>

                        <NavLink to='#' target='_blank' className='text-[1.25rem] text-[#972ef9] hover:text-[#7221be]'>
                            <FiTwitter />
                        </NavLink>
                    </div>

                    <div className='home_img'></div>

                    <div className="home_data sm:col-auto col-span-2">
                        <h1 className="home_title text-[2rem] mb-[.75rem] dark:text-white lg:text-4xl">Hi, I'm Dhaval Kathiriya</h1>

                        <h3 className="home_subtitle text-[1.125rem] text-[#242329] font-medium mb-[.75rem] dark:text-[#bcbac4]">I'm a <span className='text-[#8f34ea]'>{text}</span><Cursor cursorColor="#8f34ea"/></h3>

                        <p className="home_description mb-[2rem] dark:text-[#bcbac4]">
                        I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
                        </p>

                        <HashLink to="#ContactMe" smooth>
                            <button className='flex justify-center items-center bg-[#8f34ea] hover:bg-[#7a26cf] text-white p-4 rounded-md font-medium'>
                                Contact Me
                                <VscSend className='text-[1.25rem] ml-[.5rem] transition-all duration-300'/>
                            </button>
                        </HashLink>
                    </div>
                </div>

                <div className='hidden md:block md:ml-[3rem]'>
                    <HashLink to="#About" className="flex items-center transition-all duration-300 hover:translate-y-1 text-[#8f34ea] button--flex" smooth>
                        <LuMouse className='text-[2rem]'/>
                        <span className="text-[.813rem] text-[#242329] dark:text-white font-medium mr-[0.25rem]">Scroll down</span>
                        <FaArrowDown className='text-[.813rem]'/>
                    </HashLink>
                </div>
            </div>
        </div>
    )
}

export default Home
