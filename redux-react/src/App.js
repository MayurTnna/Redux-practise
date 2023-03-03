import { Provider } from 'react-redux';
import CakeContainer from './components/CakeContainer';
import HookCakeContainer from './components/HookCakeContainer';

import store from './redux/cakes/cakeStore';
import IceCreamContainer from './components/iceCreamContainer';
import NewCakeContainer from './components/newCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
      <HookCakeContainer/>
      <IceCreamContainer/>
      <NewCakeContainer/>
      </div>
    </Provider>
  );
}

export default App;
