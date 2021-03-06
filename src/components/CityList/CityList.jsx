import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import CityInfo from './../CityInfo'
import Weather from './../Weather'


// renderCityAndCountry se va a convertir en una funcion que reotra otra funcion
const renderCityAndCountry = eventOnClickCity => cityAndCountry => {
  const { city, country } = cityAndCountry
  return (
    <ListItem button key={city} onClick={eventOnClickCity}>
      <Grid container justifyContent='center' alignItems='center' >

        <Grid item sm={9} >
          <CityInfo city={city} country = {country} />
        </Grid>
        <Grid item sm={3} >
          <Weather temperature={10} state='sunny' />
        </Grid>

      </Grid>
    </ListItem>
  )
}

const CityList = ({ cities, onClickCity }) => {
  return (
    <List>
      {
        cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry))
      }
    </List>
  )
}

CityList.propTypes = {
  cities: PropTypes.array.isRequired,
  onClickCity: PropTypes.func.isRequired,
}

export default CityList
