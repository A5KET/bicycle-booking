import { capitalize } from './string'
import { BikeStatus } from './common.js'


export default function Bike({ bikeInfo, onDelete, onStatusChange }) {
  function onStatusSelectChange(event) {
    const selectedStatus = event.target.options[event.target.selectedIndex].value.toLowerCase()

    onStatusChange(bikeInfo, selectedStatus)
  }

  function onDeleteClick() {
    onDelete(bikeInfo)
  }

  return (
      <div className={`bike-info ${bikeInfo.status}`}>
        <div>
          <span className='bike-info-name uppercase'>{bikeInfo.name}</span> - <span className='bike-info-type uppercase'>{bikeInfo.type} ({bikeInfo.color})</span><br />
          <span className='bike-info-id'>ID: {bikeInfo.id}</span>
          <div className='bike-info-status'>
            STATUS:
            <select className='bike-info-status-select' onChange={onStatusSelectChange} value={bikeInfo.status}>
              {Object.values(BikeStatus).map((option) => (<option key={option} value={option} className='bike-info-status-option'>{capitalize(option)}</option>))}
            </select>
          </div>
        </div>
        <div className='bike-info-right-column'>
          <button className='bike-info-button' onClick={onDeleteClick}><img src='x.svg' className='bike-info-button-image'></img></button>
          <span className='bike-info-price'>{bikeInfo.pricePerHour.toFixed(2)} UAH/hr.</span>
        </div>
      </div>
  )
}