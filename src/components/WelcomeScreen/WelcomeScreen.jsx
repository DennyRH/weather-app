import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Clouds from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'

const WelcomeScreen = ({ children }) => {
  const myRefDiv = useRef(null) //valor inicial
  const [vanta, setVanta] = useState(0) // vanta va a estar inicializado en '0'
  // en la primera renderizacion 'muRefDif.current' es igual
  // a 'nulo', el valor inicial
  console.log('myRefDiv.current', myRefDiv.current)

  // la funcion de  useEffect se va a invocar ante la segunda renderizacion
  //en ese punto ya va a contener un valor 'myRefDiv.curent'
  useEffect(() => {
    console.log('myRefDiv.current (en useEffect)', myRefDiv.current)

    if (!vanta) {
      setVanta(Clouds({
          THREE,
          el: myRefDiv.current
        }))

      console.log('establezco vanta a un valor direfente de 0')
    }

    return () => {
      if (vanta) {
        vanta.destroy()
        console.log('libero los recursos')
      }
    }
  }, [vanta])
  return (
    <div className='full' ref={myRefDiv}>
      {children}
    </div>
  )
}

WelcomeScreen.propTypes = {
  children: PropTypes.node,
}

export default WelcomeScreen
