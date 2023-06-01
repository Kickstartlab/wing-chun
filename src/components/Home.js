import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Menu from './Menu'
import dragon from '../assets/dragon.png';
import roadmap from '../assets/roadmap.png';
import top from '../assets/top.png';
import text from '../assets/text.png';
import fan from '../assets/fan.png';
import chart from '../assets/chart.png';
import umbrella from '../assets/umbrella.png';
import ballon from '../assets/ballon.png';
import graph from '../assets/graph.png';
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function Home() {

    useEffect(() => {
        Aos.init({
            duration: 2500,
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

                        <div data-aos="zoom-in" data-aos-delay="350" className="">
                            <img src={top} alt="Logo" className='sm:flex mx-auto' />

                            <h1>

                            </h1>
                        </div>


                        <div className='lg:flex hidden flex-col items-center justify-between gap-y-64'>

                            <div className='space-y-4'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="12" transform="rotate(90 12 12)" fill="#D9D9D9" fill-opacity="0.49" />
                                </svg>

                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="12" transform="rotate(90 12 12)" fill="#D9D9D9" fill-opacity="0.49" />
                                </svg>


                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="12" transform="rotate(90 12 12)" fill="#D9D9D9" fill-opacity="0.49" />
                                </svg>
                            </div>

                            <div className='space-y-4'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="12" transform="rotate(90 12 12)" fill="#D9D9D9" fill-opacity="0.49" />
                                </svg>

                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="12" transform="rotate(90 12 12)" fill="#D9D9D9" fill-opacity="0.49" />
                                </svg>


                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="12" transform="rotate(90 12 12)" fill="#D9D9D9" fill-opacity="0.49" />
                                </svg>
                            </div>

                        </div>

                        <div data-aos="fade-left" className="lg:w-1/3 w-full">

                            <img src={text} alt="Logo" className=' lg:block hidden' />

                            <h1 className='text-3xl font-hirosh lg:hidden block'>
                                wing chun coin
                            </h1>

                            <p className='pt-6 lg:leading-loose font-medium'>
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

                            <h2 className='md:text-5xl text-3xl font-bold font-hirosh'>
                                About Us
                            </h2>

                            <p className='pt-6 pb-4 font-medium'>
                                Wing Chun Coin: Unleashing the Power of Meme Finance with Martial Arts Mastery!
                            </p>

                            <p className='py-5 lg:leading-loose font-medium'>
                                Drawing inspiration from the legendary art form developed by the late grandmaster Yip Man, Wing Chun Coin takes flight as a symbol of strength, agility, and resilience in the unpredictable landscape of the crypto market. Just as Wing Chun practitioners master the art of close-quarters combat, Wing Chun Coin aims to conquer the digital realm with lightning-fast transactions and an unwavering dedication to its community
                            </p>

                        </div>

                    </div>
                </div>
            </div>

            {/* tokenomics section */}

            <div id='tokenomics' className="lg:px-20 px-5 lg:pt-8">
                <div className='container mx-auto'>

                    <img src={dragon} alt="Logo" className='sm:flex mx-auto absolute right-0 left-0 -mt-12' />

                    <h2 className='md:text-5xl text-3xl font-bold font-hirosh text-center'>
                        TOKENOMICS
                    </h2>
                    <div className="grid lg:grid-cols-3 grid-cols-1 items-center justify-items-center gap-16 lg:mt-12 mt-6">

                        <div className='space-y-8'>
                            <p className='lg:text-5xl text-2xl font-electro'>
                                MW
                            </p>
                            <p className='lg:text-4xl text-2xl font-opensans font-bold'>
                                3%
                            </p>
                        </div>

                        <div className='space-y-8'>
                            <p className='lg:text-5xl text-2xl font-electro'>
                                LP
                            </p>
                            <p className='lg:text-4xl text-2xl font-opensans font-bold'>
                                3%
                            </p>
                        </div>

                        <div className='space-y-8'>
                            <p className='lg:text-5xl text-2xl font-electro'>
                                BUSD
                            </p>
                            <p className='lg:text-4xl text-2xl font-opensans font-bold'>
                                3%
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            {/* TOKEN ALLOCATION */}

            <div id='working' className="mt-8">

                <div className="lg:py-20 py-5 lg:px-20 px-5 container mx-auto">

                    <div className='flex items-center justify-center'>
                        <img src={umbrella} alt="Logo" className='lg:block hidden' />

                        <h3 className="md:text-6xl text-2xl font-hirosh font-semibold text-center">
                            TOKEN ALLOCATION
                        </h3>
                    </div>


                    <img src={chart} alt="Logo" className='flex mx-auto lg:py-12 py-6' />

                </div>

            </div>

            {/* CONTRACT & TOKEN SUPPLY */}

            <div
                id="contract"
                className="lg:pb-12 py-5 lg:px-8 px-5 container mx-auto"
            >
                <div className='flex items-center justify-center gap-x-8'>
                    <h3 className="md:text-6xl text-2xl font-hirosh font-semibold text-center">
                        Chart
                    </h3>
                    <img src={ballon} alt="Logo" className='lg:block hidden' />
                </div>

                <div className='flex items-center justify-center gap-x-3 pt-6'>
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
                <h3 className="md:text-6xl text-2xl font-hirosh font-semibold text-center">
                    Roadmap
                </h3>

                <img src={roadmap} alt="Logo" className='mt-6' />

                {/* <div className="lg:mt-12 mt-6 rounded-2xl bg-blue-200 lg:p-12 p-6">

                    <div className="h-1 w-full bg-black-50">

                    </div>

                    <div className='h-1 w-full line -translate-y-1'>

                    </div>

                    <div className="lg:flex items-baseline justify-between gap-6 lg:px-20 lg:space-y-0 space-y-6 -mt-2.5">

                        <div className="flex flex-col items-center">
                            <div
                                data-aos="zoom-in"
                                className="absolute -mt-3.5 lg:block hidden"
                            >
                                <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#A584DF" />
                                    <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#A584DF" />
                                </svg>

                            </div>

                            <div className="border-l border-white-50 lg:mt-5 mt-0 mb-3 h-14"></div>

                            <div
                                data-aos="flip-right"
                                className="border border-white-50 rounded-2xl  p-5 lg:w-72 hover:bg-purple-100"
                            >
                                <h5 className="text-2xl py-4 font-semibold">PHASE 1</h5>

                                <ul className="space-y-4 list-disc p-4">
                                    <li>Social Media set up: Twitter, Medium and Telegram</li>
                                    <li>Website development </li>
                                    <li>Community building</li>
                                    <li>Stealth Launch on Arbitrum</li>
                                    <li>Dapp V1</li>
                                    <li>White Paper V1 Release</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div
                                data-aos="zoom-in"
                                className="absolute -mt-3.5 lg:block hidden"
                            >
                                <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#A584DF" />
                                    <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#A584DF" />
                                </svg>
                            </div>

                            <div className="border-l border-white-50 lg:mt-5 mt-0 mb-3 h-14"></div>

                            <div
                                data-aos="flip-left"
                                className="border border-white-50 rounded-2xl  p-5 lg:w-72 hover:bg-purple-100"
                            >
                                <h5 className="text-2xl py-4 font-semibold">PHASE 2</h5>

                                <ul className="space-y-4 list-disc p-5">
                                    <li>CMC Listing</li>
                                    <li>CG Listing</li>
                                    <li>Dapp V2</li>
                                    <li>Platform and contract audits</li>
                                    <li>Listing on tier 2 exchange</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div
                                data-aos="zoom-in"
                                className="absolute -mt-3.5 lg:block hidden"
                            >
                                <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#A584DF" />
                                    <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#A584DF" />
                                </svg>
                            </div>

                            <div className="border-l border-white-50 lg:mt-5 mt-0 mb-3 h-14"></div>

                            <div
                                data-aos="flip-left"
                                className="border border-white-50 rounded-2xl  p-5 lg:w-72 hover:bg-purple-100"
                            >
                                <h5 className="text-2xl py-4 font-semibold">PHASE 3</h5>

                                <ul className="space-y-4 list-disc p-5">
                                    <li>Strategic Partnerships</li>
                                    <li>New Exchanges Listing CEX</li>
                                    <li>Further community growth</li>
                                    <li>Large Marketing Campaigns</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div
                                data-aos="zoom-in"
                                className="absolute -mt-3.5 lg:block hidden"
                            >
                                <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#A584DF" />
                                    <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#A584DF" />
                                </svg>
                            </div>

                            <div className="border-l border-white-50 lg:mt-5 mt-0 mb-3 h-14"></div>

                            <div
                                data-aos="flip-right"
                                className="border border-white-50 rounded-2xl  p-5 lg:w-72 hover:bg-purple-100"
                            >
                                <h5 className="text-2xl py-4 font-semibold">PHASE 4</h5>

                                <ul className="space-y-4 list-disc p-5">
                                    <li>To be Announced</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className='flex flex-col items-center justify-center gap-y-8 lg:mt-12 mt-6'>
                    <div className='flex items-center justify-center gap-x-8'>
                        <img src={fan} alt="Logo" className='lg:block hidden' />

                        <h3 className="md:text-6xl text-2xl font-hirosh font-semibold text-center">
                            JOIN US
                        </h3>
                    </div>

                    <p className='flex mx-auto text-center lg:w-1/2 font-medium'>
                        Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                    </p>

                    <button className='text-xl text-white-100 hover:text-blue-100 border-2 border-blue-100 hover:bg-white-50 rounded-2xl font-electro bg-blue-100 lg:px-8 px-4 py-3'>
                        CONNECT
                    </button>
                </div>
            </div>


            <Footer />
        </div >
    )
}
