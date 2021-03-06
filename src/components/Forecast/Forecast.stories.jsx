import React from 'react'
import Forecast from './Forecast'

export default {
  title: 'Forecast',
  component: Forecast
}
const forecastItemList = [
  { hour: 18, state: 'sunny', temperature: 17, weekDay:'Jueves' },
  { hour: 6, state: 'cloud', temperature: 18, weekDay:'Viernes' },
  { hour: 12, state: 'fog', temperature: 18, weekDay:'Sabado' },
  { hour: 18, state: 'cloudy', temperature: 19, weekDay:'Domingo' },
  { hour: 15, state: 'rain', temperature: 17, weekDay:'Lunes' },
  { hour: 14, state: 'rain', temperature: 17, weekDay:'Martes' },
]

export const ForecastExample = () => (<Forecast forecastItemList={forecastItemList} />)
