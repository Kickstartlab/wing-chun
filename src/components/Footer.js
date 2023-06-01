import React from 'react'
import twitter from '../assets/twitter.png';
import telegram from '../assets/telegram.png';
import logo_2 from '../assets/logo_2.png';




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

          <a href='mailto:team@wingchuncoin.net' className='p-2 bg-white-20 rounded-lg w-10 h-10 text-center'>
            <i className="fa fa-envelope text-white-100 text-2xl -translate-y-1" aria-hidden="true"></i>
          </a>

        </div>

        <div className='text-center mt-6 mb-3'>
          <a href='mailto:team@wingchuncoin.net' className='text-blue-100'>Email: Team@wingchuncoin.net</a>
        </div>

        <p className='pb-6 text-center'>© {new Date().getFullYear()} All rights reserved by <a href={logo_2} target='_blank'>wing chun</a>.</p>
      </footer>
    </div>

  )
}
