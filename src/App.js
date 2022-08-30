import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Nav from './components/Nav';
import store from './redux/configstore';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    </Provider>

  );
}

export default App;
