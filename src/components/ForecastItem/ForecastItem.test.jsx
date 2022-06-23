import React from 'react'
import ForecastItem from './ForecastItem'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test('ForecastItem render', async() => {
  //tarea. se deben renderizar los diferente textos
  const { findByText } = render(<ForecastItem hour={10} state={'sunny'} temperature={23} weekDay={'Lunes'}/>)
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const hour = await findByText(/10/)
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const temperature = await findByText(/23/)
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const weekDay = await findByText('Lunes')

  expect(hour).toHaveTextContent('10')
  expect(temperature).toHaveTextContent('23')
  expect(weekDay).toHaveTextContent('Lunes')
})
