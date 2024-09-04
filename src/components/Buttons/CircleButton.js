import React, { useState } from 'react'
// import '@here/hds-components/button';
import {HDSButton} from '@here/hds-react-components/Button';
import {HDSModalContextProvider, useModal} from '@here/hds-react-components';
import { action } from '@storybook/addon-actions';  // Import action
import { createPortal } from 'react-dom';
import { HDSModal } from '@here/hds-react-components/Modal';
import Modal from '../modals/Modal';



const CircleButton = ({share,cross}) => {
  const { addModal } = useModal();
  const [modalOpen, setModalOpen] = useState(false)

  const modalHandler = (e) =>{

    // if(e && e?.from){
      setModalOpen(false)
    // }
  }
  const openModal = ()=>{
    addModal({
      iconColor: '--hds-warning',
      header: <div>Modal Heading</div>,
      body: <div>Custom Modal Content</div>,
      onClose: () =>action('Event: onClose'),
      onChange :(e)=> (modalHandler(e)),
      icon: 'alert',
    })
  }

  const defaultModalProps = {
    "--hds-modal-desktop-large-grid-column": "4/10",
    "--hds-modal-body-height": "400px"
}

 console.log("modelopen",modalOpen)
  return (
    <>
    
          <HDSButton
           icon="share-Android"
           iconCategory='discovery-sharing'
           iconRight=""
           label=""
           variant="floating"
           onClick={()=>setModalOpen(true)}
           size="small" />
         
          {/* {modalOpen && 
          <Modal
          isOpen={modalOpen}
          defaultModalProps={defaultModalProps}
          onClose={modalHandler}
          />} */}

    </>      
  )
}

export default CircleButton
