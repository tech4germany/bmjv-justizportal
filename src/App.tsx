import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Route, Switch, useLocation } from 'react-router-dom';
import FooterSmallWithSocial from './components/shared/Footer';
import { MenuWithSubnavigation } from './components/shared/MainMenu';
import { MMGraph } from './logic/KMParser';
import { usePersistedState } from './logic/PersistedState';
import { UserState } from './logic/UserState';
import { Bryter } from './pages/BRYTER';
import { ExitJourney } from './pages/ExitJourney';
import { Home } from './pages/Home';
import { NextSteps } from './pages/NextSteps';
import { PossibleEntitlements } from './pages/PEntitlements';
import { SolutionExplorer } from './pages/SolutionExplorer';
import { ZPOInformation } from './pages/ZPOInformation';

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

  let [userState, setUserState] = usePersistedState('UserState', new UserState());

  const featureProps = {
    id: query.get('id'),
    mmobject: mmobject,
    userState: userState,
    setUserState: setUserState,
  };

  return (
    <Box display="flex" flexDir="column" minH="100vh">
      <ScrollToTop />
      <MenuWithSubnavigation />
      <Switch>
        <Route path="/" exact>
          <Helmet>
            <title>Justiz Portal - Home</title>
          </Helmet>
          <Home anchorId={window.location.href.slice(window.location.href.indexOf('#') + 1)} />
        </Route>
        <Route path="/solutionexplorer" children={() => <SolutionExplorer {...featureProps} />} exact />
        <Route path="/exit" children={() => <ExitJourney {...featureProps} />} exact />
        <Route path="/zpo" children={() => <ZPOInformation {...featureProps} />} exact />
        <Route path="/possibleentitlements" children={() => <PossibleEntitlements {...featureProps} />} exact />
        <Route path="/nextsteps" children={() => <NextSteps {...featureProps} />} exact />
        <Route path="/bryter" exact>
          <Helmet>
            <title>Justiz Portal - BRYTER</title>
          </Helmet>
          <Bryter {...featureProps} />
        </Route>
      </Switch>
      <FooterSmallWithSocial />
    </Box>
  );
};
