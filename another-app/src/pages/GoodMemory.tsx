import {
  IonApp,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { add } from 'ionicons/icons';
import React from 'react';

const GoodMemory: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='primary'>
          <IonButtons slot='end'>
            <IonButton routerLink='/new-memories'>
              <IonIcon slot='icon-only' icon={add} />
            </IonButton>
          </IonButtons>
          <IonTitle>Good Memory</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p className='ion-text-center'>Hello from Good Memory Page</p>
      </IonContent>
    </IonPage>
  );
};

export default GoodMemory;
