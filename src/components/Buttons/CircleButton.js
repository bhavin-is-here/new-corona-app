import React, { useState } from 'react'
// import '@here/hds-components/button';
import {HDSButton} from '@here/hds-react-components/Button';
import AboutModals from '../modals/AboutModals';

const CircleButton = ({share,cross}) => {

  const [modalOpen, setModalOpen] = useState(false)

  const modalHandler = (e) =>{

    
      setModalOpen(false)

  }
  

 console.log("modelopen",modalOpen)
  return (
    <>

           {/* <HDSButton
            className='modalBtn'
           icon="information"
           iconCategory='core-ui'
           iconRight=""
           label=""
           variant="floating"
           onClick={()=>setInformationModalOpen(true)}
           size="small" /> */}
    
           <HDSButton
          className='modalBtn'
           icon="share-Android"
           iconCategory='discovery-sharing'
           iconRight=""
           label=""
           variant="floating"
           onClick={()=>setModalOpen(true)}
           size="small" />
    
            {modalOpen &&  <AboutModals onChange={modalHandler} />}
         
           

    </>      
  )
}

export default CircleButton
