import { useState, useEffect } from 'react'

import { Bike, BikeForm, BikeStatus } from './Bikes'
import Notification from './Notification'
import useNotification from './useNotification'


function Statistics({ total, available, booked, averagePrice }) {
  return (
    <div className='statistics'>
      <span className='statistics-title'>STATISTICS</span>
      <div>Total Bikes: <span className='bold'>{total}</span></div>
      <div>Available Bikes: <span className='bold'>{available}</span></div>
      <div> Booked Bikes: <span className='bold'>{booked}</span></div>
      <div>Average bike cost: <span className='bold'>{averagePrice.toFixed(2)}</span> UAH/hr.</div>
    </div>
  )
}


export default function App({ repository }) {
  const [bikes, setBikes] = useState([])
  const [visible, text, showNotification] = useNotification()

  useEffect(() => {
    repository.getBikes().then((bikes) => {
      setBikes(bikes)
    })
  }, [])


  function getNumberOfBikes() {
    return bikes.length
  }

  function getNumberOfBikesWithStatus(status) {
    return bikes.filter(bike => bike.status == status).length
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

    const totalPrice = bikes.reduce((accumulator, bike) => accumulator + bike.pricePerHour, 0)

    return totalPrice / numberOfBikes
  }

  function addBike(bike) {
    repository.addBike(bike).then((res) => {
      setBikes(
        [...bikes, bike]
      )
    }).catch((error) => {
      showNotification(error.message, 10000)
    })
  }

  function onBikeDelete(bike) {
    repository.deleteBike(bike).then(() => {
      setBikes(
        bikes.filter(el => el != bike)
      )
    })
  }

  function onBikeStatusChange(bike, newStatus) {
    if (bike.status != newStatus) {
      const newBike = Object.assign({}, bike, { status: newStatus })

      repository.updateBike(newBike).then(() => {
        setBikes(
          bikes.map(
            el => el == bike ? newBike : el
          )
        )
      })
    }
  }


  return (
    <>
      <header>
        <h1 className='main-title'>ADMIN.BIKE-BOOKING.COM</h1>
      </header>
      <main>
        <ul className='bikes'>
          {bikes.map((bikeInfo) => (<li key={bikeInfo.id}><Bike bikeInfo={bikeInfo} onDelete={onBikeDelete} onStatusChange={onBikeStatusChange} /></li>))}
        </ul>
        <div>
          <Notification visible={visible} text={text}/>
          <BikeForm onSubmit={addBike} />
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