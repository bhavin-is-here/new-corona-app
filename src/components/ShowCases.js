import React from 'react'
import { formatNumberWithCommas } from '@/utility/helper'
import { useSelector } from 'react-redux'

const ShowCases = ({worldCase}) => {
    const selectedCountry = useSelector(state => state.latlong)

    return (
        <div className='show-cases'>
            <div className='confirm-cases' >
                <p className='confirm-case-title' >Confirmed cases</p>
                <p className='confirm-case-number'> {selectedCountry.confirmCases ? formatNumberWithCommas(selectedCountry.confirmCases) : formatNumberWithCommas(worldCase?.total_cases)}</p>
            </div>
            <div className='confirm-cases'>
                <p className='confirm-case-title'>Confirmed deaths</p>
                <p className='confirm-case-number'>{selectedCountry.confirmDeaths ? formatNumberWithCommas(selectedCountry.confirmDeaths) : formatNumberWithCommas(worldCase?.total_deaths)}</p>
            </div>
        </div>
    )
}

export default ShowCases