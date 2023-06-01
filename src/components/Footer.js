import React from 'react'
import twitter from '../assets/twitter.png';
import telegram from '../assets/telegram.png';



export default function Footer() {
  return (
    <div className="font-montserat py-5">
      <footer data-aos="zoom-in" className='container mx-auto lg:px-20 font-montserat px-5'>

        <div id='contact' className='flex justify-center gap-6 items-center'>

          <a href='https://twitter.com/Wing_Chun_Coin'>
            <img src={twitter} alt="Twitter" className='' />
          </a>

          <a href='https://t.me/wing_chun_coin'>
            <img src={telegram} alt="Facebook" className='' />
          </a>

        </div>

        <p className='pt-8 pb-6 text-center'>© {new Date().getFullYear()} All rights reserved by wing chun.</p>
      </footer>
    </div>

  )
}
