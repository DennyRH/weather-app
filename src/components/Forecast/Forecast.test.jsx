import React from 'react'
import Forecast from './Forecast'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

const forecastItemList = [
  { hour: 18, state: 'sunny', temperature: 17, weekDay:'Jueves' },
  { hour: 6, state: 'cloud', temperature: 18, weekDay:'Viernes' },
  { hour: 12, state: 'fog', temperature: 18, weekDay:'Sabado' },
  { hour: 18, state: 'cloudy', temperature: 19, weekDay:'Domingo' },
  { hour: 15, state: 'rain', temperature: 17, weekDay:'Lunes' },
  { hour: 14, state: 'rain', temperature: 17, weekDay:'Martes' },
]

test('Forecast render', async () => {
  //como encontrar los items?
  // findAllByTestId nos va a permitir encontrar casa item con esa marca

  const { findAllByTestId } = render(
    <Forecast
      forecastItemList={forecastItemList} />)
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const forecastItems = await findAllByTestId('forecast-item-container')

  expect(forecastItems).toHaveLength(6)
})
