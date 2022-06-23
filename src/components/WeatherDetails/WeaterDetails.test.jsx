import React from 'react'
import { render } from '@testing-library/react'
import WeatherDetails from './WeatherDetails'
import '@testing-library/jest-dom/extend-expect'

test('WeatherDetails render', async () => {
  const { findByText } = render(<WeatherDetails wind={10} humidity={80} />)

  // eslint-disable-next-line testing-library/prefer-screen-queries
  const wind = await findByText(/10/)

  // eslint-disable-next-line testing-library/prefer-screen-queries
  const humidity = await findByText(/80/)

  expect(wind).toHaveTextContent('Viento: 10 km/h')
  expect(humidity).toHaveTextContent('Humedad: 80 %')
})
