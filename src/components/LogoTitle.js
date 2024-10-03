import React from 'react'
import {HDSLogo} from '@here/hds-react-components/Logo';

const LogoTitle = () => {
  return (
    <div className='logoBox'>
        <HDSLogo size="medium"></HDSLogo>
        {/* <hds-icon name="HERE-logo" category="core-ui" icon-style="outline" size="50px"></hds-icon> */}
        {/* <p className='headerTitle'>COVID-19 Visualization</p> */}
        <p className='headerTitle'>Tracking Coronavirus COVID-19</p>

      </div>

  )
}

export default LogoTitle