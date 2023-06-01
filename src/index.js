import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {DarkModeProvider} from "./provider/DarkModeProvider";
import {LanguageProvider} from "./provider/LanguageProvider";

import global_en from './translations/en/global.json';
import global_pl from './translations/pl/global.json';
import i18next from "i18next";
import {I18nextProvider} from "react-i18next";

i18next.init({
    interpolation: {escapeValue: false},
    lng: "en",
    resources: {
        en: {
            global: global_en,
        },
        pl: {
            global: global_pl,
        },
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <LanguageProvider>
          <I18nextProvider i18n={i18next}>
              <DarkModeProvider>
                  <App />
              </DarkModeProvider>
          </I18nextProvider>
      </LanguageProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

