import { HDSModal } from '@here/hds-react-components'
import React from 'react'
import HDSPortal from './HDSPortal'


const Modal = ({defaultModalProps,isOpen,onClose}) => {
  return (
    <HDSPortal>
    <HDSModal
        header={<div>Modal Heading</div>}
        body={<div>Custom Modal Content</div>}
        onClose={onClose}
        style={{  ...defaultModalProps }}
        
    />
  </HDSPortal>
  )
}

export default Modal