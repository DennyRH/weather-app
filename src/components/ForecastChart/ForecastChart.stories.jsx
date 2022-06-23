import React from 'react'
import ForecastChart from './ForecastChart'

export default {
  title: 'ForecastChart',
  component: ForecastChart
}

// dia y hora "DDD HH"
// 3 posiciones para el dia y 2 posiciones para la hora
// min: temperatura minima
// max. temperatura maxima
const data =[
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

export const ForecastChartExample = () => (
  <ForecastChart data={data} />
)
