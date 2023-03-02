// console.log("Hello")
// for runnning this file node filename
const redux= require('redux')
const createStore = redux.createStore

const BUY_CAKE='BUY_CAKE'
function buyCake(){ // Action creator
    return {
        type: BUY_CAKE
        // info: 'First redux action'
    }
}
const initialState = {   //Application's state:- will pass this value as default to reducer function
    numOfCakes : 10
}
 const reducer = (state = initialState, action) => { // one pure function which do:- (Pre-state, action)=> new state
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
const store= createStore(reducer)// main execution starts here:-1
console.log("Current state:-", store.getState() )
const unSubscribe= store.subscribe(()=>{console.log('Updated state:-',store.getState())})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unSubscribe()
