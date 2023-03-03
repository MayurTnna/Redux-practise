import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/cakes/cakeActions'

function CakeContainer(props) {
  return (
    <div>
        <h2>Number of cakes:- {props.numOfCakes}</h2>
        <button onMouseOver={props.buyCake
        }>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = state =>{      // if we want to use access redux states can be done by defining this! same like useSelector Hook
    return {
        numOfCakes: state.numOfCakes
    }
}
const mapDispatchToProps = dispatch => {   // as dispatching states, same as useDispatch Hook 
    return{
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(CakeContainer)
// connecting cake-container to redux store