import React from 'react'
import CircleButton from './Buttons/CircleButton'
import { HDSModalContextProvider } from '@here/hds-react-components';

const ModalButtons = () => {
  return (
    <div className='modalButtons'>
       <HDSModalContextProvider>
        <CircleButton/>
        </HDSModalContextProvider>
    </div>
  )
}

export default ModalButtons