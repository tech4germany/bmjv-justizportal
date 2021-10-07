import { Spacer } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch, useLocation } from 'react-router-dom';

import FooterSmallWithSocial from './components/shared/Footer';
import { MenuWithSubnavigation } from './components/shared/MainMenu';
import { EntitlementCheck } from './pages/Entitlement';
import { Home } from './pages/Home';
import { SolutionExplorer } from './pages/SolutionExplorer';
import { ExitJourney } from './pages/ExitJourney';
import { ZPOInformation } from './pages/ZPOInformation';
import { PossibleEntitlements } from './pages/PEntitlements';

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
  const featureProps = { id: query.get('id') };

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
        <Route path="/solutionexplorer" exact>
          <Helmet>
            <title>Justiz Portal - Lösungsfinder</title>
          </Helmet>
          <SolutionExplorer {...featureProps} />
        </Route>
        <Route path="/exit" exact>
          <Helmet>
            <title>Justiz Portal - Ende</title>
          </Helmet>
          <ExitJourney {...featureProps} />
        </Route>
        <Route path="/zpo" exact>
          <Helmet>
            <title>Justiz Portal - ZPO</title>
          </Helmet>
          <ZPOInformation />
        </Route>
        <Route path="/options" exact>
          <Helmet>
            <title>Justiz Portal - Handlungsoptionen</title>
          </Helmet>
          <PossibleEntitlements {...featureProps} />
        </Route>
      </Switch>
      <Spacer />
      <FooterSmallWithSocial />
    </Box>
  );
};
