import { Provider } from 'react-redux';
import { useStore } from '../stores/Root';
import '../styles/index.css';

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <div className="bg-gray-300">
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}
