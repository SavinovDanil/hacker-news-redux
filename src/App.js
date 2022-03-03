import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import store from './store/store';
import AppRouter from './components/AppRouter';

// import MainPage from '../src/components/MainPage/MainPage'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
