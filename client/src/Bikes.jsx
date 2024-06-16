import { capitalize } from './string'


export const BikeStatus = {
  Available: 'available',
  Busy: 'busy',
  Unavailable: 'unavailable'
}


export function BikeForm({onSubmit}) {
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const data = {
      name: form.name.value,
      type: form.type.value,
      color: form.color.value,
      wheelSize: Number(form.wheelSize.value),
      pricePerHour: Number(form.price.value),
      id: form.id.value,
      description: form.description.value,
      status: BikeStatus.Available
    }
    onSubmit(data)
  }

  return (
    <form className='bike-form' onSubmit={handleSubmit}>
      <input className='bike-form-row' id='name' type='text' minLength={6} placeholder='Name' required></input>
      <input className='bike-form-row' id='type' type='text' minLength={6} placeholder='Type' required></input>
      <input className='bike-form-row' id='color' type='text' minLength={3} placeholder='Color' required></input>
      <input className='bike-form-row' id='wheelSize' type='number' placeholder='Wheel size' required></input>
      <input className='bike-form-row' id='price' type='number' placeholder='Price' required></input>
      <input className='bike-form-row' id='id' type='text' minLength={6} placeholder='ID (slug): XXXXXXXXXXXXX' required></input>
      <textarea className='bike-form-row bike-form-description' id='description' type='text' minLength={6} placeholder='Description' required></textarea>
      <button className='bike-form-button' type='submit'>SAVE</button>
      <button className='bike-form-button' type='reset'>CLEAR</button>
    </form>
  )
}


export function Bike({bikeInfo, onDelete, onStatusChange}) {
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
            <select className='bike-info-status-select' onChange={onStatusSelectChange}>
              {Object.values(BikeStatus).map((option) => (<option value={option} selected={option == bikeInfo.status} className='bike-info-status-option'>{capitalize(option)}</option>))}
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