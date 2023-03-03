import { Provider } from 'react-redux';
import CakeContainer from './components/CakeContainer';
import HookCakeContainer from './components/HookCakeContainer';

import store from './redux/cakes/cakeStore';
import IceCreamContainer from './components/iceCreamContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
      <HookCakeContainer/>
      <IceCreamContainer/>
      </div>
    </Provider>
  );
}

export default App;
