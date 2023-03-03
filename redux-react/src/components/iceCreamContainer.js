import React from 'react'
import { connect } from 'react-redux'
// import { BUY_ICECREAM } from '../redux/iceCream/iceCreamActions'
import { BUY_ICECREAM } from '../redux/iceCream/iceCreamType'

function iceCreamContainer(props) {
  return (
    <div>
        <h2>Number of icecreams:- {props.numOfIceCream}</h2>
        <button onMouseOver={props.BUY_ICECREAM
        }>Buy icecreams</button>
    </div>
  )
}

const mapStateToProps = state =>{      // if we want to use access redux states can be done by defining this! same like useSelector Hook
    return {
        numOfIceCream: state.numOfIceCream
    }
}
const mapDispatchToProps = dispatch => {   // as dispatching states, same as useDispatch Hook 
    return{
        BUY_ICECREAM: () => dispatch(BUY_ICECREAM())
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(iceCreamContainer)
// connecting cake-container to redux store