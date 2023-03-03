import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux/cakes/cakeActions'

function HookCakeContainer() {
  const numOfCakes =  useSelector(state => state.numOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
        <h2>Number of Cakes currently available:-{numOfCakes}</h2>
        <button onClick={() => dispatch(buyCake
          ())}>Buy it now!</button>
    </div>
  )
}

export default HookCakeContainer