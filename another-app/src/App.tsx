import React, { Suspense, lazy } from 'react';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonSplitPane,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import { happy, sad } from 'ionicons/icons';

// import NewMemory from './pages/NewMemory';
// import BadMemory from './pages/BadMemory';
// import GoodMemory from './pages/GoodMemory';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/theme.css';
import MemoriesContextProvider from './data/MemoriesContextProvider';

setupIonicReact();

const NewMemory = lazy(() => import('./pages/NewMemory'));
const BadMemory = lazy(() => import('./pages/BadMemory'));
const GoodMemory = lazy(() => import('./pages/GoodMemory'));

const App: React.FC = () => {
  return (
    <IonApp>
      <Suspense fallback={<p>Loading...</p>}>
        <IonReactRouter>
          <MemoriesContextProvider>
            <IonTabs>
              <IonRouterOutlet>
                <Route exact path='/good-memories'>
                  <GoodMemory />
                </Route>
                <Route exact path='/bad-memories'>
                  <BadMemory />
                </Route>
                <Route exact path='/new-memories'>
                  <NewMemory />
                </Route>
                <Redirect to='/good-memories' />
              </IonRouterOutlet>
              <IonTabBar slot='bottom'>
                <IonTabButton href='/good-memories' tab='good'>
                  <IonIcon icon={happy} />
                  <IonLabel>Good Memories</IonLabel>
                </IonTabButton>
                <IonTabButton href='/bad-memories' tab='bad'>
                  <IonIcon icon={sad} />
                  <IonLabel>Bad Memories</IonLabel>
                </IonTabButton>
              </IonTabBar>
            </IonTabs>
          </MemoriesContextProvider>
        </IonReactRouter>
      </Suspense>
    </IonApp>
  );
};

export default App;
