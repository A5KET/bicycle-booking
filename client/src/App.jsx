import { useState } from 'react'

import Bike from './Bike'


const BikeStatus = {
  Available: 'available',
  Busy: 'ausy',
  Unavailable: 'unavailable'
}


function BikeForm({onFormSubmit}) {
  return (
    <form onSubmit={onFormSubmit}>
      
    </form>
  )
}


function Statistics({total, available, booked, averagePrice}) {
  return (
    <div className='statistics'>
      <span className='statistics-title'>STATISTICS</span>
      <div>Total Bikes: <span className='statistics-number'>{total}</span></div>
      <div>Available Bikes: <span className='statistics-number'>{available}</span></div>
      <div> Booked Bikes: <span className='statistics-number'>{booked}</span></div>
      <div>Average bike cost: <span className='statistics-number'>{averagePrice}</span>UAH/hr.</div>
    </div>
  )
}


export default function App() {
  const bikeStatusOptions = [
    'Available',
    'Busy',
    'Unavailable'
  ]
  const bikes = [
    {
      id: 0,
      name: 'bike',
      type: 'type',
      color: 'red',
      status: 'available',
      pricePerHour: 10
    }
  ]

  function getNumberOfBikes() {
    return bikes.length
  }

  function getNumberOfBikesWithStatus(status) {
    return bikes.filter((bike) => {bike.status == status}).length
  }

  function getNumberOfAvailableBikes() {
    return getNumberOfBikesWithStatus(BikeStatus.Available)
  }

  function getNumberOfBusyBikes() {
    return getNumberOfBikesWithStatus(BikeStatus.Busy)
  }

  function getAverageBikeCost() {
    const numberOfBikes = bikes.length

    if (numberOfBikes === 0) {
      return 0
    }

    let totalPrice = 0
    for (const bike of bikes) {
      totalPrice += bike.pricePerHour
    }

    return totalPrice / numberOfBikes
  }

  function onBikeStatusChange(bike, newStatus) {

  }

  return (
    <>
      <header>

      </header>
      <main>
        <ul className='bikes'>
          {bikes.map((bikeInfo) => (<li key={bikeInfo.id}><Bike bikeInfo={bikeInfo} statusOptions={bikeStatusOptions} onStatusChange={onBikeStatusChange} /></li>))}
        </ul>
        <div>
          <BikeForm />
          <Statistics 
            total={getNumberOfBikes()} 
            available={getNumberOfAvailableBikes()}
            booked={getNumberOfBusyBikes()}
            averagePrice={getAverageBikeCost()}
          />
        </div>
      </main>
    </>
  ) 
}