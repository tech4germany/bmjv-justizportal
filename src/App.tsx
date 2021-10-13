import { Spacer } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/react';
import React, { Children, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch, useLocation } from 'react-router-dom';

import FooterSmallWithSocial from './components/shared/Footer';
import { MenuWithSubnavigation } from './components/shared/MainMenu';
import { Home } from './pages/Home';
import { SolutionExplorer } from './pages/SolutionExplorer';
import { ExitJourney } from './pages/ExitJourney';
import { ZPOInformation } from './pages/ZPOInformation';
import { PossibleEntitlements } from './pages/PEntitlements';
import { MMGraph } from './logic/KMParser';
import { Bryter } from './pages/BRYTER';
import { usePersistedState } from './logic/PersistedState';
import { UserState } from './logic/UserState';
import { Options } from './pages/Options';

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
        <Route path="/solutionexplorer" component={() => <SolutionExplorer {...featureProps} />} exact />
        <Route path="/exit" component={() => <ExitJourney {...featureProps} />} exact />
        <Route path="/zpo" component={() => <ZPOInformation />} exact />
        <Route path="/possibleentitlements" component={() => <PossibleEntitlements {...featureProps} />} exact />
        <Route path="/options" component={() => <Options {...featureProps} />} exact />
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
