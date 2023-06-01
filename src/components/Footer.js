import React from 'react'
import twitter from '../assets/twitter.png';
import telegram from '../assets/telegram.png';
import discord from '../assets/discord.png';
import youtube from '../assets/youtube.png';




export default function Footer() {
  return (
    <div className="font-montserat py-5">
      <footer data-aos="zoom-in" className='container  mx-auto lg:px-20 font-montserat px-5'>

        <div className="flex flex-col items-center justify-center gap-y-8 mx-auto">

          <h2 className='md:text-4xl text-2xl font-montserat font-semibold text-blue-100'>
            Don't miss out, Stay updated
          </h2>

          <div className="py-1 pl-6 pr-1 lg:w-6/12 w-full lg:space-y-0 space-y-5 lg:flex items-center justify-between lg:border-2 border-blue-100 rounded-full">
            <input type="email" placeholder="Enter your email" id="email" required="" className="lg:p-0 p-5 lg:rounded-none rounded-full focus:ring-0 focus:outline-none lg:w-7/12 w-full bg-white-50 lg:border-0 border-2 border-blue-100" />

            <button className=' lg:px-12 px-2 lg:py-3 py-2 bg-blue-100 rounded-full text-white-100'>
              Subcribe
            </button>
          </div>

          <div className='text-center flex mx-auto lg:w-1/2 font-medium'>
            <p>
              Don’t hesitate to subscribe to latest news about ICo markets as well as crucial financial knowledge to become successful investors globally
            </p>
          </div>


          <div className='flex justify-center gap-6 items-center lg:mt-0 mt-6'>

            <a href='https://twitter.com/Wing_Chun_Coin'>
              <img src={twitter} alt="Twitter" className='' />
            </a>

            <a href='https://t.me/wing_chun_coin'>
              <img src={telegram} alt="Facebook" className='' />
            </a>

          </div>

        </div>

        <p className='pt-12 pb-6 text-center'>© {new Date().getFullYear()} All rights reserved by wing chun.</p>
      </footer>
    </div>

  )
}
