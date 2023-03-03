import React , {useState} from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/cakes/cakeActions'

function newCakeContainer(props) {
    const [Number, setNumber] = useState(1)
    return (
    <div>
        <h2>Number of cakes:- {props.numOfCakes}</h2>
        <input type='text' value={Number} onChange={e =>setNumber(e.target.value)}/>
        <button onMouseOver={ () => props.buyCake(Number)
        }>Buy {Number} Cake</button>
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
        buyCake: () => dispatch(buyCake(Number))
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(newCakeContainer)
// connecting cake-container to redux store