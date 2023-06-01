import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Menu from './Menu'
import dragon from '../assets/dragon.png';
import top from '../assets/top.png';
import text from '../assets/text.png';
import fan from '../assets/fan.png';
import chart from '../assets/chart.png';
import umbrella from '../assets/umbrella.png';
import ballon from '../assets/ballon.png';
import one from '../assets/one.png';
import graph from '../assets/graph.png';
import line from '../assets/line.png';
import view from '../assets/view.png';
import referal from '../assets/referal.png';
import uni from '../assets/uni.png';
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function Home() {

    useEffect(() => {
        Aos.init({
            duration: 3000,
        });
        Aos.refresh();
    }, [])

    return (
        <div className="bg-white-50 font-opensans overflow-hidden">

            {/* top section */}

            <div className="lg:px-20 px-5 bg-top relative z-20">
                <div className='container mx-auto'>

                    <Menu />
                    <div className="lg:flex block justify-between items-center gap-x-16 py-12 space-y-8">

                        <div data-aos="slide-right" data-aos-delay="350" className="">
                            <img src={top} alt="Logo" className='sm:flex mx-auto' />

                            <h1>

                            </h1>
                        </div>


                        <div className='lg:flex hidden flex-col items-center justify-between gap-y-64'>

                            <div data-aos="zoom-in" className='space-y-4'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="12" transform="rotate(90 12 12)" fill="#D9D9D9" fillOpacity="0.49" />
                                </svg>

                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="12" transform="rotate(90 12 12)" fill="#D9D9D9" fillOpacity="0.49" />
                                </svg>


                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="12" transform="rotate(90 12 12)" fill="#D9D9D9" fillOpacity="0.49" />
                                </svg>
                            </div>

                            <div data-aos="zoom-in" className='space-y-4'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="12" transform="rotate(90 12 12)" fill="#D9D9D9" fillOpacity="0.49" />
                                </svg>

                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="12" transform="rotate(90 12 12)" fill="#D9D9D9" fillOpacity="0.49" />
                                </svg>


                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="12" transform="rotate(90 12 12)" fill="#D9D9D9" fillOpacity="0.49" />
                                </svg>
                            </div>

                        </div>

                        <div data-aos="fade-left" className="lg:w-1/3 w-full">

                            <img src={text} alt="Logo" className=' lg:block hidden' />

                            <h1 className='text-3xl font-hirosh lg:hidden block'>
                                wing chun coin
                            </h1>

                            <p data-aos="fade-up" className='pt-6 lg:leading-loose font-medium'>
                                Wing Chun Coin holders will demonstrate absoulute strength and patience when it comes to Holding and sheet determination to shill and destroy all competion.
                            </p>

                        </div>

                    </div>

                </div>
            </div>

            {/* about us section */}

            <div id='about' className="lg:px-20 px-5">
                <div className='container mx-auto'>

                    <div className="lg:flex block justify-center items-center gap-x-24 lg:py-12 py-6 space-y-6">

                        <div data-aos="zoom-in" data-aos-delay="350" className="">
                            <h1 className='lg:text-7xl text-3xl font-bold font-electro'>
                                WING
                            </h1>
                            <h1 className='lg:text-7xl text-3xl font-bold font-electro lg:mt-8'>
                                CHUN
                            </h1>
                        </div>

                        <div data-aos="fade-left" className="lg:w-7/12 w-full">

                            <h2 data-aos="fade-down" className='md:text-5xl text-3xl font-bold font-hirosh'>
                                About Us
                            </h2>

                            <p className='pt-6 pb-4 font-medium'>
                                Wing Chun Coin: Unleashing the Power of Meme Finance with Martial Arts Mastery!
                            </p>

                            <p data-aos="fade-up" className='py-5 lg:leading-loose font-medium'>
                                Drawing inspiration from the legendary art form developed by the late grandmaster Yip Man, Wing Chun Coin takes flight as a symbol of strength, agility, and resilience in the unpredictable landscape of the crypto market. Just as Wing Chun practitioners master the art of close-quarters combat, Wing Chun Coin aims to conquer the digital realm with lightning-fast transactions and an unwavering dedication to its community
                            </p>

                        </div>

                    </div>
                </div>
            </div>

            {/* tokenomics section */}

            <div id='tokenomics' className="lg:px-20 px-5 lg:pt-8">
                <div className='container mx-auto'>

                    <img data-aos="slide-down" src={dragon} alt="Logo" className='sm:flex mx-auto absolute right-0 left-0 lg:-mt-12' />

                    <h2 data-aos="fade-up" className='md:text-5xl text-3xl font-bold font-hirosh text-center'>
                        TOKENOMICS
                    </h2>

                    <div data-aos="fade-right" className='space-y-8 text-center lg:mt-16 mt-6 flex items-center justify-center gap-x-24'>
                        <p className='lg:text-7xl text-2xl font-electro mt-8'>
                            TAX
                        </p>
                        <p className='lg:text-7xl text-2xl font-opensans font-bold'>
                            0/0
                        </p>
                    </div>

                </div>
            </div>

            {/* TOKEN ALLOCATION */}

            <div id='working' className="mt-8">

                <div className="lg:pt-20 py-5 lg:px-20 px-5 container mx-auto">

                    <div className='flex items-center justify-center'>
                        <img data-aos="flip-right" src={umbrella} alt="Logo" className='lg:block hidden' />

                        <h3 data-aos="fade-left" className="md:text-6xl text-2xl font-hirosh font-semibold text-center">
                            TOKEN ALLOCATION
                        </h3>
                    </div>

                    <div className='lg:py-12 py-6'>
                        <img data-aos="zoom-in" src={one} alt="Logo" className='lg:w-2/12 w-4/12 absolute lg:left-72 lg:mt-32 mt-12 z-20' />

                        <img data-aos="zoom-in" src={chart} alt="Logo" className='flex mx-auto -z-20 lg:w-6/12 w-10/12' />

                        <div className='absolute lg:-mt-80 -mt-44 right-1/4 -mr-16'>
                            <img data-aos="zoom-in" src={uni} alt="Logo" className='lg:w-5/12 w-12 ml-10' />
                            <img data-aos="zoom-in" src={line} alt="Logo" className='lg:w-7/12 w-16' />
                        </div>
                    </div>

                </div>

            </div>

            {/* CONTRACT & TOKEN SUPPLY */}

            <div
                id="contract"
                className="lg:pb-12 py-5 lg:px-8 px-5 container mx-auto"
            >
                <div className='flex items-center justify-center gap-x-8'>
                    <h3 data-aos="slide-right" className="md:text-6xl text-2xl font-hirosh font-semibold text-center">
                        Chart
                    </h3>
                    <img data-aos="flip-right" src={ballon} alt="Logo" className='lg:block hidden' />
                </div>

                <div className='flex items-center gap-x-6 float-right lg:py-0 py-10'>
                    <a href='https://www.dextools.io/app/en/ether/pair-explorer/0x728f8e3294a7db7a60b683f5435484276729083e'>
                        <img data-aos="flip-right" src={view} alt="Logo" className='w-24' />
                    </a>
                    <a href='#contract'>
                        <img data-aos="flip-right" src={referal} alt="Logo" className='w-24' />
                    </a>
                </div>

                <div className='lg:flex items-center justify-center gap-x-3 pt-6'>
                    <div className='space-y-8 lg:block hidden'>
                        <p>
                            30k
                        </p>

                        <p>
                            25k
                        </p>

                        <p>
                            20k
                        </p>

                        <p>
                            15k
                        </p>

                        <p>
                            10k
                        </p>
                        <p>
                            5k
                        </p>

                        <p>
                            0k
                        </p>

                    </div>

                    <img src={graph} alt="Logo" className='' />

                </div>

                <div>
                    <p className='text-center -ml-28 lg:block hidden'>
                        01. Nov	 02. Nov	 03. Nov	 04. Nov 	05. Nov	 06. Nov	 07. Nov	 08. Nov	 09. Nov	 10. Nov	  11. Nov	 12. Nov	 13. Nov	 14. Nov
                    </p>
                </div>
            </div>

            {/* roadmap */}

            <div
                id="roadmap"
                className="lg:py-12 py-5 lg:px-8 px-5 container mx-auto"
            >
                <h3 data-aos="fade-up" className="md:text-6xl text-2xl font-hirosh font-semibold text-center">
                    Roadmap
                </h3>

                <div className="lg:mt-12 mt-6 rounded-2xl lg:p-12 p-6">

                    <div className=''>
                        <div className="h-1 w-full bg-yellow-50">

                        </div>

                        <div className='h-1 w-full line -translate-y-1'>

                        </div>
                    </div>

                    <div className="lg:flex items-baseline justify-between gap-6 lg:px-20 lg:space-y-0 space-y-6 -mt-1.5">

                        <div className="flex flex-col items-center">
                            <div
                                data-aos="zoom-in"
                                className="absolute -mt-3.5 lg:block hidden"
                            >
                                <svg width="28" height="29" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#940030" />
                                    <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#940030" />
                                </svg>

                            </div>

                            <div className="border-l border-yellow-50 lg:mt-5 mt-0 mb-3 h-14"></div>

                            <div
                                data-aos="flip-right"
                                className="border border-yellow-50 rounded-2xl  p-5 lg:w-72 hover:bg-purple-100"
                            >
                                <h5 className="text-xl font-hirosh py-4 font-semibold">Q:1 Establishing the Foundation</h5>

                                <ul className="list-disc p-4">
                                    <li>Launch the Wing Chun Coin website and social media channels.</li>
                                    <li>Conduct a fair and transparent token distribution to the community.</li>
                                    <li>Initiate marketing campaigns to introduce Wing Chun Coin to investors and enthusiasts.</li>
                                    <li>Establish partnerships with other crypto projects.</li>
                                    <li>Engage with the community and address any concerns</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div
                                data-aos="zoom-in"
                                className="absolute -mt-3.5 lg:block hidden"
                            >
                                <svg width="28" height="29" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#940030" />
                                    <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#940030" />
                                </svg>
                            </div>

                            <div className="border-l border-yellow-50 lg:mt-5 mt-0 mb-3 h-14"></div>

                            <div
                                data-aos="flip-left"
                                className="border border-yellow-50 rounded-2xl  p-5 lg:w-72 hover:bg-purple-100"
                            >
                                <h5 className="text-xl font-hirosh py-4 font-semibold">Q2: Building the Infrastructure</h5>

                                <ul className="list-disc p-4">
                                    <li>List Wing Chun Coin on decentralized exchanges (DEXs) for enhanced liquidity.</li>
                                    <li>Develop a secure and user-friendly wallet for Wing Chun Coin holders.</li>
                                    <li>Enhance the functionality and efficiency of the Wing Chun Coin blockchain.</li>
                                    <li>Regular security audits to ensure user funds' safety.</li>
                                    <li>Educate the community about the token's benefits.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div
                                data-aos="zoom-in"
                                className="absolute -mt-3.5 lg:block hidden"
                            >
                                <svg width="28" height="29" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#940030" />
                                    <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#940030" />
                                </svg>
                            </div>

                            <div className="border-l border-yellow-50 lg:mt-5 mt-0 mb-3 h-14"></div>

                            <div
                                data-aos="flip-left"
                                className="border border-yellow-50 rounded-2xl  p-5 lg:w-72 hover:bg-purple-100"
                            >
                                <h5 className="text-xl font-hirosh py-4 font-semibold">Q3: Expanding the Community</h5>

                                <ul className="list-disc p-4">
                                    <li>Organize events, webinars, and AMAs to engage the community.</li>
                                    <li>Expand marketing efforts to attract new investors.</li>
                                    <li>Seek partnerships with influencers and content creators.</li>
                                    <li>Launch a referral program to incentivize community growth.</li>
                                    <li>Implement governance features for token holders.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div
                                data-aos="zoom-in"
                                className="absolute -mt-3.5 lg:block hidden"
                            >
                                <svg width="28" height="29" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#940030" />
                                    <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#940030" />
                                </svg>
                            </div>

                            <div className="border-l border-yellow-50 lg:mt-5 mt-0 mb-3 h-14"></div>

                            <div
                                data-aos="flip-right"
                                className="border border-yellow-50 rounded-2xl  p-5 lg:w-72 hover:bg-purple-100"
                            >
                                <h5 className="text-xl font-hirosh py-4 font-semibold">Q4: Advancing Growth and Adoption</h5>

                                <ul className="list-disc p-4">
                                    <li>Introduce utility use cases for Wing Chun Coin, like staking and governance voting.</li>
                                    <li>Enable Wing Chun Coin as a payment option with collaborating merchants and platforms.</li>
                                    <li>Support charitable causes for positive societal impact.</li>
                                    <li>Continuously improve the project based on user feedback.</li>
                                    <li>Explore additional listings on centralized exchanges for increased accessibility.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>



                <div className='flex flex-col items-center justify-center gap-y-8 lg:mt-12 mt-6'>
                    <div className='flex items-center justify-center gap-x-8'>
                        <img data-aos="flip-left" src={fan} alt="Logo" className='lg:block hidden' />

                        <h3 data-aos="fade-left" className="md:text-6xl text-2xl font-hirosh font-semibold text-center">
                            JOIN US
                        </h3>
                    </div>

                    <p className='flex mx-auto text-center lg:w-1/2 font-medium'>
                        Join us today and unlock the power of Wing Chun Coin! Together, we will forge a new path in the realm of meme finance, driven by the principles of martial arts mastery.
                    </p>
                </div>
            </div>


            <Footer />
        </div >
    )
}
