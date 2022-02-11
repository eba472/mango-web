import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import 'antd/dist/antd.min.css';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

import common_mn from './translations/mn/common.json';
import common_en from './translations/en/common.json';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      common: common_en,
    },
    mn: {
      common: common_mn,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
