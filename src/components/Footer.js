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

          <div className='text-center flex mx-auto lg:w-1/2 font-medium'>
            <p>
              Don’t hesitate to subscribe to latest news about ICo markets as well as crucial financial knowledge to become successful investors globally
            </p>
          </div>


          <div id='contact' className='flex justify-center gap-6 items-center lg:mt-0 mt-6'>

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
