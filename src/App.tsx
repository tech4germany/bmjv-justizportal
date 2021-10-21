import { Box } from '@chakra-ui/react';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Route, Switch, useLocation } from 'react-router-dom';
import FooterSmallWithSocial from './components/shared/Footer';
import { MenuWithSubnavigation } from './components/shared/MainMenu';
import { dynamicActivate } from './translations/i18n';
import { MMGraph } from './logic/KMParser';
import { usePersistedState } from './logic/PersistedState';
import { UserState } from './logic/UserState';
import { Bryter } from './pages/BRYTER';
import { ExitJourney } from './pages/ExitJourney';
import { Home } from './pages/Home';
import { NextSteps } from './pages/NextSteps';
import { PossibleEntitlements } from './pages/PossibleEntitlements';
import { SolutionExplorer } from './pages/SolutionExplorer';
import { ZPOInformation } from './pages/ZPOInformation';
import { homeURL } from './Const';
import { Disclaimer } from './pages/disclaimer';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const App = () => {
  const query = useQuery();
  const mmobject = new MMGraph();
  mmobject.initialize();

  useEffect(() => {
    // With this method we dynamically load the catalogs
    dynamicActivate();
  }, []);

  let [userState, setUserState] = usePersistedState('UserState', new UserState());

  const featureProps = {
    id: query.get('id'),
    query: query,
    mmobject: mmobject,
    userState: userState,
    setUserState: setUserState,
    anchorId: window.location.href.slice(window.location.href.indexOf('#') + 1),
  };

  return (
    <I18nProvider i18n={i18n}>
      <Box display="flex" flexDir="column" minH="100vh">
        <ScrollToTop />
        <MenuWithSubnavigation />
        <Switch>
          <Route exact path={`${homeURL}/`} children={() => <Home {...featureProps} />} />
          <Route exact path={`${homeURL}/disclaimer`} children={() => <Disclaimer {...featureProps} />} />
          <Route exact path={`${homeURL}/loesungs-finder`} children={() => <SolutionExplorer {...featureProps} />} />
          <Route exact path={`${homeURL}/exit`} children={() => <ExitJourney {...featureProps} />} />
          <Route exact path={`${homeURL}/zpo`} children={() => <ZPOInformation {...featureProps} />} />
          <Route
            exact
            path={`${homeURL}/moegliche-ansprueche`}
            children={() => <PossibleEntitlements {...featureProps} />}
          />
          <Route exact path={`${homeURL}/naechste-schritte`} children={() => <NextSteps {...featureProps} />} />
          <Route exact path={`${homeURL}/bryter`}>
            <Helmet>
              <title>Justiz Portal - BRYTER</title>
            </Helmet>
            <Bryter {...featureProps} />
          </Route>
        </Switch>
        <FooterSmallWithSocial />
      </Box>
    </I18nProvider>
  );
};
