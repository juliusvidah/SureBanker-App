// 
import React, { useState } from 'react'
import '../css/login.css'
import { Link } from 'react-router-dom';

const SignIn = () => {

    const[action,setAction] = useState('Sign up');
  return (
    <div className='container'>
      <div className="header">
        {/* <div className="text">{action}</div>
        <div className="underline"></div> */}
            <div className="submit-container">
        <div className={action==='Login'?'submit gray':'submit'} onClick={()=>{setAction('Sign up')}}>Sign Up</div>
        <div className={action==='Sign up'?'submit gray':'submit'} onClick={()=>{setAction('Login')}}>Log In</div>
      </div>
      </div>
      <div className="inputs">
        {action==='Login'?<div></div>:   <div className="input">
            <img className='img' src='https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png' alt="" />
            <input type="text" placeholder='First Name' />
        </div>}
        {action==='Login'?<div></div>:   <div className="input">
            <img className='img' src='https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png' alt="" />
            <input type="text" placeholder='Last Name' />
        </div>}
        {action==='Login'?<div></div>:   <div className="input">
            <img className='img' src='https://www.iconpacks.net/icons/1/free-phone-icon-519-thumb.png' alt="" />
            <input type="number" placeholder='Phone' />
        </div>}
     
        <div className="input">
            <img className='img' src='https://www.iconpacks.net/icons/1/free-mail-icon-142-thumb.png' alt="" />
            <input type="email" placeholder='Email' />
        </div>
        <div className="input">
            <img className='img' src='https://www.iconpacks.net/icons/4/free-icon-password-11938.png' alt="" />
            <input type="password" placeholder='Password' />
        </div>
      </div>
      {action==='Login'?<div></div>:   <div className="btn1"><p>By continuing, you agree to </p><p>    Terms of Use and Privacy Policy.</p></div>}
      {action==='Login'?<div></div>:   <div className="btn1"><Link to='/Dashboard'><button>SignUp <img className='img' src='https://res.cloudinary.com/degnky4ab/image/upload/v1721123398/yjonecziohiyleolcrx5.svg' alt="" /></button></Link></div>}
      {action==='Sign up'?<div></div>:<div className="forgot-password">Forgotten password? <Link to='/resetpassword'><span>Click here</span></Link></div>}
      {action==='Sign up'?<div></div>:<div className="btn2"><button>Login<img className='img' src='https://res.cloudinary.com/degnky4ab/image/upload/v1721123398/yjonecziohiyleolcrx5.svg' alt="" /></button></div>}
    </div>
  )
}

export default SignIn