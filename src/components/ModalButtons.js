import React, { useState } from 'react'
import CircleButton from './Buttons/CircleButton'
import {HDSButton} from '@here/hds-react-components/Button';
import { HDSModal } from '@here/hds-react-components/Modal';

// import { HDSModalContextProvider } from '@here/hds-react-components';

const ModalButtons = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className='modalButtons'>
       
        <CircleButton 
        icon="share-Android"
        iconCategory="discovery-sharing"
        />
        <CircleButton 
         icon="information"
        iconCategory="core-ui"
        />
    </div>
  )
}

export default ModalButtons