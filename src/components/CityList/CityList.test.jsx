import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CityList from './CityList'// SUT: subject under testing ( objeto de testeo)

const cities = [
  { city: 'Buenos Aires', country: 'Argentina'},
  { city: 'Bogotá', country: 'Colombia'},
  { city: 'Madrid', country: 'España'},
  { city: 'Ciudad de México', country: 'México'},
]

test('CityList renders', async () => {
  // AAA Arrange Act Assert

  const { findAllByRole } = render(<CityList cities={ cities } />)

  // eslint-disable-next-line testing-library/prefer-screen-queries
  const items = await findAllByRole('button')

  expect(items).toHaveLength(4)
 })

 test('CityList click on item', async () => {
  // debemos simular una accion del usuario click en un item
  // para eso vamos a utilizar una funcion 'mock'
  const fnClickOnItem = jest.fn()

  const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem} />)
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const items = await findAllByRole('button')

  // ahora, para simular la accion, vamos a utilizar fireEvent
  // FireEvent es parte de la libreria

  fireEvent.click(items[0])
  // ahor q tuvo q suceder
  // se debio llamar a la funcion fnCliclOnItem UNA unica vez
  expect(fnClickOnItem).toHaveBeenCalledTimes(1)
 })
