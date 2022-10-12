import React from 'react'
import { Link } from 'react-router-dom'
import Facebook from '../../images/facebook.svg'
import Twitter from '../../images/twitter.svg'
import Youtube from '../../images/youtube.svg'
import Instagram from '../../images/instagram_.svg'
import Master from '../../images/Mastercard.svg'
import Visa from '../../images/Visa.svg'


const Footer = () => {
  return (
    <footer>
        <div className = 'footer-one bg-[#26282B]'>
          <div className = 'footer-one-content container mx-auto py-6 flex justify-between'>

            <div className = 'flex flex-col gap-2'>
              <h1 className = 'text-xl text-[#fff]'>Biz kimiz?</h1>

              <Link to = '/' className='text-sm text-[#fff] hover:underline'>Hakkımızda</Link>
              <Link to = '/' className='text-sm text-[#fff] hover:underline'>Kariyer</Link>
              <Link to = '/' className='text-sm text-[#fff] hover:underline'>İletişim</Link>
              <Link to = '/' className='text-sm text-[#fff] hover:underline'>Bizde Satış Yap</Link>

            </div>

            <div className = 'flex flex-col gap-2'>
              <h1 className = 'text-xl text-[#fff]'>Yardım</h1>

              <Link to = '/' className='text-sm text-[#fff] hover:underline'>Sıkça Sorulan Sorular</Link>
              <Link to = '/' className='text-sm text-[#fff] hover:underline'>Canlı Yardım</Link>
              <Link to = '/' className='text-sm text-[#fff] hover:underline'>Nasıl İade Ederim</Link>
              <Link to = '/' className='text-sm text-[#fff] hover:underline'>Nasıl Sipariş Verilir</Link>

            </div>

            <div className = 'flex flex-col gap-2'>
              <h1 className = 'text-xl text-[#fff]'>Kampanyalar</h1>

              <Link to = '/' className='text-sm text-[#fff] hover:underline'>Özel kampanyalar</Link>
              <Link to = '/' className='text-sm text-[#fff] hover:underline'>Bayram kampanyaları</Link>
              <Link to = '/' className='text-sm text-[#fff] hover:underline'>Aktif Kampanyalar</Link>
              <Link to = '/' className='text-sm text-[#fff] hover:underline'>VIP Üyelik</Link>

            </div>

            <div className = 'flex flex-col gap-2'>
              <h1 className = 'text-xl text-[#fff]'>Sosyal Medya</h1>

              <a href = '#' rel="noreferrer nofollow" className='text-sm text-[#fff] hover:underline flex items-center gap-3'>
                <img src = {Facebook}  alt = 'facebook'/>
                Facebook
              </a>
              <a href = '#' rel="noreferrer nofollow" className='text-sm text-[#fff] hover:underline flex items-center gap-3'>
                <img src = {Instagram}  alt = 'instagram'/>
                Instagram
              </a>
              <a href = '#' rel="noreferrer nofollow" className='text-sm text-[#fff] hover:underline flex items-center gap-3'>
                <img src = {Twitter}  alt = 'twitter'/>
                Twitter
              </a>
              <a href = '#' rel="noreferrer nofollow" className='text-sm text-[#fff] hover:underline flex items-center gap-3'>
                <img src = {Youtube}  alt = 'youtube'/>
                Youtube
              </a>

            </div>

            <div className = 'flex flex-col gap-2'>
              <h1 className = 'text-xl text-[#fff]'>İndirim ve yenilikler için abone olun</h1>

              <div className = 'subscribes-for-mail flex gap-2'>
                <input className = 'p-2 px-3 rounded-[4px] bg-[#F8F8F8]' placeholder='E-mail' style = {{outline: 'none'}}/>
                <button className = 'p-2 px-3 bg-[#ff0000] text-[#fff] rounded-[4px]'>
                  Abone ol
                </button>
              </div>

              <p className = 'text-[#fff]'>
                Bültene kaydolarak Gizlilik Politikası <br/>
                <a href = '#' className = 'underline'>Gizlilik Politikasını</a> kabul etmiş olursunuz
              </p>

            </div>

          </div>
        </div>

        <div className = 'footer-two bg-[#221F23]'> 
          <div className = 'footer-two-content container mx-auto py-2 flex justify-between'>
            <div className = 'footer-copy-right text-sm flex gap-5'>
              <a href = '#' className = 'text-[#fff]'>© Telif Hakkı 2022 -  testwebsite.com</a>
              <a href = '#' className = 'text-[#fff]'>Kullanım Koşulları</a>
              <a href = '#' className = 'text-[#fff]'>KVK ve Gizlilik Politikası</a>
            </div>

            <div className = 'bank-cards flex gap-4'>
              <img src = {Master} alt = 'master'/>
              <img src = {Visa} alt = 'visa'/>
            </div>

          </div>
        </div>

    </footer>
  )
}

export default Footer