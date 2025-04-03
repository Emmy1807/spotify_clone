import React from 'react'
import style from './SideBar.module.css'
import Image from 'next/image'

const SideBar = () => {
  return (
    <div className={style.SideBar}>
        <div className={style.Lib}>
            
            <Image src='/images (5).png' width={20} height={20}
             alt="" />
        
            <h1>Your Library</h1>
        
            <div className={style.plus}>
            <img src="/icons8-plus-48 (1).png" alt="" />
            </div>

        </div>
        <div className={style.second}>
        <div className={style.sec}>
          <h2>Create your first playlist</h2>
          <h3>it's easy,we'll help you</h3>

          <button>
            <h4>Create playlist</h4>
          </button>
      </div>

      <div className={style.third}>
        <h1>Let's find a podcast to follow</h1>
        <h2>we'll keep you updated on new episodes</h2>
        <button>
          <h3>Browse podcasts</h3>
        </button>
      </div>
      </div>

      <div className={style.fourth}>
        <div className={style.text}>
          <h1>Legal</h1>
          <h1>Safety & Privacy Center</h1>
          <h1>Privacy Policy</h1>
          <h1>Cookies</h1>
        </div>
        <div className={style.texts}>
          <h1>About Ads</h1>
          <h1>Accessibility</h1>
        </div>
        <div className={style.cookies}>
          <h1>Cookies</h1>
        </div>
        <div className={style.but}>
          <button>
            <img src="/icons8-world-wide-web-50.png" width={20} height={20} alt="" />
            <h1>English</h1>
          </button>
        </div>
      </div>
      
    </div>
  )
}

export default SideBar
