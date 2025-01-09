import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
        <img width={150} src={assets.logo} alt="" />
        <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright @Aryan | All right reserved.</p>
        <div className='flex gap-2.5'>
        <div>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
  <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
    <img width={35} src={assets.facebook_icon} alt="Facebook" />
  </a>
  <a href="https://x.com/aryan_singh1220" target="_blank" rel="noopener noreferrer">
    <img width={35} src={assets.twitter_icon} alt="Twitter" />
  </a>
  <a href="https://www.instagram.com/18aryansingh/" target="_blank" rel="noopener noreferrer">
    <img width={35} src={assets.instagram_icon} alt="Instagram" />
  </a>
  {/* <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
    <img width={35} src={assets.linkedin_icon} alt="LinkedIn" />
  </a>
  <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
    <img width={35} src={assets.github_icon} alt="GitHub" />
  </a> */}
</div>

</div>

        </div>
    </div>
  )
}

export default Footer