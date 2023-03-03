// console.log("Hello")
// for runnning this file node filename
//* shopkeepers= reducers/
//better you use two diffrent action and action genreators botj for cske snd icecreams ; also maintan diffrent iniial state for thm
const redux= require('redux')
const createStore = redux.createStore
const applyMiddleWare=redux.applyMiddleWare
const combineReducers=redux.combineReducers 


// Loggers middle ware mentioned!
const reduxLogger = require('redux-logger')
const logger=reduxLogger.createLogger()

// (method to create two reducers!!) added hre

const BUY_CAKE='BUY_CAKE'
const BUY_ICECREAM='BUY_ICECREAM' // Action
function buyCake(){ // Action creator
    return {
        type: BUY_CAKE
        // info: 'First redux action'
    }
}
function buyIcecream(){ // Action creator
    return {
        type: BUY_ICECREAM
        // info: 'First redux action'
    }
}
// const initialState = {   //Application's state:- will pass this value as default to reducer function
//     numOfCakes : 10,
//     numOfIcecreams : 20
// }

const initialCakeState={
    numOfCakes:10
}
const initialIceCreamState={
    numOfIcecreams:20
}
 const cakeReducer = (state = initialCakeState, action) => { // one pure function which do:- (Pre-state, action)=> new state  (Reducers, as the name suggests, take in two things: previous state and an action. Then they reduce it (read it return) to one entity: the new updated instance of state. So reducers are basically pure JS functions which take in the previous state and an action and return the newly updated state. )
  switch (action.type) {


  case BUY_CAKE:

    return {
         ...state,
        numOfCakes: state.numOfCakes-1 
    }
  default:
    return state
  }
}
  const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
  
  
  
      case BUY_ICECREAM:
  
      return {
           ...state,
          numOfIcecreams: state.numOfIcecreams-1 
      }
  
    default:
      return state
    }
  }

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store= createStore(rootReducer, applyMiddleWare(logger))
// const store= createStore(reducer)// main execution starts here:-1
console.log("Current state:-", store.getState() )
const unSubscribe= store.subscribe(()=>{})
// console.log('Updated state:-',store.getState instead we used logger as middle ware to log our stuffs
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
unSubscribe()
