import React from 'react'
import '../css/resetpassword.css'
import { cloudName, logo, login } from '../config/cloudinaryConfig';
import { Image, Transformation } from 'cloudinary-react'
import { Link } from 'react-router-dom'
import LogIn from './LogIn'

const ResetPassword = () => {
  return (
    <div className='home'>
      <div className="logo">
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
   <div className="container1">
    <h2>Reset Password?</h2>
    <p>A password reset link will be sent to your email. Kindly check </p>
    <p>your email to create new password.</p>
    <div className="input1">
            <img className='img' src='https://www.iconpacks.net/icons/1/free-mail-icon-142-thumb.png' alt="" />
            <input type="email" placeholder='Enter Your Email' />
        </div>
       <Link to='/confirmpassword'> <button className='btn2'>Proceed</button></Link>
   </div>
      </div>
    </div>
  )
}

export default ResetPassword