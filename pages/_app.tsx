import '../styles/globals.css';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import store from '../redux/store';

interface IProps {}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
