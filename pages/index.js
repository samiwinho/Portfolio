import Head from 'next/head'
import { FaMoon, RiSunFill, } from "react-icons/fa";
import {
  AiFillLinkedin,
  AiFillBehanceCircle,
  AiFillGithub,
} from "react-icons/ai";
import Image from 'next/image';
import deved from '../public/retrato_transp_3d.png'
import design from '../public/design.svg'
import code from '../public/code.svg'
import consulting from '../public/consulting.svg'
import web1 from '../public/calendario.png'
import web2 from '../public/mobile.png'
import web3 from '../public/cardpay.png'
import web4 from '../public/broanova.jpeg'
import assPreta from '../public/SSfundo.svg'
import assBranca from '../public/SSbranco.svg'
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      
      <Head>
        <title>Samuel Silva Portfólio</title>
        <meta name="description" content="Samuel Silva Portfólio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 transition delay-500 duration-1000 ease-in-out'>

        {/*Section #1*/}
        <section className='min-h-screen'>

          {/*Navbar*/}  
          <nav className='py-10 mb-12 flex justify-between'>

            {/*Logotipo*/}
            <div className='flex transition delay-500 duration-1000 ease-in-out'>
              <Image className='invisible dark:visible absolute scale-150 transition-visible delay-500 duration-1000 ease-in-out' src={assBranca}/>
              <Image className='visible absolute dark:invisible scale-150 transition-visible delay-500 duration-1000 ease-in-out' src={assPreta}/>
            </div>
            <ul className='flex items-center'>
              <li>
                <header />
                <FaMoon onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl text-teal-900 dark:text-gray-100 transition delay-500 duration-1000 ease-in-out'/>
              </li>
              <li><a className='bg-gradient-to-r from-teal-600 to-teal-500 text-white px-4 py-2 rounded-md ml-8 hover:animate-pulse transition delay-500 duration-1000 ease-in-out' href="mailto:samuel.fm.silva.design@gmail.com">Say Hello!</a></li>
            </ul>
          </nav>

          {/*Presentation*/}
          <div className='text-center p-10 transition delay-500 duration-1000 ease-in-out'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-300 transition delay-500 duration-1000 ease-in-out'>Samuel Silva</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white transition delay-500 duration-1000 ease-in-out'>“People ignore design that ignores people.”</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-100 transition delay-500 duration-1000 ease-in-out'>
              Hi, i'm Samuel. I'm a multifaceted professional with background in Electronics and
              Computing. I have 2 years of experience in Graphic Design, front-end and UX/UI Design combined.
            </p>
          </div>

          {/*Social Network*/}
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-300 transition delay-500 duration-1000 ease-in-out'>
            <a href="https://www.behance.net/samuelsilva87" target="_blank">
              <AiFillBehanceCircle className='cursor-pointer hover:text-orange-500 hover:dark:text-orange-300' />
            </a>
            <a href="http://linkedin.com/in/samuel-silva-design/" target="_blank">
              <AiFillLinkedin className='cursor-pointer hover:text-orange-500 hover:dark:text-orange-300' />
            </a>
            <a href="https://github.com/samiwinho" target="_blank">
              <AiFillGithub className='cursor-pointer hover:text-orange-500 hover:dark:text-orange-300' />
            </a>
          </div>

          {/*Portrait Image*/}
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 transition delay-500 duration-1000 ease-in-out'>
            <Image src={deved} layout='fill' objectFit='cover' />
          </div>

        </section>



        {/*Section #2*/}
        <section>

          {/*Services*/}
          <div className='flex justify-center'>
            <h3 className='mt-16 text-3xl py-1 pb-10 dark:text-white'>What I Do</h3>
            
            {/* Paragrafo
            <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-100'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, laboriosam ratione illum 
            <span className='text-teal-500 dark:text-teal-300'> voluptatibus</span>
            , natus accusantium incidunt fugiat aperiam neque exercitationem in quae 
            <span className='text-teal-500 dark:text-teal-300'> officis </span> 
            nam? Ullam magnam dolore quia praesentium? Facilis.
            </p>
            */}

          </div>

          {/*Cards*/}
          <div className='lg:flex'>

            {/*Card #1*/}
            <div className='relative overflow-hidden p-1 rounded-xl'>
              <div className='absolute -inset-0.5 blur bg-gradient-to-r dark:from-teal-600 dark:to-teal-500 rounded-xl animate-spin-slow'></div>
              
              <div className='relative bg-gradient-to-r from-teal-800 to-teal-600 shadow-2xl text-center p-10 rounded-xl dark:from-gray-900 dark:to-gray-800 dark:text-teal-100 dark:hover:shadow-2xl dark:hover:shadow-orange-300 transition-shadow duration-1000'>
                <div className='flex justify-center'><Image src={design} width={200} height={200}/></div>
                <h3 className='text-2xl font-medium pt-8 pb-2'>Designer</h3>
                <p className='py-2'>I value simple content structure, clean design patterns, and thoughtful interactions.
                </p>
              
                <h4 className='text-lg pt-8 pb-1 text-teal-700 dark:text-orange-300'>Things I enjoy designing:</h4>
                <p className='text-gray-800 dark:text-gray-100'>UX, UI, Web, Apps, Commercial Banners</p>

                <h4 className='text-lg pt-8 pb-1 text-teal-700 dark:text-orange-300'>Design tools I use:</h4>
                <p className='text-gray-800 dark:text-gray-100'>Microsoft Forms</p>
                <p className='text-gray-800 dark:text-gray-100'>Adobe illustrator</p>
                <p className='text-gray-800 dark:text-gray-100'>Adobe Photoshop</p>
                <p className='text-gray-800 dark:text-gray-100'>Font Awesome</p>
                <p className='text-gray-800 dark:text-gray-100'>Pen & Paper</p>
                <p className='text-gray-800 dark:text-gray-100'>Adobe Xd</p>
                <p className='text-gray-800 dark:text-gray-100'>Figma</p>
              </div>
            </div>

            <div className='p-10'></div>

            {/*Card #2*/}
            <div className='relative overflow-hidden p-1 rounded-xl'>
            <div className='absolute -inset-0.5 blur bg-gradient-to-r dark:from-teal-600 dark:to-teal-500 rounded-xl animate-spin-slow'></div>

            <div className='relative bg-gradient-to-r h-full from-teal-600 to-teal-600 text-center shadow-2xl p-10 rounded-xl dark:from-gray-800 dark:to-gray-800 dark:text-teal-100 dark:hover:shadow-2xl dark:hover:shadow-orange-300 transition-shadow duration-1000'>
              <div className='flex justify-center'><Image src={code} width={200} height={200}/></div>
              <h3 className='text-2xl font-medium pt-8 pb-2'>Frontend Developer</h3>
              <p className='py-2'>I like to code things from scratch, and enjoy bringing ideas to life in the browser.
              </p>
              <h4 className='text-lg pt-8 pb-1 text-teal-700 dark:text-orange-300'>Languages I speak:</h4>
              <p className='text-gray-800 dark:text-gray-100'>C, HTML5, CSS3, JavaScript, Git</p>

              <h4 className='text-lg pt-8 pb-1 text-teal-700 dark:text-orange-300'>Dev tools I use:</h4>
              <p className='text-gray-800 dark:text-gray-100'>Visual Studio Code</p>
              <p className='text-gray-800 dark:text-gray-100'>TailwindCSS</p>
              <p className='text-gray-800 dark:text-gray-100'>Bootstrap</p>
              <p className='text-gray-800 dark:text-gray-100'>GitHub</p>
              <p className='text-gray-800 dark:text-gray-100'>Terminal</p>
            </div>
            </div>

            <div className='p-10'></div>

            {/*Card #3*/}
            <div className='relative overflow-hidden p-1 rounded-xl'>
            <div className='absolute -inset-0.5 blur bg-gradient-to-r dark:from-teal-600 dark:to-teal-500 rounded-xl animate-spin-slow'></div>

            <div className='relative bg-gradient-to-r from-teal-600 to-teal-800 shadow-2xl text-center p-10 rounded-xl dark:from-gray-800 dark:to-gray-900 dark:text-teal-100 dark:hover:shadow-2xl dark:hover:shadow-orange-300 transition-shadow duration-1000'>
              <div className='flex justify-center'><Image src={consulting} width={200} height={200}/></div>
              <h3 className='text-2xl font-medium pt-8 pb-2'>Photographer</h3>
              <p className='py-2'>I love design and art, so photography easily become a part of who I am.
              </p>
              <h4 className='text-lg pt-8 pb-1 text-teal-700 dark:text-orange-300'>Gear I use:</h4>
              <p className='text-gray-800 dark:text-gray-100'>Canon RP, Canon 50mm RF f/1.8</p>
              
              <h4 className='text-lg pt-8 pb-1 text-teal-700 dark:text-orange-300'>What I shoot:</h4>
              <p className='text-gray-800 dark:text-gray-100'>People</p>
              <p className='text-gray-800 dark:text-gray-100'>Pregnancy</p>
              <p className='text-gray-800 dark:text-gray-100'>Real State</p>
              <p className='text-gray-800 dark:text-gray-100'>Engagement</p>
              <p className='text-gray-800 dark:text-gray-100'>Weddings</p>
              <p className='text-gray-800 dark:text-gray-100'>Landscapes</p>
              <p className='text-gray-800 dark:text-gray-100'>Events</p>
            </div>
            </div>

          </div>

        </section>



        {/*Section #3*/}
        <section>

          {/*Portfolio*/}
          <div>
            <h3 className='text-center text-3xl py-1 pt-10 md:pt-16 dark:text-white'> Portfólio</h3>
            
            {/* Paragrafo
            <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-100'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, laboriosam ratione illum 
            <span className='text-teal-500 dark:text-teal-300'> voluptatibus</span>
            , natus accusantium incidunt fugiat aperiam neque exercitationem in quae 
            <span className='text-teal-500 dark:text-teal-300'> officis </span> 
            nam? Ullam magnam dolore quia praesentium? Facilis.
            </p>  
            */}

          </div>

          {/*Portfolio Images and Links*/}
          <div className='flex flex-col justify-center gap-10 py-10 lg:flex-row lg:flex-wrap'>

              <div className='cursor-pointer basis-1/3 flex-1 dark:opacity-50 dark:hover:opacity-100 transition duration-500 ease-in-out'>
                <Image src={web2} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive"/> 
              </div>
            
              <div className='cursor-pointer basis-1/3 flex-1 dark:opacity-50 dark:hover:opacity-100 transition duration-500 ease-in-out' >
                <Image src={web3} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive"/>
              </div>
            
              <div className='cursor-pointer basis-1/3 flex-1 dark:opacity-50 dark:hover:opacity-100 transition duration-500 ease-in-out'>
                <Image src={web1} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive"/>
              </div>
            
              <div className='cursor-pointer basis-1/3 flex-1 dark:opacity-50 dark:hover:opacity-100 transition duration-500 ease-in-out'>
                <Image src={web4} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive"/>
              </div>
            
          </div>

        </section>



      </main>
    </div>
  )
}
