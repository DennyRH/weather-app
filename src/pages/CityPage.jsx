import React from 'react'
// import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import AppFrame from './../components/AppFrame'
import CityInfo from './../components/CityInfo'
import Weather from './../components/Weather'
import WeatherDetails from './../components/WeatherDetails'
import ForecastChart from './../components/ForecastChart'
import Forecast from './../components/Forecast'

const dataExample =[
  {
    'dayHour': 'Jue 18',
    'min': 14,
    'max': 22,
  },
  {
    'dayHour': 'Vie 6',
    'min': 18,
    'max': 27,
  },
  {
    'dayHour': 'Sab 12',
    'min': 18,
    'max': 28,
  },
  {
    'dayHour': 'Dom 18',
    'min': 18,
    'max': 25,
  },
  {
    'dayHour': 'Lun 15',
    'min': 15,
    'max': 22,
  },
  {
    'dayHour': 'Mar 14',
    'min': 12,
    'max': 19,
  },
]

const forecastItemListExample = [
  { hour: 18, state: 'sunny', temperature: 17, weekDay:'Jueves' },
  { hour: 6, state: 'cloud', temperature: 18, weekDay:'Viernes' },
  { hour: 12, state: 'fog', temperature: 18, weekDay:'Sabado' },
  { hour: 18, state: 'cloudy', temperature: 19, weekDay:'Domingo' },
  { hour: 15, state: 'rain', temperature: 17, weekDay:'Lunes' },
  { hour: 14, state: 'rain', temperature: 17, weekDay:'Martes' },
]

const CityPage = () => {
  const city = 'Buenos Aires'
  const country = 'Argentina'
  const state = 'cloudy'
  const temperature = 20
  const humidity = 80
  const wind = 5
  const data = dataExample
  const forecastItemList = forecastItemListExample

  return (
    <AppFrame>
      <Grid container justifyContent='center' direction='column' spacing={2}>
        <Grid container item xs={12} justifyContent='center' alignItems='flex-end'>
          <CityInfo city={city} country={country} />
        </Grid>

        <Grid container item xs={12} justifyContent='center' alignItems='space-betwen'>
          <Weather state={state} temperature={temperature} />
          <WeatherDetails humidity={humidity} wind={wind} />
        </Grid>

        <Grid item>
          <ForecastChart data={data} />
        </Grid>

        <Grid>
          <Forecast forecastItemList={forecastItemList} />
        </Grid>
      </Grid>
    </AppFrame>
  )
}

export default CityPage
