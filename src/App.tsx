import './App.css';
import './styles/bootstrap.min.css';
import './styles/main.css';

import { NextUIProvider } from "@nextui-org/react";
import AppRoutes from './routes/AppRoutes';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <NextUIProvider>
        <AppRoutes />
      </NextUIProvider>
    </Provider>
  );
}

export default App;
