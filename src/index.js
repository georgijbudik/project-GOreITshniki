import './index.css';
import 'react-datepicker/dist/react-datepicker.css';
import './datepicker.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { App } from 'components/App';
import store, { persistor } from './redux/store';
import { Toaster } from 'react-hot-toast';
import AppThemeProvider from 'providers/ThemeProvider';
import 'configs/i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="project-GOreITshniki">
        <Provider store={store}>
          <AppThemeProvider>
            <App />
            <Toaster />
          </AppThemeProvider>
        </Provider>
      </BrowserRouter>
    </PersistGate>
  </React.StrictMode>
);
