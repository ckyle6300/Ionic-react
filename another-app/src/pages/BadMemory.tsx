import {
  IonApp,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
} from '@ionic/react';
import React from 'react';
import { add } from 'ionicons/icons';

const BadMemory: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='primary'>
          <IonButtons slot='end'>
            <IonButton routerLink='/new-memories'>
              <IonIcon slot='icon-only' icon={add} />
            </IonButton>
          </IonButtons>
          <IonTitle>Bad Memory</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p className='ion-text-center'>Hello from Bad Memory Page</p>
      </IonContent>
    </IonPage>
  );
};

export default BadMemory;
