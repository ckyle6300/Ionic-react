import {
  IonApp,
  IonButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
  isPlatform,
} from '@ionic/react';
import { add } from 'ionicons/icons';
import React from 'react';

const GoodMemory: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='primary'>
          {isPlatform('ios') && (
            <IonButtons slot='end'>
              <IonButton routerLink='/new-memories'>
                <IonIcon slot='icon-only' icon={add} />
              </IonButton>
            </IonButtons>
          )}
          <IonTitle>Good Memory</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p className='ion-text-center'>Hello from Good Memory Page</p>
        {!isPlatform('ios') && (
          <IonFab vertical='bottom' horizontal='end'>
            <IonFabButton routerLink='/new-memories'>
              <IonIcon icon={add} />
            </IonFabButton>
          </IonFab>
        )}
      </IonContent>
    </IonPage>
  );
};

export default GoodMemory;
