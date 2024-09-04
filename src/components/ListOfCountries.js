import React from 'react'
import CountryCards from './CountryCards'

const ListOfCountries = ({menuList}) => {
  return (
    <div className='list-of-countries'>

        <div className='card-of-countries'>
          {menuList && menuList?.map((data, index) => (
            <CountryCards 
            key={index}
            index={index}
            data={data}
            />
          ))}
        </div>
      </div>
  )
}

export default ListOfCountries