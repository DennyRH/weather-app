import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { IconContext } from 'react-icons'
import IconState, { validValues} from './../IconState'


const ForecastItem = ({ weekDay, hour, state, temperature }) => {
  return (
    <Grid container
      direction='column'
      justifyContent='center'
      alignItems='center'>
      <Grid item>
        <Typography>{weekDay}</Typography>
      </Grid>
      <Grid>
        <Typography>{hour}</Typography>
      </Grid>
      <Grid>
        <IconContext.Provider value={{ size:'5em'}}>
          <IconState state={state}/>
        </IconContext.Provider>
      </Grid>
      <Grid>
        <Typography>{temperature} °c</Typography>
      </Grid>

    </Grid>
  )
}

ForecastItem.propTypes = {
  weekDay: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  state: PropTypes.oneOf(validValues).isRequired,
  temperature: PropTypes.number.isRequired,

}

export default ForecastItem
