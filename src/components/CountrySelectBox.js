import React from 'react'
import Select, { components } from 'react-select';
import {
    HDSSelectStyles,
    HDSSelectThemes,
    HDSSelectSingleOption,
    HDSSelectDropdownIndicator,
    HDSSelectClearIndicator,
} from '@here/hds-react-components/Select';

const CountrySelectBox = ({menuList,handleSelectChange}) => {
    return (
        <div className='countrySelectionBox'>
            <p className='countryTitle'>Select country:</p>
            <Select
                placeholder="Global"
                options={menuList}
                styles={HDSSelectStyles}
                theme={HDSSelectThemes}
                isClearable={true}
                defaultValue={menuList && menuList[0]}
                components={{
                    Option: HDSSelectSingleOption,
                    DropdownIndicator: HDSSelectDropdownIndicator,
                    ClearIndicator: HDSSelectClearIndicator,
                }}
                onChange={handleSelectChange} // Handle selection change
            />
        </div>
    )
}

export default CountrySelectBox