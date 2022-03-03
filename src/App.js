import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import store from './store/store';
import AppRouter from './components/AppRouter';

// import MainPage from '../src/components/MainPage/MainPage'

function App() {
  console.log(process.env.PUBLIC_URL);
  return (
    <BrowserRouter basename="/hacker-news-redux">
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
