import React, { useState } from 'react'
import SocialButton from './Buttons/SocialButton'
import AboutButton from './Buttons/AboutButton';

// import { HDSModalContextProvider } from '@here/hds-react-components';

const ModalButtons = () => {
  const [socialModalOpen, setSocialModalOpen] = useState(false)

  return (
    <div className='modalButtons'>
       
        <SocialButton 
        icon="share-Android"
        iconCategory="discovery-sharing"
        />
        <AboutButton
        icon="information"
        iconCategory="core-ui"
        />
    </div>
  )
}

export default ModalButtons