import React from 'react'
import Image from 'next/image';

const SocialIcons = () => {
  return (
    <div className='share-box'>
    <div className='social-icon'>
      <Image src="./images/twitter.svg" width={80} height={80}></Image>
      <p>Twitter</p>
    </div>
    <div className='social-icon'>
    <Image src="./images/fb.svg" width={80} height={80}></Image>
    <p>Facebook</p>

    </div>
    <div className='social-icon'>
    <Image src="./images/linkedin.svg" width={80} height={80}></Image>
    <p>Linkedin</p>

    </div>
    <div className='social-icon'>
    <Image src="/images/email.png" width={80} height={80}></Image>
    <p>Email</p>

    </div>
  </div>
  )
}

export default SocialIcons