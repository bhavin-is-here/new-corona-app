import React, { useState } from 'react'
import {HDSButton} from '@here/hds-react-components/Button';
import { HDSModal } from '@here/hds-react-components/Modal';

const CircleButton = ({share,cross}) => {

  const [modalOpen, setModalOpen] = useState(false)

  console.log("modelopen",modalOpen)
  return (
    <>
    
          <HDSButton
           icon="share-Android"
           iconCategory='discovery-sharing'
           iconRight=""
           label=""
           variant="floating"
           onClick={(e)=>setModalOpen(true)}
           size="small" />
         
           {modalOpen 
          && (<HDSModal onClose={(e) => setModalOpen(false)}></HDSModal>)}
         
    </>      
  )
}

export default CircleButton
