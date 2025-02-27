import React from 'react'
import '../css/confirmpassword.scss'
import { cloudName, logo } from '../config/cloudinaryConfig'
import { Image, Transformation } from 'cloudinary-react'
import { Link } from 'react-router-dom'
import LogIn from './LogIn'

const ConfirmPassword = () => {
  return (
    <div className='home'>
      <div className="mainlogo">
      <Image className='logo1' cloudName={cloudName} publicId={logo.logo1}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
      </div>
      <div className="coin">
      <Image className='logo2' cloudName={cloudName} publicId={logo.logo2}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
      </div>
      <div className="text1">
        <h2>Forge your financial future </h2>
        <h2>We will hammer out the details</h2>
        <p>So you can spend more time doing the things you love!</p>
      </div>
      <span className='FAQ'>
        <Link>Terms and Conditions</Link> | <Link>FAQs</Link> | <Link>Contact Us</Link>
      </span>
      <div>
   <div className="container3">
    <div className="input3">
            <img className='img' src='https://www.iconpacks.net/icons/4/free-icon-password-11938.png' alt="" />
            <input type="password" placeholder='Enter New Password' />
        </div>
    <div className="input3">
            <img className='img' src='https://www.iconpacks.net/icons/4/free-icon-password-11938.png' alt="" />
            <input type="password" placeholder='Confirm New Password' />
        </div>
        <button className='btn2'>Change Password</button>
   </div>
      </div>
    </div>
  )
}

export default ConfirmPassword