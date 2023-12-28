import { useState } from 'react'

import { capitalize } from './string'


export default function Bike({bikeInfo, statusOptions, onStatusChange}) {
  const [bikeStatus, setBikeStatus] = useState(bikeInfo.status)

  function onStatusSelectChange(event) {
    const selectedStatus = event.target.options[event.target.selectedIndex].value.toLowerCase();

    setBikeStatus(selectedStatus)
    onStatusChange(bikeInfo, selectedStatus)
  }

  return (
    <>
      <div className={`bike-info ${bikeStatus}`}bike-info >
        <div>
          <span className='bike-info-name uppercase'>{bikeInfo.name}</span> - <span className='bike-info-type uppercase'>{bikeInfo.type} ({bikeInfo.color})</span><br />
          <span className='bike-info-id'>ID: {bikeInfo.id}</span>
          <div className='bike-info-status'>
            STATUS:
            <select className='bike-info-status-select' onChange={onStatusSelectChange}>
              {statusOptions.map((option) => (<option value={option} className='bike-info-status-option'>{capitalize(option)}</option>))}
            </select>
          </div>
        </div>
        <div className='bike-info-right-column'>
          <button className='bike-info-button'><img src='x.svg' className='bike-info-button-image'></img></button>
          <span className='bike-info-price'>{bikeInfo.pricePerHour} UAH/hr.</span>
        </div>
      </div>
    </>
  )
}