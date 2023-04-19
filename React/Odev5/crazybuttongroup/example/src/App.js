import React from 'react'

import {Button } from 'crazybuttongroup'
import 'crazybuttongroup/dist/index.css'


const App = () => {
  return(
    <>
   <Button text='Primary Button' type='primary'></Button>
   <Button text='Default Button' type='default'></Button>
   <Button text='Dashed Button' type='dashed'></Button>
   <Button text='Text Button' type='text'></Button>
   <Button text='Link Button' type='link'></Button>
   </>
   
  )
}

export default App
