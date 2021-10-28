import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { ThemeEditorProvider } from '@hypertheme-editor-pro/chakra-ui';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import Fonts from './Fonts';
import * as serviceWorker from './logic/serviceWorker';
import theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Fonts />
      <BrowserRouter>
        <HelmetProvider>
          <ColorModeScript />
          <App />
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
