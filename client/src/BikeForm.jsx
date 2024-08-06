export default function BikeForm({ onSubmit }) {
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
