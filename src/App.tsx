import { Box } from '@chakra-ui/react';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Route, Switch, useLocation } from 'react-router-dom';
import { DisclaimerBanner } from './components/shared/DisclaimerBanner';
import { MenuWithSubnavigation } from './components/shared/MainMenu';
import { homeURL, Routes, ShortCuts } from './Const';
import { MMGraph } from './logic/KMParser';
import { usePersistedState } from './logic/PersistedState';
import { UserState } from './logic/UserState';
import { Bryter } from './pages/BRYTER';
import { ConsultationOffers } from './pages/ConsultationOffers';
import { Disclaimer } from './pages/disclaimer';
import { ExitJourney } from './pages/ExitJourney';
import { Home } from './pages/Home';
import { NextSteps } from './pages/NextSteps';
import { PossibleEntitlements } from './pages/PossibleEntitlements';
import { SolutionExplorer } from './pages/SolutionExplorer';
import { ZPOInformation } from './pages/ZPOInformation';
import { dynamicActivate } from './translations/i18n';
import { Imprint } from './pages/Imprint';
import Footer from './components/shared/Footer';
import { HomeMVP } from './pages/Home_MVP';
import { Privacy } from './pages/Privacy';

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
        <DisclaimerBanner />
        <MenuWithSubnavigation />
        <Switch>
          <Route exact path={`${homeURL}/`} children={() => <HomeMVP {...featureProps} />} />
          <Route exact path={`${homeURL}/old`} children={() => <Home {...featureProps} />} />
          <Route exact path={`${homeURL}/${Routes.Disclaimer}`} children={() => <Disclaimer {...featureProps} />} />
          <Route
            exact
            path={`${homeURL}/${Routes.SolutionExplorer}`}
            children={() => <SolutionExplorer {...featureProps} />}
          />
          <Route exact path={`${homeURL}/${Routes.Exit}`} children={() => <ExitJourney {...featureProps} />} />
          <Route
            exact
            path={`${homeURL}/${Routes.ZPOInformation}`}
            children={() => <ZPOInformation {...featureProps} />}
          />
          <Route exact path={`${homeURL}/${Routes.Exit}`} children={() => <ExitJourney {...featureProps} />} />
          <Route
            exact
            path={`${homeURL}/${Routes.ZPOInformation}`}
            children={() => <ZPOInformation {...featureProps} />}
          />
          <Route
            exact
            path={`${homeURL}/${Routes.ConsultationOffers}`}
            children={() => <ConsultationOffers {...featureProps} />}
          />
          <Route
            exact
            path={`${homeURL}/${Routes.PossibleEntitlements}`}
            children={() => <PossibleEntitlements {...featureProps} />}
          />
          <Route exact path={`${homeURL}/${Routes.NextSteps}`} children={() => <NextSteps {...featureProps} />} />
          <Route exact path={`${homeURL}/${Routes.Imprint}`} children={() => <Imprint {...featureProps} />} />
          <Route exact path={`${homeURL}/${Routes.Privacy}`} children={() => <Privacy {...featureProps} />} />
          <Route exact path={`${homeURL}/${Routes.Bryter}`}>
            <Helmet>
              <title>Justiz Portal - Formularassistent</title>
            </Helmet>
            <Bryter {...featureProps} />
          </Route>
          <ShortCuts />
        </Switch>
        <Footer />
      </Box>
    </I18nProvider>
  );
};
