import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import theme from './theme';
import { messages as deMessages } from './translations/de/messages';
import { messages as enMessages } from './translations/en/messages';
import { messages as ukMessages } from './translations/uk/messages';
import { messages as viMessages } from './translations/vi/messages';

i18n.load({
  en: enMessages,
  de: deMessages,
  uk: ukMessages,
  vi: viMessages,
});
i18n.activate('uk');

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      {/* <ThemeEditorProvider> */}
      <BrowserRouter>
        <HelmetProvider>
          <ColorModeScript />
          <I18nProvider i18n={i18n}>
            <App />
          </I18nProvider>
        </HelmetProvider>
      </BrowserRouter>
      {/* </ThemeEditorProvider> */}
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();
