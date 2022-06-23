import React from "react"
import { render } from "@testing-library/react"
import CityInfo from "./CityInfo" // SUT: subject under testing ( objeto de testeo)
import '@testing-library/jest-dom/extend-expect'

test("Cityinfo render", async () => {
    // AAA
    // Arrange
    // Act
    const city = "Buenos Aires"
    const country = "Argentina"
    // Render: renderiza el componente y retorna una sere de funciones de utilidad
    // En este caso utilizamos "findAllByRole" para "consultar" a nuestro componente
    // vamos a analizar el estado de Assert
    const { findAllByRole } = render(<CityInfo city={city} country={country} />)
    // Assert
    // findAllByRole nos va buscar (en este caso ) todos los componentes que sean
    // "heading" => H1, H2, H3.. etc
    // eñ resultado es un array de componentes (ctyAnd CountryCompoents)

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const cityAndCountryComponents = await findAllByRole("heading")

    // cuando el test va a ser correcto?
    // definicion
    // cuando el primer elementeo (heading) se encuentre la ciudad buenos aires
    // y cuando en el segundo elemento se encuentre el pais argentina
    expect(cityAndCountryComponents[0]).toHaveTextContent(city)
    expect(cityAndCountryComponents[1]).toHaveTextContent(country)
})
