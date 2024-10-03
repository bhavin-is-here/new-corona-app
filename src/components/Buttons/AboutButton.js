import React, { useState } from 'react'
import {HDSButton} from '@here/hds-react-components/Button';
import { HDSModal } from '@here/hds-react-components/Modal';
import SocialIcons from '../modals/SocialIcons';
import AboutModal from '../modals/AboutModal';

const AboutButton = (props) => {
  console.log("check")

  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>

          <div data-theme="hds-web-product-light-theme" data-styles="hds" className='socialIcons'>
          <HDSButton
           icon={props.icon}
           iconCategory={props.iconCategory}
           iconRight=""
           label=""
           variant="floating"
           onClick={(e)=>setModalOpen(true)}
           size="small" />
         
           {modalOpen 
           && (
            <HDSModal
            header={<h4>About</h4>}
            // hide-header={true}
            hide-footer={true}
            body={ <AboutModal/>}
            className="custom-modal"
            onClose={(e) => setModalOpen(false)}>     
            </HDSModal>
             )} 
</div>

         
    </>      
  )
}

export default AboutButton
