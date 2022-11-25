import type { NextPage } from 'next'
import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin, AiFillMail} from 'react-icons/ai'
import Image from "next/image"
import avatar from "../public/avatar.png"
import backgroundimg from "../public/Path 9.png"
import finance from "../public/Finance.png"
import design from "../public/Design1.png"
import bizdev1 from "../public/BizDev.png"
import fin from "../public/financelabel.png"
import des from "../public/designlabel.png"
import bizdev from "../public/bizdevlabel.png"
import portfolio from "../public/PTitle.png"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Evan Goddard Portfolio</title>
        <link rel="icon" href="https://github.com/egodd/portfolio/blob/main/icon_pic-removebg-preview.png?raw=true" />
      </Head>

      <main className ="bg-gradient-to-br from-teal-300 to-yellow-200">
       
        
        <section className = " min- h-screen">
          <nav className = "py-10 mb-12 flex justify-between">
            <h1 className ="text-lg text-bold text-gray-600">designed/codedbyevan</h1>
            <ul className ="flex items-center">

              <li><a className= "bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href ="https://drive.google.com/file/d/1ztPLc_Ow8j3RLi6VjAsIF7adfvJgvTO-/view?usp=share_link">Resume</a></li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-gray-600 font-medium">Evan Goddard </h2>
            <h3 className ="text-2xl py-5 text-blue-400 font-thin">At the Intercetion of Finance, Creativity, and Technology</h3>
            <p className="text-md text-center py-2 leading-8 text-blue-800">Thank you for checking out my portfolios. Don't hesistate to reach out!</p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href ='https://linkedin.com/in/evan-goddard'>
            <AiFillLinkedin /> </a>
            <a href = 'mailto:evangoddard@brandeis.edu'>
            <AiFillMail /> </a>
          </div>
          <div className="relative mx-auto bg-none w-80 h-80 mt-10"> 
          <Image src ={avatar} layout="fill" objectFit ="cover" alt=""/>
          </div>
        </section>
        <section className=" ">
          <div className="relative mx-auto text-center shadow-xl bg-indigo-800 w-80 mt-20 rounded-xl"> 
          <h1 className ="text-5xl py-4 text-white font-medium">PORTFOLIOS</h1>
          </div>
          <div className='mb-5'>

            <div className = "w-4/5 mx-auto mt-10 text-center shadow-lg bg-white bg-opacity-50 overflow-hidden rounded-md hover:bg-opacity-80">
            <div className="w-4/5 mx-auto text-center py-12"><a href="https://drive.google.com/drive/folders/1OG2fNPEADLkAA5sHGQIPNaThewqAc0U7"><Image src = {fin} alt =""/></a></div>
              <h3 className ="text-lg pt-8 pb-2 text-blue-800"> PROJECTS SHOWCASED </h3>
              <p className ="text-gray-600 text-lg font-semibold">
              Equity Research - Risk Analysis - Development Prop - Future of Real Estate Report
              </p>
              <h4 className ="text-lg text-blue-800 pt-10">
                SECTOR SKILLS
              <p className ="text-gray-600 mb-10 font-semibold">Python - Bloomberg - Excel Financial Modeling</p></h4>
            </div>

            <div className = "w-4/5 mx-auto mt-10 text-center shadow-lg bg-white bg-opacity-50 overflow-hidden rounded-md hover:bg-opacity-80">
            <div className="w-4/5 mx-auto text-center py-12"><a href="https://drive.google.com/drive/folders/1b2vuGJlr8HH_nDTBi4BmC9QPy9BHjcvL"><Image src = {des} alt =""/></a></div>
              <h3 className ="text-lg pt-8 pb-2 text-blue-800"> PROJECTS SHOWCASED </h3>
              <p className ="text-gray-600 text-lg font-semibold">
              Website Redesign - Streamlining of Branding
              </p>
              <h4 className ="text-lg text-blue-800 pt-10">
                SECTOR SKILLS
              <p className ="text-gray-600 mb-10 font-semibold">Figma - Adobe XD - REACT/HTML/CSS</p></h4>
            </div>
            <div className = "w-4/5 mx-auto mt-10 text-center shadow-lg bg-white bg-opacity-50 overflow-hidden rounded-md hover:bg-opacity-80">
            <div className="w-4/5 mx-auto text-center py-12"><a href="https://drive.google.com/drive/folders/1HMIYkGZPI83tIDKt4phvCPSwHzV4CR0c"><Image src = {bizdev} alt =""/></a></div>
              <h3 className ="text-lg pt-8 pb-2 text-blue-800"> PROJECTS SHOWCASED </h3>
              <p className ="text-gray-600 text-lg font-semibold">
              Startup Development - Database Creation/Optimisionation - Payroll Conversion
              </p>
              <h4 className ="text-lg text-blue-800 pt-10">
                SECTOR SKILLS
              <p className ="text-gray-600 mb-10 font-semibold">MySQL - RStudio - Microsoft Access</p></h4>
            </div>
          </div>
        </section>
        <section>
          <div className ="bg-gray-400 p-2 text-center text-white">
          Thank you for exploring the start of my portfolio project. A finalized version of the project can be viewed at any of the links above and includes details of each project completed. As I continue to explore programming, I will add content to enhance this site. 
          <br></br>Click <a href="https://drive.google.com/drive/folders/1HMIYkGZPI83tIDKt4phvCPSwHzV4CR0c" className ="text-blue-900 font-bold">HERE</a> to see a full overview of my design goals.</div>
        </section>
      </main>

     
    </div>
  )
}

export default Home
