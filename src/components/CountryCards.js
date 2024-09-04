import React from 'react'
import { formatNumberWithCommas } from '@/utility/helper'

const CountryCards = ({ data, index }) => {
    return (
        <div className='country-data' key={index}>
            <p className='country-name'>{data.label}</p>
            <div className='case-deaths'>
                <div className='cases'>
                    <p className='subtitle-number'>{formatNumberWithCommas(data.total_cases)}</p>
                    <p className='subtitles'>CASES</p>
                </div>
                <div className='deaths'>
                    <p className='subtitle-number'>{formatNumberWithCommas(data.total_deaths)}</p>
                    <p className='subtitles'>DEATHS</p>
                </div>
            </div>
        </div>
    )
}

export default CountryCards