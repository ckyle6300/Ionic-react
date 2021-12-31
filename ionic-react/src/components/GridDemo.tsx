import {
  IonApp,
  IonCol,
  IonContent,
  IonGrid,
  IonRow,
  setupIonicReact,
} from '@ionic/react';
import React from 'react';
import styles from './GridDemo.module.css';

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
import '../theme/variables.css';

setupIonicReact();

const GridDemo: React.FC = () => {
  return (
    <IonApp>
      <IonContent>
        <IonGrid fixed className={styles.grid}>
          <IonRow className='ion-align-items-center'>
            <IonCol
              size='12'
              size-md='6'
              className={`${styles.col} ion-text-center`}
            >
              1
            </IonCol>
            <IonCol className={styles.col}>2</IonCol>
            <IonCol className={styles.col}>3</IonCol>
          </IonRow>
          <IonRow>
            <IonCol className={styles.col} size-md='6' offset-md='6'>
              4
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonApp>
  );
};

export default GridDemo;
